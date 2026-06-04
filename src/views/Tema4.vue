<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Gestión de calidad y normas ISO
      

    
      <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Generalidades



        
      <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 GTC ISO 10001




      <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 GTC ISO 10002 y principios clave para la atención de quejas de los clientes




      <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 GTC ISO 10003 y principios para resolución justa de conflictos con el cliente




      <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 GTC ISO 10004, proceso de medición y medición de la satisfacción




      <!------------------------------------------ SUBTEMA 6 ------------------------------------------>
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 GTC ISO 10008




      <!------------------------------------------ SUBTEMA 7 ------------------------------------------>
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 GTC ISO 10010




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
