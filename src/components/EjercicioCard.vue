<template>
  <q-card :class="['ejercicio-card q-mb-xl rounded-borders', 'glow-' + color]">
    
    <!-- Renderizado de Video mediante iframe (YouTube) con tamaño ampliado -->
    <!-- Pasamos la propiedad 'video' directamente como el atributo :src del iframe -->
    <div v-if="video" class="media-container bg-black">
      <iframe
        :src="video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="width: 100%; height: 100%; border: none;"
      ></iframe>
    </div>

    <!-- Imagen de cabecera estándar de respaldo con tamaño ampliado -->
    <q-img v-else-if="imagen" :src="imagen" class="media-container">
      <div class="absolute-bottom text-subtitle1 text-weight-bold bg-black-50">
        {{ titulo }}
      </div>
    </q-img>

    <q-card-section class="q-pa-lg card-content">
      <!-- Enfoque y Dificultad -->
      <div class="row items-center justify-between q-mb-md header-row">
        <span class="text-subtitle2 text-weight-bold text-grey-3">
          🎯 Enfoque: <span :class="'text-' + color">{{ enfoque }}</span>
        </span>
        <q-chip outline :color="color" size="sm" dense class="text-weight-bold q-px-sm text-white-chip">
          {{ dificultad }}
        </q-chip>
      </div>

      <q-separator dark class="q-my-md opacity-20" />

      <!-- ¿Para qué se hace? -->
      <div class="q-mb-lg">
        <div :class="['text-subtitle1 text-weight-bold row items-center q-mb-xs', 'text-' + color]">
          <q-icon name="help_outline" class="q-mr-xs" size="20px" />
          ¿Para qué se hace?
        </div>
        <p :class="['text-body1 text-grey-4 q-pl-md border-left-accent', 'border-' + color]">
          {{ paraQueSirve }}
        </p>
      </div>

      <!-- ¿Cómo se hace? -->
      <div>
        <div :class="['text-subtitle1 text-weight-bold row items-center q-mb-xs', 'text-' + color]">
          <q-icon name="directions_run" class="q-mr-xs" size="20px" />
          ¿Cómo se hace?
        </div>
        <div :class="['text-body1 text-grey-4 q-pl-md border-left-accent', 'border-' + color]">
          <ol class="q-pl-md q-my-none">
            <li v-for="(paso, index) in comoSeHace" :key="index" class="q-mb-sm">
              {{ paso }}
            </li>
          </ol>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
// Simplificamos quitando 'computed' por completo.
// Ahora recibimos la URL del video en formato de incrustación de YouTube directamente.
defineProps({
  titulo: String,
  imagen: String,
  video: String,
  enfoque: String,
  dificultad: String,
  paraQueSirve: String,
  comoSeHace: Array,
  color: {
    type: String,
    default: 'blue' // red, blue, teal, purple
  }
})
</script>

<style scoped>
.ejercicio-card {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.card-content {
  background: #1e293b;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.text-grey-3 {
  color: #e2e8f0 !important;
}

.text-grey-4 {
  color: #94a3b8 !important;
}

.text-white-chip {
  color: #ffffff !important;
}

.bg-black-50 {
  background: rgba(15, 23, 42, 0.75) !important;
  backdrop-filter: blur(4px);
}

/* Contenedor responsivo con relación de aspecto 16:9 */
.media-container {
  aspect-ratio: 16 / 9;
  width: 100%;
  height: auto;
}

/* Bordes acentuados por color */
.border-left-accent {
  border-left: 4px solid;
  margin-left: 2px;
}

.border-red {
  border-left-color: #f56565 !important;
}
.border-blue {
  border-left-color: #4299e1 !important;
}
.border-teal {
  border-left-color: #38b2ac !important;
}
.border-purple {
  border-left-color: #9f7aea !important;
}

/* Brillo Neón en Hover por Categoría */
.ejercicio-card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
}

.glow-red:hover {
  box-shadow: 0 20px 40px rgba(230, 57, 70, 0.25) !important;
}
.glow-blue:hover {
  box-shadow: 0 20px 40px rgba(29, 53, 87, 0.3) !important;
}
.glow-teal:hover {
  box-shadow: 0 20px 40px rgba(42, 157, 143, 0.25) !important;
}
.glow-purple:hover {
  box-shadow: 0 20px 40px rgba(138, 43, 226, 0.25) !important;
}

/* Ajustes de Responsividad */
@media (max-width: 480px) {
  /* Reducir padding interno de la tarjeta */
  .card-content.q-pa-lg {
    padding: 16px !important;
  }
  
  /* Cambiar enfoque y dificultad a columna para que no se encima de 300px */
  .header-row {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 8px;
  }
}
</style>
