export type Language = 'en' | 'es';

export const defaultLanguage: Language = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      contact: 'Contact',
      signIn: 'Sign In',
    },
    hero: {
      title: 'Find Your Perfect\nFurry Friend',
      subtitle: 'Adoptia uses AI technology to match you with your ideal pet companion, making shelter adoption simpler and more successful than ever.',
      findMatch: 'Find Your Match',
      learnMore: 'Learn More',
    },
    howItWorks: {
      title: 'Adopt in 3 easy steps',
      step1: {
        title: 'Create your profile',
        description: 'Fill your profile with your lifestyle, ideal pet, preferences, and everything that helps us understand what you\'re looking for.',
      },
      step2: {
        title: 'Get recommendations',
        description: 'Our AI algorithm analyzes your information and shows you the best matches. Interact with our assistant to refine your search.',
      },
      step3: {
        title: 'Meet your new friend',
        description: 'Contact the shelter and set up an appointment to meet your future companion in person.',
      },
    },
    features: {
      title: 'Innovative characteristics',
      ai: {
        title: 'Personalized AI',
        description: 'An advanced algorithm that learns your preferences and lifestyle to recommend the perfect pet that fits your home.',
      },
      search: {
        title: 'Advanced Search',
        description: 'Filter by breed, age, size, personality, and more features to find exactly what you\'re looking for.',
      },
      connection: {
        title: 'Direct Connection',
        description: 'Contact verified shelters quickly and safely, with no intermediaries or complicated processes.',
      },
      resources: {
        title: 'Comprehensive Resources',
        description: 'Access articles on animal care, training, health, and a directory of nearby veterinarians.',
      },
    },
    benefits: {
      title: 'Benefits of using Adoptia',
      saveTime: {
        title: 'Save Time',
        description: 'Find your ideal companion without spending hours browsing multiple websites or visiting dozens of shelters.',
      },
      decision: {
        title: 'Informed Decision',
        description: 'AI helps you make a choice based on real compatibility, reducing stress and uncertainty.',
      },
      match: {
        title: 'Perfect Match',
        description: 'Maximize happiness for both you and your new friend by finding the best possible match.',
      },
      community: {
        title: 'Supportive Community',
        description: 'Join a network of animal lovers where you can share experiences and valuable advice.',
      },
    },
    metrics: {
      adoptions: {
        number: '300+',
        title: 'Adoptions',
        subtitle: 'Pets that found a home',
      },
      compatibility: {
        number: '88%',
        title: 'Compatibility',
        subtitle: 'Matching success rate',
      },
      shelters: {
        number: '50+',
        title: 'Shelters',
        subtitle: 'Across Spain and South America',
      },
    },
    shelterFeatures: {
      title: 'We empower your shelter',
      subtitle: 'Step up your shelter with our comprehensive suite of tools designed to streamline operations and increase successful adoptions.',
      management: {
        title: 'Pet Management',
        description: 'Easily manage pet profiles, medical records, and adoption status. Update information in real-time and track each animal\'s journey.',
      },
      matching: {
        title: 'Adopter Matching',
        description: 'Access AI-powered matching to connect your animals with the most suitable families, increasing successful adoption rates.',
      },
      analytics: {
        title: 'Analytics Dashboard',
        description: 'Track adoption rates, viewer engagement, and other key metrics to optimize your shelter\'s performance and impact.',
      },
      communication: {
        title: 'Communication Hub',
        description: 'Manage all adopter communications in one place. Send updates, schedule visits, and coordinate adoptions efficiently.',
      },
      alerts: {
        title: 'Alert System',
        description: 'Set up automated notifications for medical check-ups, adoption follow-ups, and important shelter events.',
      },
      events: {
        title: 'Event Planning',
        description: 'Organize and promote adoption events, fundraisers, and volunteer activities through our integrated calendar system.',
      },
    },
    testimonials: {
      title: 'What Families Are Saying',
      subtitle: 'Hear from families and partners who have experienced the Adoptia difference.',
      testimonial1: "Thanks to Adoptia's AI matching, we found our perfect companion. The platform made it easy to find a pet that checked everything we were looking for.",
      testimonial2: "As shelter volunteers, Adoptia has transformed how we connect our animals with loving homes. Their AI technology is revolutionary.",
      testimonial3: "The AI-powered matching system helped me find a senior dog called Pipo. I couldn't be happier with how perfect he is for my lifestly.",
    },
    contact: {
      title: 'Connect With Us',
      subtitle: 'Have questions about adoption or how Adoptia can help? Our team is here to provide guidance and support on your journey.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        message: 'Message',
        placeholder: {
          name: 'Enter your name',
          email: 'Enter your email',
          message: 'How can we help you?',
        },
        submit: 'Send Message',
      },
      email: {
        title: 'Email Us',
        subtitle: 'For general inquiries:',
      },
      chat: {
        title: 'Live Chat',
        subtitle: 'Our support team is available Monday through Friday, 9am-5pm EST.',
        button: 'Start Chat',
      },
    },
    blog: {
      title: 'Our Blog',
      subtitle: 'Stories of innovation, compassion, and successful adoptions from our community.',
      readMore: 'Read more',
      backToAll: 'Back to all posts',
      postedOn: 'Posted on',
      by: 'By',
    },
    footer: {
      about: {
        description: 'Connecting hearts and building families through innovative, compassionate technology.',
      },
      quickLinks: {
        title: 'Quick Links',
        home: 'Home',
        about: 'About Us',
        mission: 'Our Mission',
        team: 'Our Team',
        testimonials: 'Testimonials',
        contact: 'Contact',
      },
      resources: {
        title: 'Resources',
        guide: 'Adoption Guide',
        faq: 'FAQs',
        blog: 'Blog',
        support: 'Support Services',
        partners: 'Agency Partners',
      },
      newsletter: {
        title: 'Newsletter',
        description: 'Stay updated with our latest news and resources.',
        placeholder: 'Your email address',
        button: 'Subscribe',
      },
      copyright: '© 2025 Adoptia. All rights reserved.',
      policies: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        cookies: 'Cookie Policy',
      },
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      blog: 'Blog',
      contact: 'Contacto',
      signIn: 'Iniciar sesión',
    },
    hero: {
      title: 'Encuentra tu\nCompañero Perfecto',
      subtitle: 'Adoptia utiliza tecnología de vanguardia e inteligencia artificial para conectarte con tu mascota ideal, haciendo la adopción más simple y exitosa que nunca.',
      findMatch: 'Encuentra tu match',
      learnMore: 'Saber más',
    },
    howItWorks: {
      title: 'Adopta en 3 simples pasos',
      step1: {
        title: 'Crea tu perfil',
        description: 'Completa tu perfil con tu estilo de vida, mascota ideal, preferencias y todo lo que nos ayude a entender lo que buscas.',
      },
      step2: {
        title: 'Recibe recomendaciones',
        description: 'Nuestro algoritmo de IA analiza tu información y te muestra las mejores coincidencias. Interactúa con nuestro asistente para refinar tu búsqueda.',
      },
      step3: {
        title: 'Conoce a tu nuevo amigo',
        description: 'Contacta al refugio y programa una cita para conocer a tu futuro compañero en persona.',
      },
    },
    features: {
      title: 'Características innovadoras',
      ai: {
        title: 'IA Personalizada',
        description: 'Un algoritmo avanzado que aprende tus preferencias y estilo de vida para recomendar la mascota perfecta para tu hogar.',
      },
      search: {
        title: 'Búsqueda Avanzada',
        description: 'Filtra por raza, edad, tamaño, personalidad y más características para encontrar exactamente lo que buscas.',
      },
      connection: {
        title: 'Conexión Directa',
        description: 'Contacta refugios verificados de forma rápida y segura, sin intermediarios ni procesos complicados.',
      },
      resources: {
        title: 'Recursos Completos',
        description: 'Accede a artículos sobre cuidado animal, entrenamiento, salud y un directorio de veterinarios cercanos.',
      },
    },
    benefits: {
      title: 'Beneficios de usar Adoptia',
      saveTime: {
        title: 'Ahorra Tiempo',
        description: 'Encuentra tu compañero ideal sin pasar horas navegando múltiples sitios web o visitando docenas de refugios.',
      },
      decision: {
        title: 'Decisión Informada',
        description: 'La IA te ayuda a tomar una decisión basada en compatibilidad real, reduciendo el estrés y la incertidumbre.',
      },
      match: {
        title: 'Match Perfecto',
        description: 'Maximiza la felicidad tanto para ti como para tu nuevo amigo encontrando la mejor coincidencia posible.',
      },
      community: {
        title: 'Comunidad de Apoyo',
        description: 'Únete a una red de amantes de los animales donde puedes compartir experiencias y consejos valiosos.',
      },
    },
    metrics: {
      adoptions: {
        number: '300+',
        title: 'Adopciones',
        subtitle: 'Mascotas que encontraron hogar',
      },
      compatibility: {
        number: '88%',
        title: 'Compatibilidad',
        subtitle: 'Tasa de éxito al vincular',
      },
      shelters: {
        number: '50+',
        title: 'Refugios',
        subtitle: 'En España y Sudamérica',
      },
    },
    shelterFeatures: {
      title: 'Potenciamos tu refugio',
      subtitle: 'Mejora tu refugio con nuestra suite completa de herramientas diseñadas para optimizar operaciones y aumentar adopciones exitosas.',
      management: {
        title: 'Gestión de Mascotas',
        description: 'Gestiona fácilmente perfiles de mascotas, registros médicos y estado de adopción. Actualiza información en tiempo real y rastrea el viaje de cada animal.',
      },
      matching: {
        title: 'Match de Adoptantes',
        description: 'Utiliza IA para conectar tus animales con las familias más adecuadas, aumentando las tasas de adopción exitosa.',
      },
      analytics: {
        title: 'Panel de Análisis',
        description: 'Rastrea tasas de adopción, engagement de visitantes y otras métricas clave para optimizar el rendimiento e impacto de tu refugio.',
      },
      communication: {
        title: 'Centro de Comunicación',
        description: 'Gestiona todas las comunicaciones con adoptantes en un solo lugar. Envía actualizaciones, programa visitas y coordina adopciones eficientemente.',
      },
      alerts: {
        title: 'Sistema de Alertas',
        description: 'Configura notificaciones automáticas para chequeos médicos, seguimientos de adopción y eventos importantes del refugio.',
      },
      events: {
        title: 'Planificación de Eventos',
        description: 'Organiza y promociona eventos de adopción, recaudación de fondos y actividades voluntarias a través de nuestro sistema integrado de calendario.',
      },
    },
    testimonials: {
      title: 'Lo que dicen las familias',
      subtitle: 'Escucha de familias y refugios que han experimentado Adoptia.',
      testimonial1: "Gracias a la inteligencia artificial de Adoptia, encontramos a nuestra mascota ideal. La plataforma nos facilitó encontrar una mascota que cumple con todos lo que estabamos buscando.",
      testimonial2: "Como voluntarios de refugios, Adoptia ha transformado la forma en que conectamos a nuestros animales con hogares amorosos. Su tecnología de inteligencia artificial es revolucionaria.",
      testimonial3: "El sistema de emparejamiento con IA me ayudó a encontrar a Pipo, un perro mayor. Estoy maravillada con lo perfecto que es para mi estilo de vida.",
    },
    contact: {
      title: 'Conéctate con nosotros',
      subtitle: '¿Tienes preguntas sobre adopción o cómo Adoptia puede ayudar? Nuestro equipo está aquí para brindarte orientación y apoyo en tu viaje.',
      form: {
        name: 'Tu nombre',
        email: 'Correo electrónico',
        message: 'Mensaje',
        placeholder: {
          name: 'Ingresa tu nombre',
          email: 'Ingresa tu correo',
          message: '¿Cómo podemos ayudarte?',
        },
        submit: 'Enviar mensaje',
      },
      email: {
        title: 'Envíanos un email',
        subtitle: 'Para consultas generales:',
      },
      chat: {
        title: 'Chat en vivo',
        subtitle: 'Nuestro equipo de soporte está disponible de Lunes a Viernes, 9am-5pm EST.',
        button: 'Iniciar chat',
      },
    },
    blog: {
      title: 'Nuestro blog',
      subtitle: 'Historias de innovación, compasión y adopciones exitosas de nuestra comunidad.',
      readMore: 'Leer más',
      backToAll: 'Volver a todas las publicaciones',
      postedOn: 'Publicado el',
      by: 'Por',
    },
    footer: {
      about: {
        description: 'Adopta con inteligencia, ama con el corazón.',
      },
      quickLinks: {
        title: 'Enlaces rápidos',
        home: 'Inicio',
        about: 'Sobre nosotros',
        mission: 'Nuestra misión',
        team: 'Nuestro equipo',
        testimonials: 'Testimonios',
        contact: 'Contacto',
      },
      resources: {
        title: 'Recursos',
        guide: 'Guía de adopción',
        faq: 'Preguntas frecuentes',
        blog: 'Blog',
        support: 'Servicios de soporte',
        partners: 'Agencias asociadas',
      },
      newsletter: {
        title: 'Boletín',
        description: 'Mantente actualizado con nuestras últimas noticias y recursos.',
        placeholder: 'Tu correo electrónico',
        button: 'Suscribirse',
      },
      copyright: '© 2025 Adoptia. Todos los derechos reservados.',
      policies: {
        privacy: 'Política de privacidad',
        terms: 'Términos de servicio',
        cookies: 'Política de cookies',
      },
    },
  },
} as const;

export const useTranslation = (language: Language = defaultLanguage) => {
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        if (value[k] === undefined) {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
        value = value[k];
      }
      
      return value;
    },
  };
};