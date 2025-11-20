// src/data.ts

const services = [
  {
    title: "SISTEMA ADMINISTRATIVO",
    description:
      "Plataforma propia para la <strong>gestión interna centralizada</strong> (solicitudes, clientes, finanzas, reportes, etc). <strong>Automatiza procesos clave</strong> para eliminar tareas manuales y garantizar el control operativo.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round"
           d="M3 7.5h18m-11 3v8m4-8v8M4.5 7.5v13.5h15V7.5M9 3h6v4.5H9V3z" />
         </svg>`,
    color: "text-primary",
    border: "border-primary",
    features: [
      "Optimiza la toma de decisiones.",
      "Módulos escalables (Inventario, Clientes, Reportes, etc).",
      "Incluye Módulo de Solicitudes.",
    ],
  },
  {
    title: "PÁGINA WEB",
    description:
      "<strong>Desarrollo web moderno y adaptado a tu marca.</strong> Ofrece <strong>integración total y en tiempo real</strong> con el Sistema Administrativo, gestionando automáticamente todo el tráfico y clientes.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
           stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round"
           d="M3.75 3h16.5v18H3.75V3zM3 7.5h18" />
         </svg>`,
    color: "text-orange-400",
    border: "border-orange-400",
    features: [
      "Usabilidad multiplataforma y Responsive Design.",
      "Diseño totalmente alineado con su identidad corporativa.",
      "Integración automática de Solicitudes.",
    ],
  },
];

const faqs = [
  {
    question: "¿Cuál es el costo total de la inversión inicial y qué incluye?",
    answer: `La <strong>Inversión Base</strong> para el Ecosistema Digital Integrado es de <strong>$600 USD</strong> (cubriendo ambos productos). Sin embargo, usted puede optar por la inversión de cada producto de forma separada:<br><br>
            ➡️ <strong>Sistema Administrativo Centralizado:</strong> <strong>$300 USD</strong>.<br>
            ➡️ <strong>Desarrollo de la Página Web:</strong> <strong>$300 USD</strong>.<br><br>
            El monto total incluye el desarrollo, la configuración inicial y las pruebas funcionales del o los productos seleccionados.`,
  },
  {
    question:
      "¿Qué tecnologías se utilizan para el desarrollo de la página web?",
    answer: `Utilizamos tecnologías web modernas y probadas como <strong>React, Vite, Bootstrap y Tailwind CSS</strong>. Esta combinación garantiza un sitio web <strong>rápido</strong>, <strong>responsivo</strong>  y optimizado para funcionar sin problemas en todos los dispositivos móviles y de escritorio.`,
  },
  {
    question: "¿Cuáles son los costos recurrentes y por qué son necesarios?",
    answer: `Los costos de mantenimiento son esenciales y mínimos para asegurar la permanencia de su plataforma en línea. Le ofrecemos dos modalidades de gestión, y en <strong>ambas recibirá nuestra asesoría técnica continua</strong>:<br><br>
            
            <strong>OPCIÓN 1: Control Total (Autogestión)</strong><br>
            Usted contrata directamente su Hosting y Dominio. Los costos de referencia son:<br>
            ➡️ <strong>Alojamiento Web (Hosting):</strong> <strong>$17 USD/mes (aprox.)</strong>. Esto garantiza que su sitio esté operativo 24/7, con respaldos automáticos y seguridad avanzada.<br>
            ➡️ <strong>Dominio Web:</strong> <strong>$17 USD/año (aprox.)</strong>. Mantiene la propiedad de su dirección web e incluye el certificado SSL de seguridad.<br><br>
            
            <strong>OPCIÓN 2: Administración Delegada (Servicio Integral)</strong><br>
            Si desea despreocuparse completamente de la infraestructura, podemos <strong>cotizar y gestionar por separado</strong> los servicios de alojamiento y dominio, incluyendo toda la administración y soporte técnico por nuestro equipo.`,
  },
  {
    question: "¿Cómo funciona la expansión modular de la plataforma?",
    answer: `Si usted adquiere el <strong>Sistema Administrativo</strong> o la <strong>Página Web</strong>, estará obteniendo una plataforma diseñada con un <strong>sistema modular flexible</strong>. Esta arquitectura le permite expandir la funcionalidad de su ecosistema digital según evolucionen sus necesidades de negocio.<br><br>
            Cada nuevo módulo se integra perfectamente a su sistema ya existente, asegurando un crecimiento tecnológico progresivo <strong>sin necesidad de reemplazar</strong> lo que ya ha implementado con nosotros. Los módulos pueden cotizarse <strong>individualmente</strong> o podemos crear un <strong>paquete (bundle) de expansión</strong> a la medida de sus requerimientos.`,
  },
  {
    question: "¿Qué ventajas ofrece el Sistema Administrativo personalizado?",
    answer: `Nuestro sistema administrativo ofrece ventajas estratégicas sobre soluciones genéricas de almacenamiento en la nube:<br><br>
            ✨ <strong>Gestión Centralizada:</strong> Mediante una base de datos unificada que conecta todas las áreas de su negocio.<br>
            ✨ <strong>Seguridad Reforzada:</strong> Con encriptación avanzada y control de accesos por roles.<br>
            ✨ <strong>Eficiencia Operativa:</strong> A través de la automatización de procesos que reduce errores humanos y duplicación de trabajo.<br>
            ✨ <strong>Escalabilidad:</strong> Diseñado para crecer con su empresa sin necesidad de migrar a otra plataforma.`,
  },
  {
    question: "¿Cuáles son los próximos pasos después de aprobar el proyecto?",
    answer: `Una vez aprobado el proyecto, iniciamos los siguientes pasos para la puesta en marcha de su plataforma:<br><br>
            1️⃣ <strong>Reunión de Planificación:</strong> Definimos cronograma, requerimientos específicos y objetivos del proyecto.<br>
            2️⃣ <strong>Recopilación de Materiales:</strong> Solicitamos logos, contenido, imágenes y preferencias de diseño.<br>
            3️⃣ <strong>Migración (si aplica):</strong> Coordinamos la transferencia de dominio, contenido y correos desde su proveedor actual.<br>
            4️⃣ <strong>Desarrollo y Pruebas:</strong> Creamos su plataforma y realizamos pruebas exhaustivas.<br>
            5️⃣ <strong>Capacitación:</strong> Entrenamos a su equipo en el uso completo de la nueva plataforma.<br>
            6️⃣ <strong>Lanzamiento:</strong> Ponemos en línea su nueva plataforma digital, culminando el proyecto.`,
  },
];

export { services, faqs };
