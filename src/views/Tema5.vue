<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Normatividad y protección del consumidor
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/img121.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La normatividad y protección del consumidor comprende el conjunto de leyes, principios y disposiciones orientadas a garantizar los derechos de los clientes frente a la adquisición de productos y servicios. Estas normas buscan promover relaciones comerciales transparentes, seguras y equitativas, fortaleciendo la confianza, la calidad en la atención y el adecuado manejo de la información del consumidor.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Confidencialidad en el manejo de la información y datos personales
      p.mb-5 La confidencialidad y protección de datos personales permite garantizar el manejo seguro y responsable de la información de clientes y organizaciones, fortaleciendo la confianza y el cumplimiento de principios legales y éticos. En este marco, a continuación, se detallan fundamentos conceptuales:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img122.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Importancia de la confidencialidad").ajuste-cajaAcordion.ajuste-vineta
              p La confidencialidad de la información es importante por:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Protege la información personal. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Fortalece la confianza del cliente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Previene uso inadecuado de datos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Garantiza seguridad de la información. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Favorece relaciones transparentes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Contribuye al cumplimiento legal.
            .row(titulo="Manejo responsable de la información").ajuste-cajaAcordion.ajuste-vineta
              p Realizar un manejo responsable de la información implica:
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso adecuado de datos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Seguridad de la información. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Comunicación responsable. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Protección en medios físicos y digitales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de políticas organizacionales.
            .row(titulo="Protección de datos personales").ajuste-cajaAcordion.ajuste-vineta
              p La Ley 1581 de 2012 establece que la recolección, uso y tratamiento de datos personales requiere autorización previa, expresa e informada del titular.
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Consentimiento informado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Autorización del titular. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Derecho a la privacidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Protección de datos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Uso legal de la información.
            .row(titulo="Importancia organizacional").ajuste-cajaAcordion
              p.mb-3 El adecuado manejo de la información fortalece la seguridad, transparencia y confianza entre las organizaciones y sus clientes.
      p.mb-5 Para complementar el tema relacionado con la protección de datos personales, se presenta el siguiente video sobre la Ley 1581 de 2012 y la importancia de la confidencialidad de la información.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video #[b Video]. Ley estatutaria 1581 de 2012: disposiciones generales para la protección de datos personales  
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Estatuto del Consumidor (Ley 1480 de 2011)
      p.mb-5 El Estatuto del Consumidor es una norma colombiana orientada a proteger los derechos de los consumidores y regular las relaciones entre clientes y proveedores, promoviendo prácticas comerciales justas, transparentes y seguras. Las consideraciones generales del estatuto son:
      .bg___slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Derechos del consumidor
                  p El Estatuto del Consumidor establece una serie de derechos fundamentales para los consumidores, entre los cuales se destacan:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Derecho a la calidad. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Derecho a la seguridad. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Derecho a recibir información veraz. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Derecho a reclamar. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Derecho a protección contra publicidad engañosa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img123.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Obligaciones de los Proveedores
                  p Los proveedores tienen una serie de obligaciones que deben cumplir para garantizar los derechos de los consumidores, tales como:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Garantizar calidad. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Brindar información clara. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Responder por garantías. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Evitar publicidad engañosa. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Cumplir condiciones ofrecidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img124.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Procedimiento de reclamación
                  ol.lista-ol--cuadro.mb-0
                    li
                      .lista-ol--cuadro__vineta
                        span 1
                      | 
                      p.mb-0 Cliente presenta reclamación. 
                    li 
                      .lista-ol--cuadro__vineta
                        span 2
                      | 
                      p.mb-0 Proveedor evalúa el caso. 
                    li 
                      .lista-ol--cuadro__vineta
                        span 3
                      | 
                      p.mb-0 Se analiza la solicitud. 
                    li 
                      .lista-ol--cuadro__vineta
                        span 4
                      | 
                      p.mb-0 Se ofrece solución. 
                    li 
                      .lista-ol--cuadro__vineta
                        span 5
                      | 
                      p.mb-0 Se realiza seguimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img125.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Garantías y devoluciones
                  p El Estatuto del Consumidor regula las garantías de los productos y servicios, estableciendo los derechos de los consumidores y las obligaciones de los proveedores en caso de productos defectuosos o servicios deficientes. Estas son:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Reparación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Reemplazo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Devolución del dinero. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Garantía legal. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Responsabilidad del proveedor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img126.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Publicidad y promociones
                  p El Estatuto del Consumidor establece normas para la publicidad y promociones, con el fin de proteger a los consumidores de prácticas engañosas y garantizar que la información proporcionada sea veraz y clara.
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Información clara. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Promociones verificables. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Condiciones visibles. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Transparencia comercial. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | Protección contra engaños.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img127.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Importancia del Estatuto del Consumidor
                  p.mb-0 El Estatuto del Consumidor fortalece la protección de los derechos de los clientes y promueve relaciones comerciales más transparentes, seguras y equitativas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/img128.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 CONPES 3649 – Política Nacional de Servicio al Ciudadano
      p.mb-5 Tiene como objetivo establecer los lineamientos generales para desarrollar acciones encaminadas a incrementar la confianza y la satisfacción de la ciudadanía con los servicios prestados por la Administración Pública Nacional, ya sea de manera directa o a través de particulares. Los componentes clave dela política son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/img129.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Enfoque hacia el ciudadano").ajuste-cajaAcordion
              p.mb-3 La política busca centrar la atención en las necesidades y expectativas de los ciudadanos, promoviendo una cultura de servicio que priorice la calidad y la eficiencia en la atención.
            .row(titulo="Innovación en el diseño y desarrollo institucional").ajuste-cajaAcordion
              p.mb-3 Se incorpora la innovación como eje transversal para mejorar los procesos y procedimientos de las entidades públicas, con el fin de ofrecer servicios más accesibles y eficientes.
            .row(titulo="Fortalecimiento de capacidades institucionales").ajuste-cajaAcordion
              p.mb-3 Se promueve la formulación de planes estratégicos de recursos humanos y planes anuales de vacantes, con el objetivo de contar con servidores públicos competentes y comprometidos con la excelencia en el servicio al ciudadano.
            .row(titulo="Modelo Integrado de Planeación y Gestión (MIPG)").ajuste-cajaAcordion
              p.mb-3 El CONPES 3649 establece las bases para la implementación del MIPG, que busca una gestión pública eficiente y orientada al ciudadano, integrando aspectos como la planeación, la gestión del talento humano y la evaluación del desempeño institucional.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/img23.svg" style="max-width: 60px").m-auto
        .col
          h3 Resultados Esperados 
      p.mb-5 La implementación del CONPES 3649 busca fortalecer la calidad y cobertura de los servicios ofrecidos por la Administración Pública, promoviendo una atención más eficiente, transparente y centrada en las necesidades de los ciudadanos. Asimismo, contribuye al fortalecimiento institucional de las entidades públicas, favoreciendo una gestión más moderna, cercana y orientada a resultados.

</template>

<script>
export default {
  name: 'Tema5',
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
