<template>
  <q-page class="q-pa-md page-bg">
    
    <!-- Banner de la sección en Estilo Glassmorphism -->
    <div class="col-12 q-mb-xl text-center">
      <div class="header-banner q-pa-lg text-white rounded-borders glass-header">
        <h1 class="text-h4 text-weight-bolder q-my-none text-uppercase tracking-wider">
          Entrenamiento de <span class="text-purple">Brazos</span>
        </h1>
        <p class="text-body2 text-grey-4 q-mt-sm q-mb-none">
          Aumenta la fuerza de tus deltoides, define tus bíceps y fortalece tus tríceps.
        </p>
      </div>
    </div>

    <!-- Lista de Ejercicios en 1 Columna (Tarjetas más grandes y legibles) -->
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-7" v-for="(ejercicio, idx) in ejerciciosBrazos" :key="idx">
        <EjercicioCard v-bind="ejercicio" color="purple" />
      </div>
    </div>

  </q-page>
</template>

<script setup>
import EjercicioCard from '../components/EjercicioCard.vue'

const ejerciciosBrazos = [
  {
    titulo: 'Press Militar con Barra (Overhead Press)',
    imagen: '/brazos_press_militar.png',
    video: 'https://www.youtube.com/embed/_RlRD5y119Y', // Link en formato embed directo
    dificultad: 'Intermedio',
    enfoque: 'Deltoides Anterior, Tríceps y Core',
    paraQueSirve: 'Sirve para desarrollar la fuerza y tamaño del deltoides (hombros), mejorando la fuerza de empuje por encima de la cabeza y la estabilidad general del core en posición de pie.',
    comoSeHace: [
      'Párate con los pies al ancho de las caderas y sostén la barra a la altura de las clavículas.',
      'Sujeta la barra con agarre prono con las manos un poco más anchas que los hombros y codos debajo de la barra.',
      'Empuja la barra verticalmente por encima de la cabeza, estirando los brazos completamente.',
      'Baja la barra lentamente de vuelta a los hombros controlando el movimiento.'
    ]
  },
  {
    titulo: 'Elevaciones Laterales con Mancuerna',
    imagen: '/brazos.png',
    video: 'https://www.youtube.com/embed/sQL__mO8Q1I', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Deltoides Lateral (Hombros)',
    paraQueSirve: 'Se realiza para aislar el deltoides lateral, dando ese aspecto redondeado, tridimensional y ancho a los hombros para mejorar la silueta corporal.',
    comoSeHace: [
      'Párate erguido con una mancuerna en cada mano a los costados del cuerpo.',
      'Inclina levemente el torso hacia adelante y mantén los codos ligeramente doblados.',
      'Eleva los brazos hacia los costados de manera lateral hasta que queden paralelos al suelo.',
      'Desciende las mancuernas de vuelta lentamente manteniendo la tensión en los hombros.'
    ]
  },
  {
    titulo: 'Curl de Bíceps con Barra',
    imagen: '/brazos.png',
    video: 'https://www.youtube.com/embed/3n-v063BvYg', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Bíceps Braquial y Braquiorradial',
    paraQueSirve: 'Se hace para ganar masa muscular y fuerza en la parte frontal de los brazos mediante la flexión del codo contra gravedad.',
    comoSeHace: [
      'Sujeta una barra con agarre supino (palmas hacia arriba) al ancho de tus hombros.',
      'Párate derecho y contrae el abdomen.',
      'Flexiona los codos para subir la barra hacia el pecho, contrayendo fuertemente los bíceps al subir.',
      'Desciende la barra lentamente hasta que los brazos queden extendidos casi por completo.'
    ]
  },
  {
    titulo: 'Extensión de Tríceps en Polea (Tricep Pushdown)',
    imagen: '/brazos.png',
    video: 'https://www.youtube.com/embed/6Fzep104f8s', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Tríceps (Cabeza lateral y medial)',
    paraQueSirve: 'Sirve para definir, tonificar y fortalecer la parte posterior del brazo (tríceps), la cual representa aproximadamente el 60% del volumen del brazo.',
    comoSeHace: [
      'Colócate frente a la polea alta y sujeta la cuerda o barra con los codos doblados a 90 grados.',
      'Mantén los hombros relajados y el pecho arriba.',
      'Empuja la polea hacia abajo haciendo una extensión completa de codo.',
      'Regresa de forma controlada sintiendo el estiramiento.'
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
