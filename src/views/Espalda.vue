<template>
  <q-page class="q-pa-md page-bg">
    
    <!-- Banner de la sección en Estilo Glassmorphism -->
    <div class="col-12 q-mb-xl text-center banner-container">
      <div class="header-banner q-pa-lg text-white rounded-borders glass-header">
        <h1 class="text-h4 text-weight-bolder q-my-none text-uppercase tracking-wider">
          Entrenamiento de <span class="text-blue">Espalda</span>
        </h1>
        <p class="text-body2 text-grey-4 q-mt-sm q-mb-none">
          Mejora tu postura, ensancha tu silueta dorsal y fortalece toda tu cadena posterior.
        </p>
      </div>
    </div>

    <!-- Lista de Ejercicios en 1 Columna (Tarjetas más grandes y legibles) -->
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-7" v-for="(ejercicio, idx) in ejerciciosEspalda" :key="idx">
        <EjercicioCard v-bind="ejercicio" color="blue" />
      </div>
    </div>

  </q-page>
</template>

<script setup>
import EjercicioCard from '../components/EjercicioCard.vue'

const ejerciciosEspalda = [
  {
    titulo: 'Dominadas (Pull-ups)',
    imagen: '/espalda_dominadas.png',
    video: 'https://www.youtube.com/embed/npyLB-7o19o?si=nFYKwdMWYapu_jwI', // Link en formato embed directo
    dificultad: 'Avanzado',
    enfoque: 'Dorsal Ancho, Redondo Mayor y Bíceps',
    paraQueSirve: 'Sirve para ensanchar la espalda dorsal (logrando la forma de V) e incrementar la fuerza de tracción general utilizando el peso de tu propio cuerpo.',
    comoSeHace: [
      'Cuélgate de una barra de dominadas con un agarre prono (palmas hacia el frente) más ancho que los hombros.',
      'Mantén las piernas juntas y el abdomen firme.',
      'Jala tu cuerpo hacia arriba, llevando los codos hacia tus costados, hasta que tu barbilla pase la barra.',
      'Desciende de forma lenta y controlada hasta estirar los brazos completamente.'
    ]
  },
  {
    titulo: 'Remo con Barra (Barbell Row)',
    imagen: '/espalda_remo_barra.png',
    video: 'https://www.youtube.com/embed/P_kNA_HElgA?si=K3IBz_JxqyfJIF1o', // Link en formato embed directo
    dificultad: 'Intermedio',
    enfoque: 'Espalda Media, Trapecios y Dorsal',
    paraQueSirve: 'Se realiza para desarrollar el grosor y densidad de la espalda media, mejorando notablemente la postura y la fuerza de tracción horizontal.',
    comoSeHace: [
      'Párate frente a una barra, inclina el torso hacia adelante doblando la cadera y manteniendo la espalda recta.',
      'Sujeta la barra con agarre prono un poco más ancho que los hombros y las rodillas ligeramente flexionadas.',
      'Tira de la barra hacia la parte baja del abdomen / ombligo dirigiendo los codos hacia el techo.',
      'Baja la barra lentamente de forma controlada hasta la posición de estiramiento.'
    ]
  },
  {
    titulo: 'Jalón al Pecho (Lat Pulldown)',
    imagen: '/espalda_jalon_pecho.png',
    video: 'https://www.youtube.com/embed/CAwf7n6Luuc', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Dorsal Ancho y Bíceps',
    paraQueSirve: 'Se hace como una alternativa excelente a las dominadas para aislar y concentrar la contracción en los dorsales de manera controlada con poleas.',
    comoSeHace: [
      'Ajusta el soporte de las piernas en la máquina y siéntate sujetando la barra con un agarre prono amplio.',
      'Lleva la barra hacia abajo hacia la parte superior del pecho contrayendo los dorsales.',
      'Mantén los codos apuntando directamente hacia el suelo durante la bajada.',
      'Controla el peso mientras permites que la barra suba de vuelta a la posición inicial.'
    ]
  },
  {
    titulo: 'Peso Muerto (Deadlift)',
    imagen: '/espalda_peso_muerto.png',
    video: 'https://www.youtube.com/embed/r4MzxtBKyNE', // Link en formato embed directo
    dificultad: 'Avanzado',
    enfoque: 'Cadena Posterior, Erectores Espinales, Isquiotibiales y Glúteos',
    paraQueSirve: 'Sirve para fortalecer toda la cadena posterior del cuerpo (espalda baja, glúteos e isquiotibiales), promoviendo la fuerza funcional, potencia corporal total e hipertrofia espinal.',
    comoSeHace: [
      'Colócate frente a la barra cargada con los pies a la anchura de las caderas.',
      'Flexiona la cadera y rodillas, sujeta la barra con los brazos rectos por fuera de tus rodillas.',
      'Mantén el pecho arriba y la espalda completamente recta.',
      'Empuja con las piernas y extiende la cadera para levantar la barra hasta quedar erguido, contrayendo glúteos al final.'
    ]
  }
]
</script>

<style scoped>
.page-bg {
  background: radial-gradient(circle at top, #1e293b 0%, #0f172a 100%);
  min-height: 100vh;
}

.glass-header {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border-radius: 16px;
}

.tracking-wider {
  letter-spacing: 2px;
}

/* Ajustes de Responsividad */
@media (max-width: 480px) {
  .page-bg.q-pa-md {
    padding: 12px 8px !important;
  }
  
  .banner-container {
    margin-bottom: 24px !important;
  }

  .glass-header.q-pa-lg {
    padding: 16px !important;
  }

  .glass-header h1 {
    font-size: 1.5rem !important;
    letter-spacing: 1px !important;
  }

  .glass-header p {
    font-size: 0.8rem !important;
    line-height: 1.3 !important;
  }
}
</style>
