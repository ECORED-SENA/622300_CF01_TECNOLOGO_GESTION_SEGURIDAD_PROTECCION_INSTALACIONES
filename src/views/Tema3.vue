<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Imagen corporativa y protocolos de atención
      

      
      <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Elementos corporativos



        
      <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Portafolio de productos y servicios




      <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Elementos de un portafolio de servicios




      <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Aspectos normativos relacionados con el servicio al cliente




      <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Etapas del servicio al cliente






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
