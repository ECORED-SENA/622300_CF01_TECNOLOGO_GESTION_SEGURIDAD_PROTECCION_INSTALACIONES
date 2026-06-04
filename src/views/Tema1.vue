<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Atención y cultura de servicio
        

      
      <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Atención y servicio al cliente en la planeación estratégica



        
      <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Cultura de Servicio




      <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Características del servicio




      <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Promesa básica del servicio




      <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Satisfacción del cliente




      <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Valor agregado




</template>

<script>
export default {
  name: 'Tema1',
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
