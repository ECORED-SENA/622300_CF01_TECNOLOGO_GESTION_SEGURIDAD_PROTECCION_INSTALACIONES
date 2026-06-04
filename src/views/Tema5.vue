<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Normatividad y protección del consumidor
      

      
      <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Confidencialidad en el manejo de la información y datos personales



        
      <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Estatuto del Consumidor (Ley 1480 de 2011)




      <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 CONPES 3649 – Política Nacional de Servicio al Ciudadano





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
