export default {
  global: {
    Name: 'Conceptos de servicio al cliente y normativa',
    Description:
      'El componente formativo “Servicio al cliente y normativa” desarrolla conocimientos relacionados con cultura de servicio, atención al cliente, normativa de calidad, protección de datos y legislación del consumidor. Fortalece competencias orientadas a la satisfacción del cliente, la comunicación organizacional y la aplicación de estándares de calidad en entornos empresariales y de servicio.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Atención y cultura de servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Atención y servicio al cliente en la planeación estratégica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Cultura de Servicio',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características del servicio',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Promesa básica del servicio',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Satisfacción del cliente',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Valor agregado',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atención al cliente y fidelización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de clientes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Protocolo de servicio al cliente',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Etiqueta empresarial',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Imagen personal',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Tendencias actuales en la vestimenta laboral',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Imagen corporativa y protocolos de atención',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elementos corporativos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Portafolio de productos y servicios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Elementos de un portafolio de servicios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Aspectos normativos relacionados con el servicio al cliente',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Etapas del servicio al cliente',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de calidad y normas ISO',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Generalidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'GTC ISO 10001',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'GTC ISO 10002 y principios clave para la atención de quejas de los clientes',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'GTC ISO 10003 y principios para resolución justa de conflictos con el cliente',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'GTC ISO 10004, proceso de medición y medición de la satisfacción',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'GTC ISO 10008',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'GTC ISO 10010',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Normatividad y protección del consumidor',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Confidencialidad en el manejo de la información y datos personales',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Estatuto del Consumidor (Ley 1480 de 2011)',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'CONPES 3649 – Política Nacional de Servicio al Ciudadano',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Cultura de servicio',
      significado:
        'conjunto de prácticas orientadas a satisfacer las necesidades del cliente.',
    },
    {
      termino: 'Cliente interno',
      significado:
        'persona o área dentro de la organización que recibe servicios internos.',
    },
    {
      termino: 'Cliente externo',
      significado:
        'usuario que adquiere productos o servicios de una organización.',
    },
    {
      termino: 'Fidelización',
      significado:
        'estrategia orientada a mantener clientes satisfechos y frecuentes.',
    },
    {
      termino: 'Protocolo',
      significado: 'conjunto de normas de comportamiento institucional.',
    },
    {
      termino: 'Imagen corporativa',
      significado: 'percepción que tienen los usuarios sobre una organización.',
    },
    {
      termino: 'Portafolio de servicios',
      significado:
        'documento que presenta los productos o servicios ofrecidos.',
    },
    {
      termino: 'ISO',
      significado: 'Organización Internacional de Normalización.',
    },
    {
      termino: 'Inocuidad',
      significado: 'condición que garantiza seguridad y ausencia de riesgos.',
    },
    {
      termino: 'Protección de datos',
      significado:
        'medidas destinadas a garantizar privacidad de la información personal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alguacil Garrido, R. (2010). Imagen personal. Publicaciones Vértice SL. ',
      link: 'https://www.google.com.co/books/edition/Imagen_personal/oioUmR1UDdQC?hl=es-419&gbpv=0&utm_source=chatgpt.com',
    },
    {
      referencia:
        'Araque, D. L., Sánchez, J. M., & Uribe, A. F. (2017). Relación entre marketing interno y compromiso organizacional en centros de desarrollo tecnológico colombianos. Estudios Gerenciales, 33(143), 95–101. ',
      link: 'https://www.redalyc.org/journal/212/21252448010/21252448010.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Carrero Morales, Y. B. (2019). Identidad corporativa y los valores organizacionales desde un liderazgo de avanzada. Revista Scientific, 4(14), 347–366. ',
      link: 'https://www.redalyc.org/journal/5636/563662154018/html/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Chiavenato, I., & Sapiro, A. (2016). Planeación estratégica: Fundamentos y aplicaciones (3.ª ed.). Elsevier Editora Ltda.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2011). Ley 1480 de 2011: Por medio de la cual se expide el Estatuto del Consumidor y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2010). Documento CONPES 3649: Política Nacional de Servicio al Ciudadano. Consejo Nacional de Política Económica y Social. ',
      link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Económicos/3649.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Duque Oliva, E. J., & Carvajal Prieto, L. A. (2015). La identidad organizacional y su influencia en la imagen: una reflexión teórica. Suma de Negocios, 6(13), 114–123. ',
      link: 'https://www.redalyc.org/journal/6099/609964673013/html/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'García, A. (2016). Cultura de servicio en la optimización del servicio al cliente. Telos, 18(3), 381–398. Universidad Privada Dr. Rafael Belloso Chacín. ',
      link: 'https://www.redalyc.org/articulo.oa?id=99346931003&utm_source=chatgpt.com',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2015). ISO 9001:2015 Sistemas de gestión de la calidad — Requisitos. ',
      link: 'https://www.iso.org/obp/ui/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2018). ISO 10001:2018. Gestión de la calidad — Satisfacción del cliente — Directrices para los códigos de conducta de las organizaciones. ',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2004). ISO 10002. Gestión de la calidad — Satisfacción del cliente — Directrices para el tratamiento de las quejas en las organizaciones.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2018). ISO 10003. Gestión de la calidad — Satisfacción del cliente — Directrices para la resolución de conflictos externos a las organizaciones.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2018). ISO 10004. Gestión de la calidad — Satisfacción del cliente — Directrices para el seguimiento y la medición.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2022). ISO 10008. Gestión de la calidad — Orientación para las transacciones de comercio electrónico del negocio al consumidor.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization (ISO). (2022). ISO 10010. Gestión de la calidad — Orientaciones para el desarrollo y fortalecimiento de una cultura de calidad.',
      link: '',
    },
    {
      referencia:
        'Limonta Más, R. J., Andraus Quintero, C. E., & Lazo Pastó, O. R. (2020). Análisis de modelos de branding corporativo. ECA Sinergia, 11(3), 84–100. ',
      link: 'https://www.redalyc.org/journal/5885/588564791008/html/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Martínez, C. (2017, agosto). ¿Qué es un portafolio de servicios? Lifeder. ',
      link: 'https://www.lifeder.com/portafolio-de-servicios/?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Morales, A. (2019). El servicio al cliente como estrategia competitiva. Revista Colombiana de Ciencias Administrativas, 8–20. ',
      link: '',
    },
    {
      referencia:
        'Núñez, M. E. (2016). Etiqueta, protocolo y buenas maneras, ¿dónde están? Multiciencias, 16(1), 3–4. Universidad del Zulia. ',
      link: 'https://www.redalyc.org/pdf/904/90450808001.pdf?utm_source=chatgpt.com',
    },
    {
      referencia:
        'Restrepo, C. E., Restrepo Ferro, L. S., & Estrada Mejía, S. (2006). Enfoque estratégico del servicio al cliente. Scientia et Technica, 12(32), 289–294. ',
      link: 'https://www.redalyc.org/pdf/849/84911652051.pdf?utm_source=chatgpt.com',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
