<template>
  <q-page class="q-pa-md page-bg">
    
    <!-- Banner de la sección en Estilo Glassmorphism -->
    <div class="col-12 q-mb-xl text-center">
      <div class="header-banner q-pa-lg text-white rounded-borders glass-header">
        <h1 class="text-h4 text-weight-bolder q-my-none text-uppercase tracking-wider">
          Entrenamiento de <span class="text-red">Pecho</span>
        </h1>
        <p class="text-body2 text-grey-4 q-mt-sm q-mb-none">
          Desarrolla fuerza, volumen e incrementa la potencia de empuje de tu tren superior.
        </p>
      </div>
    </div>

    <!-- Lista de Ejercicios en 1 Columna (Tarjetas más grandes y legibles) -->
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-7" v-for="(ejercicio, idx) in ejerciciosPecho" :key="idx">
        <EjercicioCard v-bind="ejercicio" color="red" />
      </div>
    </div>

  </q-page>
</template>

<script setup>
import EjercicioCard from '../components/EjercicioCard.vue'

const ejerciciosPecho = [
  {
    titulo: 'Flexiones de Pecho (Push-ups)',
    imagen: '/pecho_pushups.png',
    video: 'https://www.youtube.com/embed/TSYEQU-HmLc', // Link en formato embed directo
    dificultad: 'Principiante',
    enfoque: 'Pectoral Mayor, Deltoides Anterior y Tríceps',
    paraQueSirve: 'Sirve para construir la fuerza de empuje básica en el tren superior utilizando únicamente tu propio peso corporal como resistencia, mejorando también la estabilidad del core.',
    comoSeHace: [
      'Coloca las manos en el suelo a una anchura ligeramente superior a la de los hombros.',
      'Extiende las piernas hacia atrás formando una línea recta desde la cabeza hasta los talones.',
      'Baja el cuerpo doblando los codos hasta que el pecho casi toque el suelo.',
      'Empuja con fuerza hacia arriba para volver a la posición inicial, extendiendo los brazos por completo sin bloquear los codos.'
    ]
  },
  {
    titulo: 'Press de Banca con Mancuernas',
    imagen: '/pecho_press_banca.png',
    video: 'https://www.youtube.com/embed/vthMCtgVtFw', // Link en formato embed directo
    dificultad: 'Intermedio',
    enfoque: 'Pectoral Medio, Pectoral Mayor e Hipertrofia general',
    paraQueSirve: 'Se realiza para desarrollar el grosor y volumen del pectoral mayor de forma simétrica, permitiendo un mayor rango de movimiento y trabajo libre e independiente en cada brazo.',
    comoSeHace: [
      'Acuéstate en un banco plano con los pies bien apoyados en el suelo y una mancuerna en cada mano.',
      'Sostén las mancuernas al nivel del pecho con los codos doblados a 90 grados.',
      'Empuja las mancuernas hacia arriba sobre tu pecho extendiendo los brazos verticalmente.',
      'Baja las mancuernas de forma lenta y controlada hasta que sientas un estiramiento cómodo en el pecho.'
    ]
  },
  {
    titulo: 'Aperturas con Mancuernas (Dumbbell Flyes)',
    imagen: '/pecho_aperturas.png',
    video: 'https://www.youtube.com/embed/mFmgYDPxxCo', // Link en formato embed directo
    dificultad: 'Intermedio',
    enfoque: 'Pectoral Mayor (Fibras externas e internas)',
    paraQueSirve: 'Se hace para aislar las fibras del pecho y expandir la caja torácica mediante un estiramiento profundo al final del entrenamiento, promoviendo la definición muscular.',
    comoSeHace: [
      'Acuéstate sobre un banco plano sosteniendo las mancuernas directamente sobre el pecho, palmas enfrentadas.',
      'Abre los brazos lentamente hacia los lados trazando un arco amplio hasta que sientas el estiramiento en el pecho.',
      'Contrayendo el pecho, eleva las mancuernas de vuelta al centro siguiendo el mismo arco circular.',
      'Aprieta los pectorales en la parte superior del movimiento durante un segundo.'
    ]
  },
  {
    titulo: 'Fondos en Paralelas (Dips)',
    imagen: '/pecho_fondos.png',
    video: 'https://www.youtube.com/embed/yN6Q1UI_xkE', // Link en formato embed directo
    dificultad: 'Avanzado',
    enfoque: 'Pectoral Inferior y Tríceps',
    paraQueSirve: 'Se realiza para enfocar el trabajo en la parte inferior del pecho y la fuerza general de empuje, ayudando a dar una forma definida y esculpida a la base del pectoral.',
    comoSeHace: [
      'Sostente en las barras paralelas con los brazos completamente extendidos.',
      'Cruza los pies e inclina el torso hacia adelante aproximadamente 15-30 grados.',
      'Baja el cuerpo doblando los codos de manera controlada hasta que tus hombros queden ligeramente por debajo de tus codos.',
      'Empuja con fuerza utilizando la parte inferior del pecho hasta regresar a la posición de inicio.'
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
