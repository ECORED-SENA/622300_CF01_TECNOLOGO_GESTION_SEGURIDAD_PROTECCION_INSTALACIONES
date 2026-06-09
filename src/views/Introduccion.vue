<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 El componente formativo “Servicio al cliente y normativa” permite comprender la importancia del servicio como elemento estratégico dentro de las organizaciones modernas. En un entorno empresarial cada vez más competitivo, la satisfacción del cliente se convierte en un factor determinante para fortalecer la imagen institucional, generar fidelización y garantizar relaciones sostenibles con los usuarios.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right")
            p.mb-0 Durante el desarrollo del componente se abordarán aspectos relacionados con la cultura de servicio, los tipos de clientes, la etiqueta corporativa, la imagen personal y la elaboración de portafolios de productos y servicios. Asimismo, se estudiarán los principales lineamientos normativos vinculados con la gestión de la calidad, la atención al cliente, la protección de datos personales y los derechos del consumidor.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-1.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/intro/img2.svg', alt='' style="width: 90px")
          p.mb-0 El proceso formativo promueve el fortalecimiento de competencias comunicativas, organizacionales y éticas, permitiendo aplicar buenas prácticas de atención y servicio en distintos contextos laborales, contribuyendo al mejoramiento continuo y al cumplimiento de estándares de calidad institucional.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
