<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Imagen corporativa y protocolos de atención
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img56.jpg', alt='').m-auto
        .col-xl
          .box___style_2.fit___box_2-3(data-aos="fade-left")
            p.mb-0 La imagen corporativa y los protocolos de atención permiten proyectar identidad, organización y profesionalismo dentro de las organizaciones. Estos elementos fortalecen la comunicación con los clientes y contribuyen a brindar una atención uniforme, respetuosa y orientada a la calidad del servicio.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Elementos corporativos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2.fit___box_2-3(data-aos="fade-right")
            p.mb-0 Los elementos corporativos son componentes que permiten diferenciar e identificar a una organización, fortaleciendo su identidad visual y la percepción de la marca ante el público (Carrero M., 2019; Limontà et al., 2020).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img57.jpg', alt='').m-auto
      p.mb-5 En este sentido, se estudiarán los conceptos de imagen e identidad corporativa:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Imagen corporativa
                  p.mb-0 Conjunto de percepciones, creencias y actitudes que los públicos desarrollan sobre una organización (Duque & Carvajal, 2015). Esta imagen surge de la manera en que la empresa es percibida externamente y refleja aspectos como su personalidad, valores, calidad y reputación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identidad corporativa
                  p.mb-0 La identidad corporativa es la forma en que una organización desea ser percibida, mediante elementos visuales y estrategias que reflejan su esencia, cultura y valores (Limontà et al., 2020).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Es importante distinguir entre imagen e identidad corporativa; estas se detallan a continuación:
      .color___box_1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/img60.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Imagen corporativa
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Percepción externa.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | ¿Cómo la ven?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Opinión del público.
            .col-xl-4.col-md-9(data-aos="zoom-in")
              .box___style_3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/img61.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Identidad corporativa
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Proyección interna.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | ¿Cómo quiere mostrarse?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Estrategia organizacional.
          p.mb-5 Los recursos clave que facilitan la identificación de una organización, desde el reconocimiento visual y auditivo por parte del público, son:
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Nombre
                    p.mb-0 Es el principal identificador verbal de la marca. Debe ser claro, memorable y fácil de pronunciar, ya que facilita su posicionamiento y recomendación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img62.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img63.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Logotipo
                    p.mb-0 Es la representación tipográfica del nombre de la empresa, diseñada con una composición visual específica que refuerza su identidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 #[i Slogan]
                    p.mb-0 Frase breve y memorable que sintetiza la propuesta de valor de la marca. Su creatividad e impacto emocional son fundamentales para su recordación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img64.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img65.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Colores institucionales
                    p.mb-0 Los colores corporativos influyen en la percepción emocional del público. Una paleta cromática coherente refuerza la identidad visual y facilita el reconocimiento de la marca (Limontà et al, 2020).
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Etiqueta y protocolo
                    p.mb-0 Representan el modo de abordar la relación con los clientes y crean una experiencia de servicio que fortalece la imagen y la reputación de la organización.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/img66.png', alt='' style="width: 300px").m-auto
      p.mb-0 Estos elementos trabajan de manera integrada para construir la identidad corporativa, generar reconocimiento y fortalecer la percepción positiva de la organización en todos sus públicos de interés.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Portafolio de productos y servicios
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2-1.fit___box_2-1-1(data-aos="fade-right")
            p.mb-0 El portafolio de productos y servicios es un documento que presenta de forma organizada la oferta de una empresa, incluyendo información sobre sus productos, servicios y respaldo institucional (Martínez, 2017). Para su elaboración, es fundamental definir previamente la oferta que se desea promocionar y el público al que estará dirigida.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img67.jpg', alt='').m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Elementos de un portafolio de servicios
      p.mb-5 A continuación, se presentan algunos elementos clave a considerar en la creación de un portafolio de servicios:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img68.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Público objetivo").ajuste-cajaAcordion
              p.mb-3 Es esencial definir con precisión el segmento de mercado al que se quiere llegar, considerando sus necesidades y características, para estructurar adecuadamente el portafolio.
            .row(titulo="Contenido").ajuste-cajaAcordion
              p.mb-3 Se debe determinar qué tipo de información se incluirá, procurando que sea clara, precisa y fácil de entender, con el fin de facilitar la aceptación y comprensión de los servicios o productos ofrecidos.
            .row(titulo="Diseño").ajuste-cajaAcordion
              p.mb-3 Dado que el propósito principal del portafolio es atraer la atención del cliente e influir en su decisión de compra, es importante optar por un diseño atractivo, creativo y alineado con la identidad del negocio y su actividad.
            .row(titulo="Formato o canal de difusión").ajuste-cajaAcordion
              p.mb-3 Una vez finalizado el portafolio, se debe seleccionar el medio más adecuado para su distribución, ya sea en formato físico como un catálogo, o en formato digital a través de correo electrónico o del sitio web de la empresa.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Aspectos normativos relacionados con el servicio al cliente
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2-2.fit___box_2-2-1(data-aos="fade-right")
            p.mb-0 Las normas técnicas establecen requisitos y parámetros de calidad aplicables a productos, servicios y procesos. En este contexto, la familia ISO 9000 orienta a las organizaciones en la implementación de sistemas de gestión de calidad eficaces (ISO, 2015). Entre ellas, la ISO 9001 define requisitos para mejorar la satisfacción del cliente y garantizar el cumplimiento de estándares legales y organizacionales (ISO, 2015).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/img69.jpg', alt='').m-auto
      p.mb-5 Los principios fundamentales ISO son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img70.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Liderazgo").ajuste-cajaAcordion
              p.mb-3 Establecer una visión clara y un entorno favorable que motive al personal a alcanzar los objetivos organizacionales.
            .row(titulo="Orientación al cliente").ajuste-cajaAcordion
              p.mb-3 Comprender y anticipar las necesidades del cliente para satisfacerlas adecuadamente.
            .row(titulo="Compromiso del personal").ajuste-cajaAcordion
              p.mb-3 Hay que reconocer que las personas son el recurso esencial de la organización y fomentar su participación.
            .row(titulo="Enfoque basado en procesos").ajuste-cajaAcordion
              p.mb-3 Gestionar las actividades como procesos interrelacionados para lograr resultados más eficientes.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Gestión basada en sistemas").ajuste-cajaAcordion
              p.mb-3 Entender y administrar los procesos como un sistema coherente que contribuye a la eficacia organizacional.
            .row(titulo="Mejora continua").ajuste-cajaAcordion
              p.mb-3 Adoptar la mejora constante como un objetivo permanente.
            .row(titulo="Toma de decisiones basada en evidencia").ajuste-cajaAcordion
              p.mb-3 Fundamentar las decisiones en el análisis de datos e información confiable.
            .row(titulo="Relaciones mutuamente beneficiosas con los proveedores").ajuste-cajaAcordion
              p.mb-3 Fomentar alianzas estratégicas que generen valor para ambas partes.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img71.png", alt="" ).m-auto
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Etapas del servicio al cliente
      p.mb-5 Con base en los lineamientos de la norma ISO 9001, las organizaciones deben definir procesos y procedimientos orientados a garantizar un servicio al cliente de calidad. A continuación, se describen las etapas clave de este proceso:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Inicio del contrato
                p.mb-0 El primer acercamiento con el cliente representa una oportunidad estratégica. Es fundamental ofrecer una atención ágil, cordial y eficaz desde el primer momento.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img72.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img73.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Escucha activa y recolección de información
                p.mb-0 Es esencial que el cliente perciba que sus necesidades son valoradas. Formular preguntas claras y específicas permite comprender mejor sus requerimientos.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Solución de problemas
                p.mb-0 Una vez establecida una relación positiva y comprendida la necesidad del cliente, se debe proporcionar una respuesta rápida y adecuada. Es importante comunicar cada aspecto relevante, por mínimo que sea, demostrando compromiso con la solución.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img74.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img75.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Cierre y despedida
                p.mb-0 El momento final del servicio debe dejar una impresión positiva. La despedida debe ser amable y respetuosa, asegurando que la necesidad del cliente haya sido completamente atendida.
      p.mb-0 En el siguiente capitulo se estudiará detalladamente la gestión de la calidad y las normas ISO.

</template>

<script>
export default {
  name: 'Tema3',
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
