<template>
  <q-layout view="hHh LpR fFf" class="bg-dark-layout text-white">
    
    <!-- Barra Superior (Header Glassmorphism) -->
    <q-header class="custom-header text-white">
      <q-toolbar class="q-px-md">
        <q-btn v-if="route.path !== '/'" dense flat round icon="menu" class="menu-btn" @click="toggleLeftDrawer" />
        <q-toolbar-title class="row items-center">
          <q-avatar size="36px" class="custom-avatar q-mr-sm">
            <q-icon name="fitness_center" class="glow-icon" size="20px" />
          </q-avatar>
          <span class="header-title">Body Vue</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Menú Lateral de Navegación (Drawer) -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="260"
      class="custom-drawer"
    >
      <div class="q-pa-lg text-center drawer-banner">
        <div class="drawer-icon-container q-mx-auto">
          <q-icon name="sports_gymnastics" size="36px" class="drawer-gym-icon" />
        </div>
        <div class="text-subtitle1 text-weight-bold q-mt-md text-white">Mis Ejercicios</div>
        <div class="text-caption text-grey-4">Selecciona una categoría</div>
      </div>

      <q-list class="q-mt-md q-px-sm">
        
        <!-- Opción Inicio -->

        <q-item
          clickable
          v-ripple
          to="/pecho"
          active-class="active-pecho"
          class="drawer-item q-my-xs text-grey-4"
        >
          <q-item-section avatar>
            <q-icon name="sports_gymnastics" />
          </q-item-section>
          <q-item-section>Pecho (Pectorales)</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/espalda"
          active-class="active-espalda"
          class="drawer-item q-my-xs text-grey-4"
        >
          <q-item-section avatar>
            <q-icon name="fitness_center" />
          </q-item-section>
          <q-item-section>Espalda (Dorsales)</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/piernas"
          active-class="active-piernas"
          class="drawer-item q-my-xs text-grey-4"
        >
          <q-item-section avatar>
            <q-icon name="directions_run" />
          </q-item-section>
          <q-item-section>Piernas</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/brazos"
          active-class="active-brazos"
          class="drawer-item q-my-xs text-grey-4"
        >
          <q-item-section avatar>
            <q-icon name="bolt" />
          </q-item-section>
          <q-item-section>Hombros y Brazos</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Contenedor de las Vistas -->
    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const leftDrawerOpen = ref(false)
const route = useRoute()

watch(() => route.path, (newPath) => {
  if (newPath === '/') {
    leftDrawerOpen.value = false
  }
})

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
/* Estilos globales y personalizados */
.bg-dark-layout {
  background-color: #0f172a !important;
}

/* Header Glassmorphism */
.custom-header {
  background: rgba(15, 23, 42, 0.8) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  transition: all 0.3s ease;
}

.menu-btn {
  color: #e2e8f0;
  transition: background-color 0.3s;
}
.menu-btn:hover {
  background: rgba(255, 255, 255, 0.08) !important;
}

/* Avatar y Título */
.custom-avatar {
  background: rgba(255, 255, 255, 0.06) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.25);
  transition: all 0.3s ease;
}
.custom-avatar:hover {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
  border-color: rgba(168, 85, 247, 0.4) !important;
}

.glow-icon {
  color: #a855f7;
  filter: drop-shadow(0 0 5px rgba(168, 85, 247, 0.8));
}

.header-title {
  font-size: 1.25rem;
  letter-spacing: 2px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 40%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
}

/* Drawer Dark Theme */
.custom-drawer {
  background-color: #0f172a !important;
  border-right: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.drawer-banner {
  background: linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.drawer-icon-container {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.15);
}

.drawer-gym-icon {
  color: #a855f7;
  filter: drop-shadow(0 0 5px rgba(168, 85, 247, 0.6));
}

/* Drawer Items */
.drawer-item {
  border-radius: 8px !important;
  transition: all 0.3s ease;
  font-weight: 500;
}
.drawer-item:hover {
  background: rgba(255, 255, 255, 0.04) !important;
  color: #ffffff !important;
}

/* Active states (Neon styles) */
.active-inicio {
  background: rgba(59, 130, 246, 0.12) !important;
  color: #60a5fa !important;
  border-left: 3px solid #3b82f6 !important;
  font-weight: 700;
}

.active-pecho {
  background: rgba(239, 68, 68, 0.12) !important;
  color: #f87171 !important;
  border-left: 3px solid #ef4444 !important;
  font-weight: 700;
}

.active-espalda {
  background: rgba(59, 130, 246, 0.12) !important;
  color: #60a5fa !important;
  border-left: 3px solid #3b82f6 !important;
  font-weight: 700;
}

.active-piernas {
  background: rgba(20, 184, 166, 0.12) !important;
  color: #2dd4bf !important;
  border-left: 3px solid #14b8a6 !important;
  font-weight: 700;
}

.active-brazos {
  background: rgba(168, 85, 247, 0.12) !important;
  color: #c084fc !important;
  border-left: 3px solid #a855f7 !important;
  font-weight: 700;
}
</style>