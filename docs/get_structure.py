import os
import ast
import re

def get_imports(file_path):
    """Extract import statements from a Python file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            tree = ast.parse(f.read(), filename=file_path)
        imports = []
        for node in ast.walk(tree):
            if isinstance(node, ast.Import):
                for name in node.names:
                    imports.append(f"import {name.name}")
            elif isinstance(node, ast.ImportFrom):
                module = node.module or ''
                for name in node.names:
                    imports.append(f"from {module} import {name.name}")
        return imports if imports else ["No imports"]
    except (SyntaxError, UnicodeDecodeError, FileNotFoundError):
        return ["Unable to parse imports"]

def get_js_imports(file_path):
    """Extract import statements from a JavaScript/JSX file using regex."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        # Regex to match JS import statements (handles default, named, and module imports)
        import_pattern = r'^\s*import\s+(?:(?:{([^}]+)})|(\w+))\s+from\s+[\'"]([^\'"]+)[\'"]\s*;'
        imports = []
        for line in content.splitlines():
            line = line.strip()
            if line.startswith('//') or line.startswith('/*') or line.startswith('*'):
                continue  # Skip comments
            match = re.match(import_pattern, line, re.MULTILINE)
            if match:
                if match.group(1):  # Named imports: import { foo, bar } from 'module'
                    named_imports = [name.strip() for name in match.group(1).split(',')]
                    for name in named_imports:
                        if name:  # Avoid empty names
                            imports.append(f"from {match.group(3)} import {name}")
                elif match.group(2):  # Default import: import React from 'react'
                    imports.append(f"from {match.group(3)} import {match.group(2)}")
        return imports if imports else ["No imports"]
    except (UnicodeDecodeError, FileNotFoundError):
        return ["Unable to parse imports"]

def count_lines(file_path):
    """Count non-empty, non-comment lines in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        # Count lines that are not empty and not comments (Python #, JS //, or /* */)
        return sum(1 for line in lines if line.strip() and not line.strip().startswith(('#', '//', '/*', '*')))
    except (UnicodeDecodeError, FileNotFoundError):
        return 0

def get_directory_structure(rootdir, ignore_list=None):
    if ignore_list is None:
        ignore_list = []

    structure = []

    if not os.path.isdir(rootdir):
        return f"Error: Directory '{rootdir}' not found."

    for root, dirs, files in os.walk(rootdir):
        relative_path_from_root = os.path.relpath(root, rootdir)

        # Filter out ignored directories
        dirs_copy = dirs[:]
        for d in dirs_copy:
            full_relative_dir_path = os.path.normpath(os.path.join(relative_path_from_root, d))
            if full_relative_dir_path != '.':
                full_relative_dir_path += os.sep

            if (d + os.sep in ignore_list or 
                d in ignore_list or 
                (full_relative_dir_path + os.sep) in ignore_list): 
                dirs.remove(d)

        level = root.replace(rootdir, '').count(os.sep)
        indent = ' ' * 4 * level

        current_dir_name = os.path.basename(root)
        current_relative_path = os.path.normpath(relative_path_from_root)

        if current_relative_path != '.':
            if (current_dir_name + os.sep in ignore_list or 
                (current_relative_path + os.sep) in ignore_list):
                continue

        if root == rootdir:
            structure.append(f"{os.path.basename(rootdir)}/")
        else:
            structure.append(f"{indent}{current_dir_name}/")

        subindent = ' ' * 4 * (level + 1)
        files_to_add = []
        for f in files:
            full_relative_file_path = os.path.normpath(os.path.join(relative_path_from_root, f))
            if (f in ignore_list or 
                (f.endswith('.pyc') and '*.pyc' in ignore_list) or 
                full_relative_file_path in ignore_list):
                continue
            files_to_add.append(f)

        for f in sorted(files_to_add):
            file_path = os.path.join(root, f)
            if f.endswith('.py'):
                imports = get_imports(file_path)
                line_count = count_lines(file_path)
                structure.append(f"{subindent}{f} (Lines: {line_count}, Imports: {', '.join(imports)})")
            elif f.endswith(('.js', '.jsx')):
                imports = get_js_imports(file_path)
                line_count = count_lines(file_path)
                structure.append(f"{subindent}{f} (Lines: {line_count}, Imports: {', '.join(imports)})")
            else:
                structure.append(f"{subindent}{f}")

    return "\n".join(structure)

def write_structure_to_docs(output_path, project_root, ignore_patterns):
    try:
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("## 📁 Project Structure\n\n")
            f.write("```\n")
            f.write(get_directory_structure(project_root, ignore_patterns))
            f.write("\n```\n")
        print(f"✅ Structure successfully written to {output_path}")
    except Exception as e:
        print(f"❌ Error writing to {output_path}: {e}")

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))  # /docs
    project_root = os.path.abspath(os.path.join(script_dir, ".."))  # One level up

    output_file_path = os.path.join(script_dir, 'structure.md')  # write to /docs/structure.md

    ignore_patterns = [
        'backend/.env',
        'frontend/.env',
        '.DS_Store',
        'node_modules/',
        '.venv/',
        '__pycache/',
        '.git/',
        '*.pyc',
        '.vite/',
        'get_structure.py',
        'update_structure.py',
        'README.txt',
        'README.md',
        'frontend/README.md',
        'docs/structure.md',
    ]

    write_structure_to_docs(output_file_path, project_root, ignore_patterns)