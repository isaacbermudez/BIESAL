// src/data.ts

const services = [
  {
    title: "SISTEMA ADMINISTRATIVO",
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
        "Módulos escalables (Inventario, Clientes, Reportes, etc).",
        "Incluye Módulo de Solicitudes.",
    ]
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
    color: 'text-orange-400',
    border: 'border-orange-400',
    features: [
        "Usabilidad multiplataforma y Responsive Design.",
        "Diseño totalmente alineado con su identidad corporativa.",
        "Integración automática de Solicitudes.",
    ]
  },
];


const faqs = [
    {
        question: "¿Cuál es el costo total de la inversión inicial y qué incluye?",
        answer: `La <strong>Inversión Única Total</strong> para el Ecosistema Digital Integrado es de <strong>$600 USD</strong> (cubriendo ambos productos). Sin embargo, usted puede optar por la inversión de cada producto de forma separada:
            
                <strong>Sistema Administrativo Centralizado:</strong> <strong>$300 USD</strong>.
                <strong>Desarrollo de la Página Web:</strong> <strong>$300 USD</strong>.
            
            El monto total incluye el desarrollo, la configuración inicial y las pruebas funcionales del o los productos seleccionados.`,
    },
    {
        question: "¿Qué tecnologías se utilizan para el desarrollo de la página web?",
        answer: `Utilizamos tecnologías web modernas y probadas como <strong>React, Vite, Bootstrap y Tailwind CSS</strong>. Esta combinación garantiza un sitio web rápido, responsivo y optimizado para todos los dispositivos móviles y de escritorio.`,
    },
    {
        question: "¿Cuáles son los costos recurrentes y por qué son necesarios?",
        answer: `Los costos recurrentes son mínimos y necesarios para mantener su presencia en línea. El <strong>Alojamiento Web (Hosting)</strong> tiene un costo aproximado de <strong>$17 por mes</strong> y garantiza que su sitio esté disponible 24/7 con respaldo automático de datos y seguridad avanzada. El <strong>Dominio Web</strong> cuesta aproximadamente <strong>$17 por año</strong> y mantiene la propiedad de su dirección web, incluyendo certificado SSL para conexiones seguras. Estos servicios son contratados directamente por usted, manteniendo control total sobre su infraestructura digital.`,
    },
    {
        question: "¿Cómo funciona la expansión modular de la plataforma?",
        answer: `Ofrecemos un <strong>sistema modular flexible</strong> que permite expandir su plataforma según sus necesidades de negocio. Cada módulo se integra perfectamente con su sistema existente, permitiendo un crecimiento tecnológico progresivo sin reemplazar lo ya implementado.`,
    },
    {
        question: "¿Qué ventajas ofrece el Sistema Administrativo personalizado?",
        answer: `Nuestro sistema administrativo ofrece ventajas estratégicas sobre soluciones genéricas de almacenamiento en la nube. Cuenta con <strong>Gestión Centralizada</strong> mediante una base de datos unificada que conecta todas las áreas de su negocio. Ofrece <strong>Seguridad Reforzada</strong> con encriptación avanzada y control de accesos por roles, superior a carpetas compartidas tradicionales. Proporciona <strong>Eficiencia Operativa</strong> a través de la automatización de procesos que reduce errores humanos y duplicación de trabajo. Además, está diseñado con <strong>Escalabilidad</strong> para crecer con su empresa sin necesidad de migrar a otra plataforma.`,
    },
    {
        question: "¿Cuáles son los próximos pasos después de aprobar el proyecto?",
        answer: `Una vez aprobado el proyecto, iniciamos con una <strong>Reunión de Planificación</strong> donde definimos cronograma, requerimientos específicos y objetivos del proyecto. Luego procedemos con la <strong>Recopilación de Materiales</strong>, solicitando logos, contenido, imágenes y preferencias de diseño. Si aplica, coordinamos la <strong>Migración</strong> para transferir dominio, contenido y correos desde su proveedor actual. Posteriormente realizamos el <strong>Desarrollo y Pruebas</strong>, creando su plataforma y realizando pruebas exhaustivas. Continuamos con la <strong>Capacitación</strong> de su equipo en el uso del sistema administrativo. Finalmente, ejecutamos el <strong>Lanzamiento</strong>, poniendo en línea su nueva plataforma digital.`,
    },
];

export { services, faqs };