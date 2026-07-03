<template>
  <q-page class="q-pa-md page-bg flex flex-center">
    <div class="container-width">
      
      <!-- Cabecera Sutil y Minimalista (Menos llamativa que las opciones) -->
      <div class="text-center text-white header-section">
        <div class="text-caption text-grey-5 tracking-widest text-uppercase">Plataforma de Entrenamiento</div>
        <h2 class="app-subtitle text-weight-bold q-my-xs text-uppercase">V-fit</h2>
        <div class="title-divider q-mx-auto q-mb-sm"></div>
        <p class="text-body2 text-grey-4 q-mb-none">
          Elige el grupo muscular que deseas ejercitar hoy
        </p>
      </div>

      <!-- Opciones de Grupos Musculares (El foco principal de la pantalla) -->
      <div class="row q-col-gutter-xl justify-center q-mt-md">
        
        <!-- Tarjeta Pecho -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="grupo-card chest-card cursor-pointer rounded-borders shadow-4" @click="irARuta('/pecho')">
            <div class="img-container">
              <q-img src="/pecho.png" class="card-img">
                <div class="absolute-bottom text-h6 text-weight-bold text-center text-red bg-card-label">
                  PECHO
                </div>
              </q-img>
            </div>
            <q-card-section class="text-center q-pa-md card-content">
              <div class="text-subtitle1 text-weight-bolder text-grey-9">Fuerza de Empuje</div>
              <p class="text-caption text-grey-7 q-mt-xs q-mb-md">Desarrolla pectorales, hombro anterior y tríceps.</p>
              <q-btn label="Ver Ejercicios" color="red" class="btn-gym" unelevated />
            </q-card-section>
          </q-card>
        </div>

        <!-- Tarjeta Espalda -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="grupo-card back-card cursor-pointer rounded-borders shadow-4" @click="irARuta('/espalda')">
            <div class="img-container">
              <q-img src="/espalda.png" class="card-img">
                <div class="absolute-bottom text-h6 text-weight-bold text-center text-blue bg-card-label">
                  ESPALDA
                </div>
              </q-img>
            </div>
            <q-card-section class="text-center q-pa-md card-content">
              <div class="text-subtitle1 text-weight-bolder text-grey-9">Fuerza de Tracción</div>
              <p class="text-caption text-grey-7 q-mt-xs q-mb-md">Ensancha tus dorsales y fortalece tu espalda.</p>
              <q-btn label="Ver Ejercicios" color="blue" class="btn-gym" unelevated />
            </q-card-section>
          </q-card>
        </div>

        <!-- Tarjeta Piernas -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="grupo-card legs-card cursor-pointer rounded-borders shadow-4" @click="irARuta('/piernas')">
            <div class="img-container">
              <q-img src="/piernas.png" class="card-img">
                <div class="absolute-bottom text-h6 text-weight-bold text-center text-teal bg-card-label">
                  PIERNAS
                </div>
              </q-img>
            </div>
            <q-card-section class="text-center q-pa-md card-content">
              <div class="text-subtitle1 text-weight-bolder text-grey-9">Tren Inferior</div>
              <p class="text-caption text-grey-7 q-mt-xs q-mb-md">Fortalece cuádriceps, glúteos y pantorrillas.</p>
              <q-btn label="Ver Ejercicios" color="teal" class="btn-gym" unelevated />
            </q-card-section>
          </q-card>
        </div>

        <!-- Tarjeta Brazos -->
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="grupo-card arms-card cursor-pointer rounded-borders shadow-4" @click="irARuta('/brazos')">
            <div class="img-container">
              <q-img src="/brazos.png" class="card-img">
                <div class="absolute-bottom text-h6 text-weight-bold text-center text-purple bg-card-label">
                  BRAZOS
                </div>
              </q-img>
            </div>
            <q-card-section class="text-center q-pa-md card-content">
              <div class="text-subtitle1 text-weight-bolder text-grey-9">Hombros y Brazos</div>
              <p class="text-caption text-grey-7 q-mt-xs q-mb-md">Esculpe tus deltoides, bíceps y tríceps.</p>
              <q-btn label="Ver Ejercicios" color="purple" class="btn-gym" unelevated />
            </q-card-section>
          </q-card>
        </div>

      </div>

    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function irARuta(ruta) {
  router.push(ruta)
}
</script>

<style scoped>
.page-bg {
  background: radial-gradient(circle at top, #1e293b 0%, #0f172a 100%);
  min-height: 100vh;
}

.container-width {
  max-width: 1200px;
  width: 100%;
}

/* Cabecera Sutil */
.header-section {
  margin-bottom: 24px;
}

.app-subtitle {
  font-size: 1.6rem;
  letter-spacing: 3px;
  color: #f8fafc;
}

.tracking-widest {
  letter-spacing: 5px;
}

.title-divider {
  width: 60px;
  height: 3px;
  background: #1976D2;
  border-radius: 1.5px;
}

/* Tarjetas Musculares (Protagonistas del diseño) */
.grupo-card {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  border-radius: 20px !important; /* Bordes más redondeados y vistosos */
}

.img-container {
  overflow: hidden;
  position: relative;
}

.card-img {
  height: 240px;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.card-content {
  background: #1e293b;
  color: #f8fafc;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.text-grey-9 {
  color: #f1f5f9 !important;
}

.text-grey-7 {
  color: #94a3b8 !important;
}

.bg-card-label {
  background: rgba(15, 23, 42, 0.85) !important;
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family: inherit;
  letter-spacing: 2px;
}

.btn-gym {
  width: 100%;
  font-weight: bold;
  letter-spacing: 0.5px;
  border-radius: 8px;
  transition: transform 0.2s;
}

/* Efectos de Hover Personalizados */
.grupo-card:hover {
  transform: translateY(-12px); /* Se eleva un poco más */
  border-color: rgba(255, 255, 255, 0.25);
}

.grupo-card:hover .card-img {
  transform: scale(1.1); /* Zoom de imagen un poco más pronunciado */
}

/* Sombras Neón Intensificadas para cada Tarjeta */
.chest-card:hover {
  box-shadow: 0 25px 50px rgba(230, 57, 70, 0.35) !important;
}

.back-card:hover {
  box-shadow: 0 25px 50px rgba(29, 53, 87, 0.4) !important;
}

.legs-card:hover {
  box-shadow: 0 25px 50px rgba(42, 157, 143, 0.35) !important;
}

.arms-card:hover {
  box-shadow: 0 25px 50px rgba(138, 43, 226, 0.35) !important;
}

/* Media Queries para Responsividad (mínimo 300px) */
@media (max-width: 599px) {
  /* Ajustar la grilla para que las tarjetas no queden con paddings gigantes */
  .row.q-col-gutter-xl {
    margin-left: -8px !important;
    margin-top: -8px !important;
  }
  .row.q-col-gutter-xl > div {
    padding-left: 8px !important;
    padding-top: 8px !important;
    padding-bottom: 8px !important;
  }
}

@media (max-width: 400px) {
  /* Reducir padding de la página */
  .page-bg.q-pa-md {
    padding: 12px 8px !important;
  }
  
  /* Ajustes de Cabecera */
  .header-section {
    margin-bottom: 16px;
  }
  .app-subtitle {
    font-size: 1.25rem !important;
    letter-spacing: 2px !important;
  }
  .tracking-widest {
    letter-spacing: 2.5px !important;
    font-size: 0.7rem !important;
  }
  
  /* Ajuste de altura de imagen */
  .card-img {
    height: 180px;
  }
}
</style>
