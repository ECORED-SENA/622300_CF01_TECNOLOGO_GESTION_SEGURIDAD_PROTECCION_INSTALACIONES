<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Atención al cliente y fidelización
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img21.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La atención al cliente y la fidelización permiten fortalecer la relación entre la organización y el usuario, mediante estrategias orientadas a satisfacer sus necesidades, mejorar la experiencia del servicio y generar confianza y permanencia.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Tipos de clientes
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img22.jpg', alt='').m-auto
        .col-xl
          .box___style_2.fit___box_2_a(data-aos="fade-left")
            p.mb-0 Desde la perspectiva del servicio, el cliente es el eje central de la organización, ya que las estrategias y procesos se orientan a satisfacer sus necesidades. Restrepo, Restrepo y Estrada (2006), citados por Morales (2019), destacan que el cliente participa activamente en la creación de valor, por lo que existen diferentes tipos según su relación con la empresa.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img23.svg" style="max-width: 60px").m-auto
        .col
          h3 Cliente interno
      p.mb-5 El cliente interno es la persona o área de la organización que recibe productos, servicios o información de otra dependencia para cumplir sus funciones. Esta relación entre áreas permite desarrollar procesos de manera articulada, donde cada dependencia actúa como cliente y proveedor interno, contribuyendo a la eficiencia y generación de valor organizacional. En este sentido, se estudia el siguiente ejemplo de relación entre áreas y cliente interno.
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img24.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img25.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Compras
                  p.mb-0.text-center Provee al #[u área de insumos] (cliente interno). Le gestiona al cliente interno la adquisición de materias primas, materiales y servicios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Insumos
                  p.mb-0.text-center Provee al #[u área de producción] (cliente interno). Le almacena y entrega al cliente interno las materias primas e insumos necesarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Producción
                  p.mb-0.text-center Provee al #[u área de calidad y de ventas] (clientes internos). Transforma para sus clientes internos los insumos en productos terminados, según estándares establecidos
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Calidad
                  p.mb-0.text-center Provee al #[u área de producción y de ventas] (clientes internos). Verifica y asegura para sus clientes que los productos cumplan con los requisitos de calidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ventas
                  p.mb-0.text-center Provee a clientes externos e internos. Comercializa los productos terminados y gestiona los requerimientos del mercado.
          p.mb-5 A continuación, se presenta un caso práctico empresarial que permite comprender la relación funcional entre áreas y su aporte al logro de los objetivos organizacionales.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2-1(data-aos="fade-right")
            p.mb-0 #[b Caso práctico:] en una empresa manufacturera que confecciona camisas para hombre, el área de producción depende del departamento de insumos, el cual le proporciona materias primas como telas e hilos. Esta relación convierte al área de producción en un cliente interno del área de insumos. Los productos terminados son entregados a otros clientes, que pueden ser tanto internos como externos, lo que evidencia una cadena de valor interna basada en la colaboración entre departamentos. Reflexione según este ejemplo ¿Cómo puede esta empresa fortalecer la relación entre sus áreas internas para mejorar la eficiencia y la calidad del producto final?
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img30.png', alt='').m-auto
      p.mb-5 En este contexto, se presentan los principales aspectos relacionados con el cliente interno, su función dentro de la organización y su importancia en los procesos institucionales.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img31.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="¿Quién es el cliente interno?").ajuste-cajaAcordion
              p.mb-3 Es la persona, área o dependencia dentro de la organización que recibe productos, servicios o información de otra área para cumplir sus funciones.
            .row(titulo="¿Qué recibe?").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Productos o servicios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Información y comunicaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Recursos y herramientas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Apoyo y acompañamiento en procesos.
            .row(titulo="¿Qué entrega?").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Productos o servicios para otras áreas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Información para el desarrollo de procesos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Apoyo y colaboración interna. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Calidad en el cumplimiento de sus funciones.
            .row(titulo="¿Por qué es importante?").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fortalece la colaboración entre áreas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejora la eficiencia de los procesos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Favorece la calidad del servicio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Contribuye al logro de objetivos organizacionales.
            .row(titulo="Relación entre áreas").ajuste-cajaAcordion
              p.mb-3 Cada área actúa como cliente y proveedor interno, contribuyendo al funcionamiento eficiente y a la generación de valor dentro de la organización.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img23.svg" style="max-width: 60px").m-auto
        .col
          h3 Cliente externo
      p.mb-5 Los clientes externos son personas o empresas que adquieren productos o servicios sin pertenecer a la organización. Zavala y Vélez (2020) señalan que representan una fuente fundamental de ingresos, por lo que las organizaciones deben orientar sus procesos hacia la satisfacción, fidelización y cumplimiento de sus expectativas. A partir del siguiente caso, se evidenciará la importancia de brindar una atención de calidad a los clientes externos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2(data-aos="fade-right")
            p.mb-0 #[b Caso práctico:] un trabajador que ejerce como asesor en una entidad bancaria decide tomar vacaciones junto a su familia. Para organizar su viaje, contrata los servicios de una agencia de turismo. En este caso, se considera un cliente externo, ya que no tiene ningún vínculo laboral ni estructural con la empresa turística, pero accede a su oferta de servicios como consumidor final.  Dado el caso anterior, reflexione: ¿Por qué sería importante que una empresa cuide la experiencia de un cliente externo, aunque este solo utilice sus servicios una vez?
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img32.jpg', alt='').m-auto
      p.mb-5 Los clientes externos se identifican por valorar una atención personalizada y eficiente, suelen estar atentos a promociones o beneficios especiales.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img23.svg" style="max-width: 60px").m-auto
        .col
          h3 Clientes según su nivel de fidelización
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img33.jpg', alt='').m-auto
        .col-xl
          .box___style_2.fit___box_2-2(data-aos="fade-left")
            p.mb-0 Las organizaciones pueden clasificar a sus clientes según su comportamiento y nivel de fidelidad, lo que les permite ajustar sus estrategias de comunicación, ventas y atención. Esta segmentación facilita la identificación de clientes leales, a quienes se les pueden ofrecer recompensas, y de clientes ocasionales, que podrían ser atraídos mediante campañas específicas.
      p.mb-5 En este apartado, se abordará la clasificación de los clientes según su nivel de fidelización:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img34.png', alt="" ).m-auto
              h4.text-center Ocasional
              .box___card_sinbordes_p
                p.mb-0.text-center Clientes que compran por primera vez o lo hacen ocasionalmente, pero sin una frecuencia establecida.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img35.png', alt="" ).m-auto
              h4.text-center De compra regular
              .box___card_sinbordes_p
                p.mb-0.text-center Suele repetir la compra en el establecimiento, pero en ocasiones también consume en la competencia.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/img36.png', alt="" ).m-auto
              h4.text-center De compra frecuente
              .box___card_sinbordes_p
                p.mb-0.text-center Siempre compra el tipo de productos o servicios que vendemos en nuestro establecimiento.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img23.svg" style="max-width: 60px").m-auto
        .col
          h3 Clientes según su comportamiento
      p.mb-5 Los clientes presentan distintos comportamientos durante el proceso de atención, por lo que identificar sus características facilita una comunicación adecuada y un servicio más efectivo. Seguidamente, se presentan algunos tipos de clientes según su comportamiento:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img37.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img38.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Amable
                  p.mb-0.text-center Es un cliente amistoso y cordial, aunque puede mostrar inseguridad al momento de decidir. Se recomienda brindarle atención clara y concreta, evitando saturarlo con demasiada información.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img39.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reflexivo
                  p.mb-0.text-center Se caracteriza por analizar cuidadosamente la información antes de tomar decisiones. Requiere atención paciente, respuestas precisas y argumentos claros que le generen confianza.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img40.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Entusiasta
                  p.mb-0.text-center Es una persona conversadora y dinámica que suele enfocarse más en la interacción que en los detalles técnicos. Necesita explicaciones breves, claras y orientadas a la decisión de compra.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img41.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tímido
                  p.mb-0.text-center Es reservado y suele tardar en tomar decisiones. Requiere un trato respetuoso, acompañamiento constante y un ambiente de confianza que le permita sentirse seguro.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img42.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Indeciso
                  p.mb-0.text-center Presenta dudas frecuentes durante el proceso de compra y necesita mayor orientación. Se recomienda atenderlo con paciencia y resolver claramente cada una de sus inquietudes.
          p.mb-5 Además de los anteriores, existen otros tipos de clientes que se caracterizan por determinados comportamientos, los cuales influyen en la atención y la comunicación durante el servicio. Estos son:
      .bg___carrusel
        .px-5
          .row.align-items-center
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Silencioso
                  p.mb-0.text-center Habla poco y escucha atentamente, por lo que resulta difícil identificar sus necesidades. Es importante respetar sus silencios y ofrecer información clara y precisa.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Discutidor
                  p.mb-0.text-center Es un cliente que expresa fácilmente inconformidades y puede generar confrontaciones. Debe atenderse con amabilidad, manteniendo la calma y una actitud profesional.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Orgulloso
                  p.mb-0.text-center Se muestra seguro de sí mismo y considera que posee amplio conocimiento sobre el tema. Requiere argumentos sólidos, seguridad en la atención y comunicación respetuosa.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Escéptico
                  p.mb-0.text-center Tiende a desconfiar y a enfocarse en los aspectos negativos antes de tomar decisiones. Necesita evidencias, garantías y datos objetivos que respalden el producto o servicio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img47.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ocupado
                  p.mb-0.text-center Es directo, acelerado y dispone de poco tiempo durante la atención. Requiere respuestas rápidas, información puntual y un servicio ágil y eficiente.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 350px").m-auto
          Separador
          #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.2 Protocolo de servicio al cliente
          p.mb-5 Los protocolos de servicio al cliente establecen pautas de atención y comunicación que permiten brindar experiencias organizadas, respetuosas, eficientes y orientadas a la satisfacción del usuario. Se invita a reproducir el siguiente del tema.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video #[b Video]. Protocolos de servicio al cliente: introducción  
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Etiqueta empresarial
      p.mb-5 Las relaciones con los clientes requieren conductas adecuadas, comunicación respetuosa y organización en la atención. En este recurso audiovisual se desarrollan aspectos fundamentales de etiqueta y protocolo aplicados al servicio al cliente.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video #[b Video]. Normas de etiqueta y protocolo 
      p.mb-5 En desarrollo del tema, se dará paso a conocer los conceptos de etiqueta y protocolo:
      .color___box_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/img49.png', alt="" ).m-auto
                  h4.text-center Etiqueta
                  .box___card_sinbordes_p
                    p.mb-0 La etiqueta comprende normas de cortesía y comportamiento que influyen en la percepción del cliente. Núñez (2016) destaca que los buenos modales fortalecen las relaciones interpersonales y favorecen la atención al público.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___card_sinbordes.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/img50.png', alt="" ).m-auto
                  h4.text-center Protocolo
                  .box___card_sinbordes_p
                    p.mb-0 El protocolo en el servicio al cliente organiza los procesos de atención para garantizar uniformidad y calidad. En este sentido, las normas ISO 9000 favorecen la estructuración de actividades y el cumplimiento de los estándares y requisitos establecidos por los clientes.
          p.mb-5 Aunque la etiqueta y el protocolo se relacionan con la atención y el comportamiento profesional, cada uno cumple funciones específicas dentro del servicio al cliente y la interacción organizacional. Sus diferencias son:
      .color___box_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img51.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Etiqueta
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Cortesía.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Buenos modales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Trato amable.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Comunicación adecuada.
            .col-xl-4.col-md-9(data-aos="zoom-in")
              .box___style_3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/img52.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Protocolo
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Organización.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Procedimientos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Normas institucionales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Atención estructurada.
          p.mb-0 La cultura organizacional influye en la aplicación de la etiqueta y el protocolo en el servicio al cliente. García (2016) señala que fortalecer la cultura de servicio contribuye al mejoramiento interno y a la calidad de la atención ofrecida.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Imagen personal
      p.mb-5 La imagen personal influye en la comunicación, la percepción profesional y la confianza dentro de las organizaciones. En el siguiente pódcast se desarrollan aspectos relacionados con la presentación personal, el uso del uniforme y su importancia en el entorno laboral.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/img53.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-primario.mb-4(
                texto="La imagen personal en el entorno laboral"
                :audio="audio1"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/img54.png" ).m-auto
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Tendencias actuales en la vestimenta laboral
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img55.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En muchos países, como ejemplo: Estados Unidos y algunos de Europa, se permite el uso de ropa casual los viernes, esto incluye prendas como camisetas, chaquetas cómodas, pantalones tipo chino y calzado deportivo urbano. Vestir de forma informal no significa descuidada; esta tendencia se ha proliferado incluso en otros países como es el caso de Colombia.

</template>

<script>
import audio1 from '@/assets/componentes/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
