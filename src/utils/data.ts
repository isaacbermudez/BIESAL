// src/data.ts

const services = [
  {
    title: "Eje 1: Sistema Administrativo",
    description:
      "Plataforma propia para la <strong>gestión interna centralizada</strong> (solicitudes, usuarios, reportes). <strong>Automatiza procesos clave</strong> para eliminar tareas manuales y garantizar el control operativo.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round"
           d="M3 7.5h18m-11 3v8m4-8v8M4.5 7.5v13.5h15V7.5M9 3h6v4.5H9V3z" />
         </svg>`,
    color: 'text-primary',
    border: 'border-primary',
    features: [
        "Optimiza la toma de decisiones.",
        "Módulos escalables (Inventario, Clientes, Reportes).",
        "Incluye Módulo de Solicitudes.",
    ]
  },
  {
    title: "Eje 2: Página Web",
    description:
      "<strong>Desarrollo web moderno y adaptado a tu marca.</strong> Ofrece <strong>integración total y en tiempo real</strong> con el Sistema Administrativo, gestionando automáticamente todo el tráfico y clientes.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round"
           d="M3.75 3h16.5v18H3.75V3zM3 7.5h18" />
         </svg>`,
    color: 'text-orange-400',
    border: 'border-orange-400',
    features: [
        "Usabilidad multiplataforma y Responsive Design.",
        "Diseño totalmente alineado con su identidad corporativa.",
        "Integración automática de Solicitudes.",
    ]
  },
];

export { services };