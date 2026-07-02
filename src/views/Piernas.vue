<template>
  <q-page class="q-pa-md page-bg">
    
    <!-- Banner de la sección en Estilo Glassmorphism -->
    <div class="col-12 q-mb-xl text-center">
      <div class="header-banner q-pa-lg text-white rounded-borders glass-header">
        <h1 class="text-h4 text-weight-bolder q-my-none text-uppercase tracking-wider">
          Entrenamiento de <span class="text-teal">Piernas</span>
        </h1>
        <p class="text-body2 text-grey-4 q-mt-sm q-mb-none">
          Construye una base sólida, mejora tu potencia atlética y estimula tu metabolismo.
        </p>
      </div>
    </div>

    <!-- Lista de Ejercicios en 1 Columna (Tarjetas más grandes y legibles) -->
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-7" v-for="(ejercicio, idx) in ejerciciosPiernas" :key="idx">
        <EjercicioCard v-bind="ejercicio" color="teal" />
      </div>
    </div>

  </q-page>
</template>

<script setup>
import EjercicioCard from '../components/EjercicioCard.vue'

const ejerciciosPiernas = [
  {
    titulo: 'Sentadillas (Squats)',
    imagen: '/piernas_sentadillas.png',
    video: 'https://www.youtube.com/embed/gcNh17Ckbgg', // Link en formato embed directo
    dificultad: 'Intermedio',
    enfoque: 'Cuádriceps, Glúteos, Femorales y Core',
    paraQueSirve: 'Sirve para construir fuerza general, masa muscular y potencia atlética en todo el tren inferior, además de fortalecer los huesos y ligamentos de las rodillas y caderas.',
    comoSeHace: [
      'Coloca los pies al ancho de los hombros con las puntas apuntando ligeramente hacia afuera.',
      'Sostén una barra sobre los trapecios (o usa tu peso corporal si eres principiante).',
      'Inicia el descenso empujando la cadera hacia atrás y doblando las rodillas como si fueras a sentarte.',
      'Mantén el pecho erguido y empuja con los talones para volver con fuerza a la posición de inicio.'
    ]
  },
  {
    titulo: 'Zancadas / Estocadas (Lunges)',
    imagen: '/piernas_zancadas.png',
    video: 'https://www.youtube.com/embed/COKYKgQ8KR0', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Cuádriceps, Glúteos y Estabilidad Unilateral',
    paraQueSirve: 'Se realiza para desarrollar fuerza y equilibrio unilateral (una pierna a la vez), lo cual ayuda a corregir desequilibrios de fuerza entre el lado izquierdo y derecho del cuerpo.',
    comoSeHace: [
      'Párate erguido con los pies juntos. Puedes sostener mancuernas a los costados.',
      'Da un paso amplio hacia adelante con una pierna.',
      'Baja la cadera hasta que tu rodilla trasera casi toque el suelo y la rodilla delantera doble a 90 grados.',
      'Empuja con el pie delantero de vuelta a la posición inicial y repite con la pierna contraria.'
    ]
  },
  {
    titulo: 'Prensa de Piernas (Leg Press)',
    imagen: '/piernas_prensa.png',
    video: 'https://www.youtube.com/embed/CH3J5rU7N4M', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Cuádriceps, Glúteos e Isquiotibiales',
    paraQueSirve: 'Se hace para sobrecargar los músculos de las piernas de manera segura, aislando el esfuerzo de empuje sin aplicar tensión axial directa sobre la columna vertebral.',
    comoSeHace: [
      'Siéntate en la máquina apoyando la espalda por completo y coloca los pies en la plataforma.',
      'Libera los seguros de la prensa y flexiona las rodillas para bajar el peso de forma lenta hacia tu pecho.',
      'Baja hasta formar un ángulo de 90 grados en tus rodillas.',
      'Empuja la plataforma con fuerza extendiendo las piernas de manera controlada.'
    ]
  },
  {
    titulo: 'Elevación de Talones (Calf Raises)',
    imagen: '/piernas_pantorrillas.png',
    video: 'https://www.youtube.com/embed/3UWi44yN-HM', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Gastrocnemio y Sóleo (Pantorrillas)',
    paraQueSirve: 'Sirve para aislar y desarrollar los músculos de las pantorrillas, mejorando la estabilidad del tobillo y la fuerza de salto o propulsión al correr.',
    comoSeHace: [
      'Párate sobre el borde de un escalón o plataforma con los talones colgando en el aire.',
      'Baja los talones de manera controlada para lograr un estiramiento completo del gemelo.',
      'Empuja hacia arriba con las puntas de tus pies elevando los talones tanto como sea posible.',
      'Aprieta las pantorrillas al máximo en la posición alta antes de volver a bajar.'
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
</style>
