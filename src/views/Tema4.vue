<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Gestión de calidad y normas ISO
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img76.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La gestión de calidad y las normas ISO permiten a las organizaciones establecer procesos orientados al mejoramiento continuo, la satisfacción del cliente y el cumplimiento de estándares internacionales. Estas normas promueven la eficiencia organizacional, fortalecen la confianza de los usuarios y contribuyen a garantizar productos y servicios con altos niveles de calidad.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Generalidades
      p.mb-5 Las normas ISO son estándares internacionales desarrollados por la Organización Internacional de Normalización (ISO), creados para orientar a las organizaciones en la implementación de buenas prácticas de gestión, calidad, seguridad y mejora organizacional. 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img77.png', alt='').m-auto
        .col-xl
          .box___style_2.color_box_1(data-aos="fade-left")
            p Las características principales son:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Promueven la organización y estandarización de procesos. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitan el control y seguimiento de las actividades. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Favorecen la mejora continua en los servicios y productos. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Contribuyen al cumplimiento de requisitos legales y técnicos. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Incrementan la confianza y satisfacción de los clientes. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Fortalecen la competitividad y la imagen organizacional. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Permiten optimizar recursos y reducir errores operativos.
      p.mb-0 La implementación de normas ISO contribuye a que las organizaciones desarrollen procesos más eficientes, transparentes y orientados a la calidad.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 GTC ISO 10001
      p.mb-5 En la presente sección se describirán los aspectos fundamentales de la norma GTC-ISO 10001:2019 en Colombia:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img78.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Concepto").ajuste-cajaAcordion
              p.mb-3 Es una norma orientada a fortalecer la confianza y satisfacción del cliente mediante el cumplimiento de compromisos y códigos de conducta en la prestación de productos y servicios. Asimismo, busca prevenir quejas y conflictos al garantizar el cumplimiento de las promesas realizadas, promoviendo así un entorno de confianza.
            .row(titulo="¿Qué busca esta norma?").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Generar confianza. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplir promesas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar la satisfacción. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Prevenir quejas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fortalecer la relación con el cliente.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Promover comunicación transparente.
            .row(titulo="¿Qué son los códigos de conducta?").ajuste-cajaAcordion.ajuste-vineta
              p  Son un conjunto de compromisos y reglas que orientan el comportamiento de la organización frente al cliente. Estos permiten:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Guiar la atención. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Definir compromisos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Promover transparencia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar la experiencia del usuario.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="¿Para quién aplica?").ajuste-cajaAcordion.ajuste-vineta
              p Aplica para:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Empresas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Entidades públicas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Organizaciones privadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Negocios pequeños. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Grandes organizaciones.
              p.mb-3 Cualquier organización que busque fortalecer la confianza y cumplir adecuadamente lo prometido al cliente.
            .row(titulo="¿Cómo se implementa?").ajuste-cajaAcordion
              p Etapas:
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Definir compromisos. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Diseñar códigos de conducta. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Implementar lineamientos. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Comunicar al personal. 
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Evaluar cumplimiento. 
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Mejorar continuamente.
            .row(titulo="Importancia de la norma").ajuste-cajaAcordion
              p.mb-3 La aplicación de la GTC ISO 10001 permite fortalecer la credibilidad organizacional, mejorar la satisfacción del cliente y consolidar relaciones basadas en la confianza y el cumplimiento de compromisos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img79.png", alt="" ).m-auto
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 GTC ISO 10002 y principios clave para la atención de quejas de los clientes
      p.mb-5 En este apartado se profundizará en el estudio de la norma GTC ISO 10002:2018.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img80.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Concepto").ajuste-cajaAcordion
              p.mb-3 La GTC ISO 10002 es una norma orientada a la gestión adecuada de las quejas de los clientes, promoviendo soluciones oportunas, mejora continua y fortalecimiento de la confianza en la organización. No se trata de resolver problemas, sino de transformar cada queja en una oportunidad de mejora y fortalecimiento de la relación con el cliente.
            .row(titulo="Objetivo de la norma").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Gestionar quejas adecuadamente.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar la atención al cliente.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Generar confianza. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fortalecer la satisfacción. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Promover mejora continua.
            .row(titulo="¿Para quién aplica?").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Empresas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Organizaciones públicas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Negocios privados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Instituciones de servicios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Organizaciones sin certificación ISO.
              p.mb-3 Puede ser implementada por cualquier organización interesada en fortalecer la gestión de quejas y la relación con sus clientes.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Principios en la atención de quejas").ajuste-cajaAcordion.ajuste-vineta
              p Los principios son:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Trato respetuoso y empático. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Acceso sin barreras. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Transparencia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Respuestas oportunas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejora continua.
            .row(titulo="Proceso de gestión de quejas").ajuste-cajaAcordion
              p Esta norma establece un enfoque integral para la gestión de quejas, comenzando con la planificación del proceso desde su diseño hasta la recepción de estas. EL proceso es:
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | Recepción de la queja. 
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Evaluación del caso. 
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Investigación. 
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Respuesta al cliente. 
                li 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Seguimiento. 
                li 
                  .lista-ol--cuadro__vineta
                    span 6
                  | Análisis y mejora.
            .row(titulo="Importancia de la norma").ajuste-cajaAcordion
              p.mb-3 La GTC ISO 10002 permite transformar las quejas en oportunidades de mejora, fortaleciendo la satisfacción del cliente, la transparencia y la calidad del servicio organizacional.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img81.png", alt="" ).m-auto
      p.mb-5 Con base en los lineamientos de la GTC ISO 10002, se presentan #[b principios clave para la adecuada atención y gestión de quejas de los clientes:]
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img83.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Trato respetuoso y empático
                  p.mb-0.text-center Escuchar con atención, hablar con amabilidad y ponerse en el lugar del cliente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img84.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Acceso sin barreras
                  p.mb-0.text-center Facilitar canales claros y simples para que el cliente pueda expresar sus quejas fácilmente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img85.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Transparencia en el proceso
                  p.mb-0.text-center Informar al cliente en cada etapa: qué se está haciendo, quién lo atiende y en qué plazo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img86.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Respuestas oportunas y fundamentadas
                  p.mb-0.text-center Responder con agilidad, pero también con argumentos claros, respetando la situación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img87.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Asunción de responsabilidades y mejora continua
                  p.mb-0.text-center Reconocer errores cuando ocurren, corregirlos y aprender de ellos para no repetirlos.
          p.mb-5 Con base en la norma GTC ISO 10003 y los principios orientados a la adecuada atención, se presenta la siguiente tabla, en la cual se relacionan dichos principios con los lineamientos establecidos en la norma: 
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Relación entre principios de atención y la ISO 10002
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Principios de atención
                  th.texto-left Relación con ISO 10002
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Trato respetuoso y empático
                  td.texto-left Enfoque al cliente
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Acceso sin barreras
                  td.texto-left Accesibilidad  
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Transparencia en el proceso
                  td.texto-left Transparencia
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Respuestas oportunas y fundamentadas
                  td.texto-left Capacidad de respuesta
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Asunción de responsabilidades y mejora continua
                  td.texto-left Responsabilidad + mejora continua   
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 GTC ISO 10003 y principios para resolución justa de conflictos con el cliente
      p.mb-5 En el siguiente apartado se describe los aspectos relacionados con la norma GTC ISO 10003:2018.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img88.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Concepto").ajuste-cajaAcordion
              p.mb-3 La GTC ISO 10003 establece directrices para la resolución de conflictos entre organizaciones y clientes, mediante mecanismos externos, pacíficos y no judiciales.
            .row(titulo="¿Cuándo se aplica esta norma?").ajuste-cajaAcordion.ajuste-vineta
              p Se aplica cuando:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cliente presenta queja. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Organización responde. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cliente no queda satisfecho. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Se activa resolución externa. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Se busca acuerdo.
            .row(titulo="¿Para qué sirve?").ajuste-cajaAcordion.ajuste-vineta
              p Sirve para:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Resolver conflictos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fortalecer confianza. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Garantizar trato justo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar procesos judiciales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar relaciones con clientes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Promover soluciones pacíficas.
            .row(titulo="Mecanismos de resolución de conflictos").ajuste-cajaAcordion.ajuste-vineta
              p Los mecanismos de resolución de conflictos son:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Negociación asistida:] un tercero neutral facilita la comunicación entre las partes para encontrar acuerdos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Mediación:] el mediador ayuda a construir un acuerdo voluntario sin imponer decisiones.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Conciliación:] el conciliador puede proponer alternativas de solución para resolver el conflicto. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Arbitraje:] un árbitro analiza el caso y emite una decisión que puede ser obligatoria.
            .row(titulo="Importancia de la norma").ajuste-cajaAcordion
              p.mb-3 La GTC ISO 10003 fortalece la confianza y la transparencia organizacional al ofrecer mecanismos justos y respetuosos para la resolución de conflictos con los clientes.
      p.mb-5 Con base en los lineamientos de la GTC ISO 10003, se presentan #[b principios para una resolución justa de conflictos con el cliente.]
      .bg___carrusel
        .px-5
          .row.align-items-center
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img89.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Imparcialidad
                  p.mb-0.text-center El proceso debe estar libre de intereses o favoritismos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img90.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Accesibilidad
                  p.mb-0.text-center Todo cliente debe poder participar sin trabas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img91.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Transparencia
                  p.mb-0.text-center Las reglas del proceso deben ser claras desde el inicio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img92.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Eficiencia
                  p.mb-0.text-center La resolución debe darse en un tiempo razonable.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img93.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Legalidad
                  p.mb-0.text-center Todo debe realizarse respetando la legislación vigente.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img130.png', alt='' style="max-width: 350px").m-auto
          Separador
          #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.5 GTC ISO 10004, proceso de medición y medición de la satisfacción
      p.mb-5 Conforme se presenta a continuación, se conocerá los elementos fundamentales de la norma GTC-ISO 10004:2019.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img94.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Concepto").ajuste-cajaAcordion
              p.mb-3 La GTC ISO 10004 establece directrices para el seguimiento y medición de la satisfacción del cliente, permitiendo a las organizaciones conocer la percepción de los usuarios y fortalecer la mejora continua.
            .row(titulo="¿Cuál es el propósito de la norma?").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Conocer percepción del cliente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evaluar satisfacción. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Detectar oportunidades de mejora. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Tomar decisiones basadas en datos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fortalecer fidelización. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar productos y servicios.
            .row(titulo="Importancia organizacional").ajuste-cajaAcordion
              p.mb-3 La medición de la satisfacción permite fortalecer la fidelización, mejorar la calidad del servicio y apoyar la toma de decisiones orientadas a la mejora continua organizacional.
      p.mb-5 El #[b proceso de medición] permite recopilar y analizar información relacionada con la satisfacción del cliente, facilitando la identificación de oportunidades de mejora y el fortalecimiento continuo de la calidad en los productos y servicios ofrecidos. Este se detalla a continuación:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Planificación
                p.mb-0 Se definen los objetivos, indicadores y métodos que se van a utilizar.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img95.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img96.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Recolección de datos
                p.mb-0 A través de encuestas, entrevistas, quejas, redes sociales o sugerencias.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Análisis de resultados
                p.mb-0 Se interpretan los datos para comprender qué está funcionando y qué no.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img97.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img98.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Comunicación
                p.mb-0 Los hallazgos se comparten con quienes toman decisiones.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Acción y mejora
                p.mb-0 Se diseñan e implementan planes para elevar la satisfacción.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img99.png', alt='' style="width: 300px").m-auto
      p.mb-5 La #[b medición de la satisfacción] permite conocer la percepción y experiencia de los clientes frente a los productos, servicios y procesos de atención, facilitando la identificación de oportunidades de mejora y el fortalecimiento de la fidelización. A continuación, se presenta los elementos generales:
      .bg___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aspectos relacionados con la satisfacción del cliente
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Percepción:] opinión que el cliente construye sobre el servicio o producto recibido.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Experiencia:] sensaciones y vivencias generadas durante la interacción con la organización.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Expectativas:] resultados que el cliente espera obtener antes de adquirir un producto o servicio.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Lealtad:] disposición del cliente para continuar utilizando los servicios o recomendar la marca.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Fidelización:] estrategias orientadas a fortalecer la permanencia y preferencia del cliente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img100.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Herramientas de medición
                  p Las herramientas de medición permiten recopilar información sobre la percepción y satisfacción de los clientes para apoyar la mejora continua. Estas son:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Encuestas:] conocer opiniones.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Índice Neto de Promotores:] medir recomendación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Entrevistas:] obtener información detallada. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Buzón de sugerencias:] recibir comentarios. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Indicadores:]  evaluar desempeño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img101.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Beneficios de medir la satisfacción
                  p Los principales beneficios son:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Fortalece la relación con el cliente. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mejora la fidelización. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Incrementa la retención. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Facilita la mejora continua. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Apoya la toma de decisiones. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Favorece la innovación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Contribuye al cumplimiento de normas de calidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img102.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Importancia para las organizaciones
                  p.mb-0 Escuchar y comprender al cliente permite mejorar continuamente los productos, servicios y procesos organizacionales, fortaleciendo la competitividad y la calidad del servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img103.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 GTC ISO 10008
      p.mb-5 La GTC ISO 10008 establece directrices orientadas a fortalecer la confianza, seguridad y transparencia en las transacciones electrónicas entre organizaciones y consumidores. El marco general de esta norma se detalla a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img104.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="¿Para qué sirve esta norma?").ajuste-cajaAcordion.ajuste-vineta
              p Sirve para:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fortalecer confianza digital. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Proteger al consumidor. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Garantizar información clara. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Promover compras seguras. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mejorar experiencia del cliente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Prevenir conflictos electrónicos.
            .row(titulo="¿A quién aplica?").ajuste-cajaAcordion.ajuste-vineta
              p Aplica a organizaciones que ofrecen productos o servicios mediante canales electrónicos, tales como:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Tiendas virtuales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicaciones móviles. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Plataformas de pago. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Servicios de suscripción. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Emprendimientos digitales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Empresas de comercio electrónico.
            .row(titulo="Importancia de la norma").ajuste-cajaAcordion
              p.mb-3 La implementación de la GTC ISO 10008 permite fortalecer la seguridad, transparencia y confianza en los entornos digitales, mejorando la experiencia del consumidor electrónico.
      p.mb-5 Los aspectos para abordar en la norma son los siguientes:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-8(data-aos="fade-right")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img105.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Protección de datos
                  p.mb-0.text-center Garantizar la seguridad y confidencialidad de la información del cliente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img106.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Claridad en la información
                  p.mb-0.text-center Presentar productos, precios y condiciones de forma transparente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img107.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Procesos de compra seguros
                  p.mb-0.text-center Brindar mecanismos confiables para pagos y transacciones electrónicas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img108.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Políticas visibles
                  p.mb-0.text-center Informar claramente devoluciones, garantías y atención de quejas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img109.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Confianza digital
                  p.mb-0.text-center Cumplir las promesas realizadas y fortalecer la relación con el consumidor.
            .col-xl-4(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img110.png', alt='' style="max-width: 350px").m-auto
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img111.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p Con base en la GTC ISO 10008, se presentan algunos lineamientos orientados a fortalecer la gestión segura y transparente de las relaciones electrónicas con los consumidores.
              br
              ul.fa-ul.estilo___ul_bloque.mb-0
                li.mb-0.ajuste---li.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  |
                  p.mb-0 Guiar a las empresas en la gestión de relaciones electrónicas con consumidores.
                li.mb-0.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  |
                  p.mb-0 Establecer prácticas seguras en la venta de productos y servicios en línea.
                li.mb-0.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  |
                  p.mb-0 Mejora la experiencia del cliente digital, asegurando claridad, seguridad y confianza.
                li.mb-0.d-flex
                  span.fa-li
                    i.fas.fa-check-circle
                  |
                  p.mb-0 Prevenir conflictos y proteger los derechos del consumidor en entornos virtuales.
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 GTC ISO 10010
      p.mb-5 Los aspectos fundamentales de la norma GTC ISO 100100:2022 son los siguientes:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Concepto
                  p.mb-0 La GTC ISO 10010 establece orientaciones para fortalecer la cultura de calidad dentro de las organizaciones, promoviendo valores, comportamientos y prácticas orientadas al compromiso y la mejora continua.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img112.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Objetivo de la norma
                  p Los objetivos de la norma son:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Fortalecer cultura organizacional. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Promover compromiso. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Mejorar comportamientos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Integrar calidad en el trabajo diario. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Alinear valores institucionales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Favorecer mejora continua.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img113.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 ¿Qué busca esta norma?
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Comprender la cultura interna. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Evaluar comportamientos organizacionales. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Identificar fortalezas y debilidades. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Promover cambios positivos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Fortalecer identidad organizacional. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Alinear acciones con misión y visión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img114.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 ¿A quién aplica?
                  p La norma aplicar para:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Empresas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Entidades públicas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Organizaciones privadas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Pequeñas empresas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Organizaciones con ISO 9001.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img115.png', alt='' style="max-width: 500px").m-auto
      .bg___carrusel_1
        .px-5
          p.mb-5 La GTC ISO 10010 promueve diferentes elementos orientados a fortalecer el compromiso organizacional y la cultura de calidad dentro de las empresas. Estos elementos son:
          .row.align-items-center
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/img116.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img117.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Liderazgo consciente y coherente
                  p.mb-0.text-center Los líderes deben ser ejemplo de compromiso con la calidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img118.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Participación del personal
                  p.mb-0.text-center Todos deben sentirse parte del proceso y motivados a contribuir.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img119.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comunicación efectiva
                  p.mb-0.text-center Compartir metas, avances y aprendizajes de manera clara y abierta.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/img120.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reconocimiento y motivación
                  p.mb-0.text-center Valorar los aportes individuales y colectivos a la mejora continua.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
