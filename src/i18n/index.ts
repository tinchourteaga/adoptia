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
      findMatch: 'Find your match',
      learnMore: 'Learn more',
    },
    about: {
      title: 'About Adoptia',
      subtitle: 'Founded in 2024, Adoptia is revolutionizing pet adoption by using AI technology to create perfect matches between shelter animals and loving homes.',
      story: {
        title: 'Our story',
        content1: 'Adoptia was created by a dedicated team of animal lovers who saw a better way to connect pets with people. Through their experiences volunteering at shelters, they witnessed the struggles shelters faced in placing animals and the frustration adopters felt trying to find the right companion.',
        content2: 'Today, our AI-powered platform brings together shelters and potential adopters in a way that considers not just basic preferences, but lifestyle factors, comfort with animals, and pet personalities to ensure successful, lasting adoptions.',
        content3: 'We believe that technology, when designed with compassion and understanding, can help more pets find their forever homes while supporting everyone involved in this life-changing journey.'
      }
    },
    mission: {
      title: 'Our mission and values',
      subtitle: 'We\'re committed to creating a world where every pet has the opportunity to thrive in a loving family, and where the adoption process is supportive, transparent, and centered on compassion.',
      values: {
        innovation: {
          title: 'Innovation',
          description: 'We leverage AI technology to create perfect matches between pets and their forever homes.'
        },
        compassion: {
          title: 'Compassion',
          description: 'Every animal deserves love and care. We approach each adoption with heart and understanding.'
        },
        integrity: {
          title: 'Integrity',
          description: 'We maintain transparent relationships with shelters and adopters, ensuring trust in every step.'
        },
        community: {
          title: 'Community',
          description: 'We build strong networks connecting shelters, adopters, and animal welfare advocates.'
        }
      }
    },
    coverage: {
      title: 'Our global presence',
      subtitle: 'Currently operating in Spain and across South America, we\'re expanding our network to help more pets find their forever homes.',
      legend: {
        regions: 'Active regions',
        shelters: '50+ partner shelters'
      },
      locations: {
        spain: {
          title: 'Spain',
          description: '20+ partner shelters across major cities'
        },
        southAmerica: {
          title: 'South America',
          description: '30+ partner shelters in Argentina, Chile, and Colombia'
        }
      }
    },
    team: {
      title: 'Our team',
      subtitle: 'Meet the passionate professionals dedicated to transforming the adoption experience through innovation, compassion, and expertise.',
      members: {
        sarah: {
          name: 'Sarah Johnson',
          role: 'CEO & Founder',
          bio: 'A former shelter volunteer, Sarah founded Adoptia to revolutionize pet adoption through AI-powered matching.'
        },
        michael: {
          name: 'Michael Chen',
          role: 'Chief Technology Officer',
          bio: 'Michael leads our AI initiatives, developing innovative solutions to match pets with their perfect families.'
        },
        aisha: {
          name: 'Aisha Patel',
          role: 'Director of Shelter Relations',
          bio: 'Aisha\'s background in animal welfare drives her passion for connecting shelters with potential adopters.'
        },
        david: {
          name: 'David Rodriguez',
          role: 'Head of Partnerships',
          bio: 'David builds relationships with shelters and veterinary clinics to expand our network and help more pets find homes.'
        }
      }
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
        title: 'Advanced search',
        description: 'Filter by breed, age, size, personality, and more features to find exactly what you\'re looking for.',
      },
      connection: {
        title: 'Direct connection',
        description: 'Contact verified shelters quickly and safely, with no intermediaries or complicated processes.',
      },
      resources: {
        title: 'Comprehensive resources',
        description: 'Access articles on animal care, training, health, and a directory of nearby veterinarians.',
      },
    },
    benefits: {
      title: 'Benefits of using Adoptia',
      saveTime: {
        title: 'Save time',
        description: 'Find your ideal companion without spending hours browsing multiple websites or visiting dozens of shelters.',
      },
      decision: {
        title: 'Informed decision',
        description: 'AI helps you make a choice based on real compatibility, reducing stress and uncertainty.',
      },
      match: {
        title: 'Perfect match',
        description: 'Maximize happiness for both you and your new friend by finding the best possible match.',
      },
      community: {
        title: 'Supportive community',
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
        title: 'Pet management',
        description: 'Easily manage pet profiles, medical records, and adoption status. Update information in real-time and track each animal\'s journey.',
      },
      matching: {
        title: 'Adopter matching',
        description: 'Access AI-powered matching to connect your animals with the most suitable families, increasing successful adoption rates.',
      },
      analytics: {
        title: 'Analytics dashboard',
        description: 'Track adoption rates, viewer engagement, and other key metrics to optimize your shelter\'s performance and impact.',
      },
      communication: {
        title: 'Communication hub',
        description: 'Manage all adopter communications in one place. Send updates, schedule visits, and coordinate adoptions efficiently.',
      },
      alerts: {
        title: 'Alert system',
        description: 'Set up automated notifications for medical check-ups, adoption follow-ups, and important shelter events.',
      },
      events: {
        title: 'Event planning',
        description: 'Organize and promote adoption events, fundraisers, and volunteer activities through our integrated calendar system.',
      },
    },
    testimonials: {
      title: 'What families are saying',
      subtitle: 'Hear from families and shelters who have experienced the Adoptia difference.',
      testimonial1: "Thanks to Adoptia's AI matching, we found our perfect companion. The platform made it easy to find a pet that checked everything we were looking for.",
      testimonial2: "As shelter volunteers, Adoptia has transformed how we connect our animals with loving homes. Their AI technology is revolutionary.",
      testimonial3: "The AI-powered matching system helped me find a senior dog called Pipo. I couldn't be happier with how perfect he is for my lifestly.",
    },
    contact: {
      title: 'Connect with us',
      subtitle: 'Have questions about adoption or how Adoptia can help? Our team is here to provide guidance and support on your journey.',
      form: {
        title: 'Get in touch',
        name: 'Your name',
        email: 'Email address',
        message: 'Message',
        placeholder: {
          name: 'Enter your name',
          email: 'Enter your email',
          message: 'How can we help you?',
        },
        submit: 'Send message',
      },
      email: {
        title: 'Email us',
        subtitle: 'For general inquiries:',
      },
      chat: {
        title: 'Live chat',
        subtitle: 'Our support team is available Monday through Friday, 9am-5pm EST.',
        button: 'Start chat',
      },
    },
    blog: {
      title: 'Our blog',
      subtitle: 'Stories of innovation, compassion, and successful adoptions from our community.',
      readMore: 'Read more',
      backToAll: 'Back to all posts',
      postedOn: 'Posted on',
      by: '| By',
      posts: {
        post1: {
          title: 'The story of Adoptia: revolutionizing pet adoption through AI',
          date: 'April 18, 2025',
          excerpt: 'How a simple vision transformed into a revolutionary platform connecting shelter pets with their perfect forever homes.',
          paragraph1: 'In 2024, Adoptia emerged from a simple yet powerful vision: to transform the way people connect with shelter pets. Our founder, Sarah Johnson, witnessed firsthand the challenges both shelters and potential adopters faced in finding the perfect match.',
          paragraph2: '"Too often, I saw wonderful animals waiting months for adoption while loving families struggled to find their ideal pet" Sarah recalls. "I knew technology could bridge this gap."',
          paragraph3: 'This insight led to the development of our AI-powered matching system, which considers over 50 different factors to create compatible connections between pets and adopters. The results have been remarkable:',
          paragraph4: 'But Adoptia is more than just technology. It is about building a community where every adoption story becomes a success story. Our platform provides continuous support, resources, and guidance to ensure both pets and their new families thrive together.',
          bullet1: '88% successful match rate',
          bullet2: '50% reduction in average adoption time',
          bullet3: '90% decrease in adoption returns',
          bullet4: 'Partnerships with over 50 shelters across Spain and South America',
        },
        post2: {
          title: 'How AI is making pet adoption more successful',
          date: 'March 28, 2025',
          excerpt: 'Discover how our advanced AI algorithms are creating perfect matches between pets and adopters.',
          paragraph1: 'In recent years, AI has begun to reshape the pet adoption landscape, making the process faster, more personalized, and ultimately more successful. Traditional methods often left both shelters and adopters overwhelmed—too many animals to choose from, too little information about compatibility. Now, with intelligent algorithms, adopters are no longer left guessing which pet might fit their lifestyle and emotional needs.',
          paragraph2: 'Platforms using AI, like Adoptia, analyze a wide range of data points—from adopter habits and household dynamics to pet behavior and health history. “It’s not just about matching a dog with someone who likes dogs,” explains tech advisor Miguel Santos. “It’s about understanding energy levels, emotional temperaments, even future compatibility as both pet and owner evolve.”',
          paragraph3: 'The impact is clear: higher match success rates, fewer pets returned to shelters, and shorter adoption cycles. Many shelters report up to a 50% reduction in wait times for animals and a dramatic drop in mismatches. AI tools also help identify overlooked animals, ensuring that every pet, not just the cutest or youngest, gets a fair chance at finding a loving home.',
          paragraph4: 'But the success of AI in pet adoption goes beyond the match itself. These platforms continue supporting new pet parents post-adoption—offering training tips, health tracking, and behavior guidance tailored to each pet. It’s a smarter, more compassionate way to build lasting bonds—and it iss changing lives on both ends of the leash.',
        },
        post3: {
          title: 'Transforming animal operations with technology',
          date: 'March 4, 2025',
          excerpt: 'Lean how technology is a fundamental ally in operations and critical moments',
          paragraph1: 'Technology is revolutionizing the way animal welfare organizations operate, bringing efficiency, transparency, and better care across every level. From shelter management software to automated feeding systems, tech tools are helping teams do more with less—freeing up time and resources for what matters most: the animals.',
          paragraph2: 'Modern platforms now allow shelters to track medical records, manage volunteers, and monitor adoptions in real time. “Before, everything was done with spreadsheets and paper files,” says operations manager Carla Ruiz. “Now, we can coordinate across teams, spot issues early, and respond faster to the needs of our animals.”',
          paragraph3: 'The impact of these tools is tangible. Shelters report higher staff productivity, fewer medical errors, and better animal outcomes overall. With real-time data, decisions are smarter and more proactive, whether it’s identifying a health trend, optimizing space, or improving daily routines.',
          paragraph4: 'But beyond efficiency, technology is reshaping the culture of care. It empowers staff, informs adopters, and strengthens the connection between communities and shelters. When operations run smoothly, animals thrive, and that’s the real power behind this digital transformation.',
        },
      },
    },
    footer: {
      about: {
        description: 'Adopt with intelligence, love with your heart.',
      },
      quickLinks: {
        title: 'Quick links',
        home: 'Home',
        about: 'About us',
        mission: 'Our mission',
        team: 'Our team',
        testimonials: 'Testimonials',
        contact: 'Contact',
      },
      resources: {
        title: 'Resources',
        guide: 'Adoption guide',
        faq: 'FAQs',
        blog: 'Blog',
        support: 'Support services',
        partners: 'Agency partners',
      },
      newsletter: {
        title: 'Newsletter',
        description: 'Stay updated with our latest news and resources.',
        placeholder: 'Your email address',
        button: 'Subscribe',
      },
      copyright: '© 2025 Adoptia. All rights reserved.',
      policies: {
        privacy: 'Privacy policy',
        terms: 'Terms of service',
        cookies: 'Cookie policy',
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
    about: {
      title: 'Sobre Adoptia',
      subtitle: 'Fundada en 2024, Adoptia está revolucionando la adopción de mascotas utilizando tecnología de IA para crear matches perfectos entre animales de refugio y hogares amorosos.',
      story: {
        title: 'Nuestra historia',
        content1: 'Adoptia fue creada por un equipo dedicado de amantes de los animales que vieron una mejor manera de conectar mascotas con personas. A través de sus experiencias como voluntarios en refugios, fueron testigos de las dificultades que enfrentaban los refugios para ubicar animales y la frustración que sentían los adoptantes al tratar de encontrar al compañero adecuado.',
        content2: 'Hoy, nuestra plataforma impulsada por IA une a refugios y potenciales adoptantes de una manera que considera no solo preferencias básicas, sino factores de estilo de vida, comodidad con los animales y personalidades de las mascotas para asegurar adopciones exitosas y duraderas.',
        content3: 'Creemos que la tecnología, cuando se diseña con compasión y comprensión, puede ayudar a más mascotas a encontrar sus hogares para siempre mientras apoya a todos los involucrados en este viaje que cambia vidas.'
      }
    },
    mission: {
      title: 'Nuestra misión y valores',
      subtitle: 'Estamos comprometidos a crear un mundo donde cada mascota tenga la oportunidad de prosperar en una familia amorosa, y donde el proceso de adopción sea solidario, transparente y centrado en la compasión.',
      values: {
        innovation: {
          title: 'Innovación',
          description: 'Aprovechamos la tecnología de IA para crear matches perfectos entre mascotas y sus hogares para siempre.'
        },
        compassion: {
          title: 'Compasión',
          description: 'Cada animal merece amor y cuidado. Abordamos cada adopción con corazón y comprensión.'
        },
        integrity: {
          title: 'Integridad',
          description: 'Mantenemos relaciones transparentes con refugios y adoptantes, asegurando la confianza en cada paso.'
        },
        community: {
          title: 'Comunidad',
          description: 'Construimos redes sólidas que conectan refugios, adoptantes y defensores del bienestar animal.'
        }
      }
    },
    coverage: {
      title: 'Nuestra presencia global',
      subtitle: 'Actualmente operando en España y en toda Sudamérica, estamos expandiendo nuestra red para ayudar a más mascotas a encontrar sus hogares para siempre.',
      legend: {
        regions: 'Regiones activas',
        shelters: '50+ refugios asociados'
      },
      locations: {
        spain: {
          title: 'España',
          description: '20+ refugios asociados en las principales ciudades'
        },
        southAmerica: {
          title: 'Sudamérica',
          description: '30+ refugios asociados en Argentina, Chile y Colombia'
        }
      }
    },
    team: {
      title: 'Nuestro equipo',
      subtitle: 'Conoce a los profesionales apasionados dedicados a transformar la experiencia de adopción a través de la innovación, la compasión y la experiencia.',
      members: {
        sarah: {
          name: 'Sarah Johnson',
          role: 'CEO y Fundadora',
          bio: 'Ex voluntaria de refugio, Sarah fundó Adoptia para revolucionar la adopción de mascotas a través del matching impulsado por IA.'
        },
        michael: {
          name: 'Michael Chen',
          role: 'Director de Tecnología',
          bio: 'Michael lidera nuestras iniciativas de IA, desarrollando soluciones innovadoras para conectar mascotas con sus familias perfectas.'
        },
        aisha: {
          name: 'Aisha Patel',
          role: 'Directora de Relaciones con Refugios',
          bio: 'La experiencia de Aisha en bienestar animal impulsa su pasión por conectar refugios con potenciales adoptantes.'
        },
        david: {
          name: 'David Rodriguez',
          role: 'Jefe de Alianzas',
          bio: 'David construye relaciones con refugios y clínicas veterinarias para expandir nuestra red y ayudar a más mascotas a encontrar hogares.'
        }
      }
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
        title: 'Escribenos',
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
      by: '| Por',
      posts: {
        post1: {
          title: 'La historia de Adoptia: revolucionando la adopción de mascotas a través de IA',
          date: '18 abril, 2025',
          excerpt: 'Cómo una visión simple se transformó en una plataforma revolucionaria que conecta a las mascotas de refugios con sus hogares perfectos para siempre.',
          paragraph1: 'En 2024, Adoptia nació de una visión simple pero poderosa: transformar la manera en que las personas se conectan con las mascotas de los refugios. Nuestra fundadora, Sarah Johnson, fue testigo de primera mano de los desafíos que enfrentaban tanto los refugios como los posibles adoptantes al intentar encontrar la combinación perfecta.',
          paragraph2: '“Demasiadas veces vi animales maravillosos esperando durante meses una adopción, mientras familias amorosas luchaban por encontrar a su mascota ideal”, recuerda Sarah. “Sabía que la tecnología podía cerrar esa brecha.”',
          paragraph3: 'Esa idea dio lugar al desarrollo de nuestro sistema de emparejamiento con inteligencia artificial, que considera más de 50 factores distintos para crear conexiones compatibles entre mascotas y adoptantes. Los resultados han sido notables:',
          paragraph4: 'Pero Adoptia es mucho más que tecnología. Se trata de construir una comunidad en la que cada historia de adopción se convierta en una historia de éxito. Nuestra plataforma ofrece apoyo continuo, recursos y orientación para asegurar que tanto las mascotas como sus nuevas familias prosperen juntas.',
          bullet1: '88% de tasa de emparejamiento exitoso',
          bullet2: '50% de reducción en el tiempo promedio de adopción',
          bullet3: '90% de disminución en devoluciones de adopciones',
          bullet4: 'Alianzas con más de 50 refugios en España y Sudamérica',
        },
        post2: {
          title: 'Cómo la IA está ayudando a aumentar la tasa de adopción de mascotas',
          date: '28 marzo, 2025',
          excerpt: 'Descubre cómo nuestros algoritmos avanzados de IA están creando combinaciones perfectas entre mascotas y adoptantes.',
          paragraph1: 'En los últimos años, la inteligencia artificial ha comenzado a transformar el mundo de la adopción de mascotas, haciendo el proceso más rápido, personalizado y, en definitiva, más exitoso. Los métodos tradicionales a menudo dejaban tanto a los refugios como a los adoptantes abrumados: demasiados animales entre los que elegir y muy poca información sobre la compatibilidad. Ahora, con algoritmos inteligentes, los adoptantes ya no tienen que adivinar qué mascota se adapta mejor a su estilo de vida y necesidades emocionales.',
          paragraph2: 'Plataformas que utilizan IA, como Adoptia y otras, analizan una amplia variedad de datos, desde hábitos del adoptante y dinámica del hogar hasta comportamiento e historial de salud de las mascotas. “No se trata solo de emparejar a un perro con alguien que le gusten los perros”, explica el asesor tecnológico Miguel Santos. “Se trata de entender niveles de energía, temperamentos emocionales, incluso la compatibilidad futura a medida que mascota y humano evolucionan juntos.”',
          paragraph3: 'El impacto es evidente: mayores tasas de éxito en las adopciones, menos devoluciones de mascotas a los refugios y ciclos de adopción más cortos. Muchos refugios informan reducciones de hasta un 50% en los tiempos de espera y una disminución drástica en los casos de incompatibilidad. Las herramientas de IA también ayudan a identificar animales que suelen ser pasados por alto, asegurando que cada mascota, no solo la más joven o atractiva, tenga una oportunidad justa de encontrar un hogar.',
          paragraph4: 'Pero el éxito de la IA en la adopción de mascotas va más allá del emparejamiento inicial. Estas plataformas continúan apoyando a los nuevos dueños después de la adopción, ofreciendo consejos de entrenamiento, seguimiento de salud y orientación conductual personalizada para cada animal. Es una forma más inteligente y compasiva de construir vínculos duraderos, y está cambiando vidas en ambos extremos de la correa.',
        },
        post3: {
          title: 'Transformando las operaciones en animales con tecnología',
          date: '4 marzo, 2025',
          excerpt: 'Lee como la tecnología es una aliada fundamental en operaciones y momentos críticos.',
          paragraph1: 'La tecnología está revolucionando la forma en que operan las organizaciones de bienestar animal, aportando eficiencia, transparencia y mejor atención en todos los niveles. Desde software de gestión para refugios hasta sistemas automatizados de alimentación, las herramientas tecnológicas permiten a los equipos hacer más con menos, liberando tiempo y recursos para lo más importante: los animales.',
          paragraph2: 'Las plataformas modernas permiten ahora a los refugios registrar historiales médicos, coordinar voluntarios y monitorear adopciones en tiempo real. “Antes todo se hacía con hojas de cálculo y archivos en papel,” comenta Carla Ruiz, responsable de operaciones. “Ahora podemos coordinarnos entre equipos, detectar problemas a tiempo y responder más rápido a las necesidades de nuestros animales.”',
          paragraph3: 'El impacto de estas herramientas es evidente: los refugios informan una mayor productividad del personal, menos errores médicos y mejores resultados generales para los animales. Con datos en tiempo real, las decisiones son más inteligentes y proactivas, ya sea para detectar una tendencia de salud, optimizar el espacio o mejorar rutinas diarias.',
          paragraph4: 'Pero más allá de la eficiencia, la tecnología está transformando la cultura del cuidado. Empodera al personal, informa a los adoptantes y fortalece el vínculo entre la comunidad y los refugios. Cuando las operaciones funcionan bien, los animales prosperan y ese es el verdadero poder de esta transformación digital.',
        },
      },
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