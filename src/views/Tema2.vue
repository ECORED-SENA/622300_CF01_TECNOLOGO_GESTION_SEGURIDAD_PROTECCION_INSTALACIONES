<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Atención al cliente y fidelización
      

      
      <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Tipos de clientes



        
      <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Protocolo de servicio al cliente




      <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Etiqueta empresarial




      <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Imagen personal




      <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Tendencias actuales en la vestimenta laboral





</template>

<script>
export default {
  name: 'Tema2',
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
