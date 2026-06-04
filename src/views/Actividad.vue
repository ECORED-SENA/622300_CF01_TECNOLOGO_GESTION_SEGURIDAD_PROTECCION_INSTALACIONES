<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario sobre servicio al cliente y normativa',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos relacionados con cultura de servicio, atención al cliente, normativa de calidad y protección al consumidor.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la cultura de servicio en una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalecer la satisfacción integral del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir totalmente los costos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar únicamente las ventas mensuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar constantemente la imagen corporativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica del servicio impide almacenarlo para uso posterior?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La producción ocurre con procesos automatizados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La prestación depende de recursos financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los servicios son perecederos por naturaleza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El cliente exige respuestas rápidas siempre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se denomina el cliente que pertenece a la misma organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cliente externo vinculado comercialmente siempre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cliente interno relacionado funcionalmente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cliente ocasional con compras esporádicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cliente potencial interesado en promociones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una función principal del portafolio de servicios empresariales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar únicamente la nómina institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar productos y servicios ofrecidos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar las jornadas laborales del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registrar exclusivamente los gastos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué principio ISO promueve decisiones sustentadas en información confiable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Toma de decisiones basada en evidencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Compromiso del personal administrativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Relaciones comerciales con distribuidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Orientación estratégica hacia proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe reflejar principalmente la imagen personal corporativa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Improvisación permanente durante la atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Profesionalismo y confianza institucional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Preferencias individuales sobre vestimenta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambios frecuentes en la identidad visual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué busca garantizar la norma GTC ISO 10002 en las organizaciones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión adecuada de las quejas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Producción masiva de artículos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Automatización completa de los procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento obligatorio del talento humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es el objetivo principal de la Ley 1480 de 2011?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular exclusivamente la contratación pública.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar derechos de los consumidores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Promover únicamente campañas publicitarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Supervisar las exportaciones manufactureras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué elemento corporativo resume la propuesta de valor de una marca?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uniforme utilizado por los colaboradores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La estructura financiera de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El slogan breve y recordable institucional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La distribución interna de las oficinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué debe realizarse durante la etapa de escucha activa al cliente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar comentarios difíciles del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formular preguntas claras sobre necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Transferir inmediatamente todas las llamadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Finalizar rápidamente la atención recibida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué norma orienta las transacciones electrónicas con consumidores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La GTC ISO 10008 sobre comercio electrónico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La ISO 9001 relacionada con manufactura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La Ley 1480 enfocada en garantías físicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ISO 10010 centrada en cultura laboral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué principio debe aplicarse en la resolución justa de conflictos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Competencia comercial entre organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Imparcialidad durante todo el proceso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Publicidad constante de las reclamaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restricción parcial del acceso ciudadano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica del servicio depende del comportamiento humano variable?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La heterogeneidad presente en la atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La perecibilidad asociada al almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La simultaneidad propia del consumo inmediato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La integralidad aplicada en los procesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué busca fortalecer la Política Nacional de Servicio al Ciudadano?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La satisfacción y confianza ciudadana.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La privatización de servicios institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La reducción inmediata del gasto público.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La creación exclusiva de normas jurídicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es un beneficio del uso adecuado del uniforme profesional?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocultar totalmente la identidad corporativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Facilitar el reconocimiento institucional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modificar continuamente la cultura laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la interacción con los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué debe hacer una organización con los datos personales del cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Divulgarlos libremente entre proveedores externos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar seguridad y confidencialidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Publicarlos en medios digitales corporativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transferirlos sin autorización del titular.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué permite medir la norma GTC ISO 10004 en una organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La satisfacción percibida por los clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad anual de ventas realizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La productividad individual de operarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La inversión destinada a publicidad digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué representa la promesa básica dentro del servicio al cliente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El compromiso inicial ofrecido al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La estrategia financiera de los accionistas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El procedimiento técnico para exportaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La política interna sobre vacaciones laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué elemento influye directamente en la percepción emocional del público?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los colores institucionales de la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las reuniones privadas de los directivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los registros contables de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las actividades internas de capacitación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué pretende fomentar la norma GTC ISO 10010 en las organizaciones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una cultura organizacional orientada a calidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una reducción total de procesos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una dependencia exclusiva de la tecnología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una gestión basada solo en productividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
