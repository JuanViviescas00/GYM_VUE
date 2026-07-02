<template>
  <q-layout view="hHh LpR fFf" class="bg-grey-1">
    
    <!-- Barra Superior -->
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="row items-center">
          <q-avatar size="32px" class="bg-white q-mr-sm">
            <q-icon name="fitness_center" color="primary" size="20px" />
          </q-avatar>
          <span class="text-weight-bold">Body Vue</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Menú Lateral de Navegación -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="250"
      class="bg-white"
    >
      <div class="q-pa-md text-center bg-primary text-white">
        <q-icon name="sports_gymnastics" size="48px" />
        <div class="text-subtitle1 text-weight-bold q-mt-sm">Mis Ejercicios</div>
        <div class="text-caption">Selecciona una categoría</div>
      </div>

      <q-list class="q-mt-sm">
        
        <!-- Opción Inicio -->
        <q-item
          clickable
          v-ripple
          to="/"
          exact
          active-class="bg-blue-1 text-blue text-weight-bold"
          class="q-mx-sm rounded-borders q-my-xs"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Inicio</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/pecho"
          active-class="bg-red-1 text-red text-weight-bold"
          class="q-mx-sm rounded-borders q-my-xs"
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
          active-class="bg-blue-1 text-blue text-weight-bold"
          class="q-mx-sm rounded-borders q-my-xs"
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
          active-class="bg-teal-1 text-teal text-weight-bold"
          class="q-mx-sm rounded-borders q-my-xs"
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
          active-class="bg-purple-1 text-purple text-weight-bold"
          class="q-mx-sm rounded-borders q-my-xs"
        >
          <q-item-section avatar>
            <q-icon name="bolt" />
          </q-item-section>
          <q-item-section>Hombros y Brazos</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Contenedor de las Vistas (Aquí se renderizan Inicio.vue, Pecho.vue, Espalda.vue, etc.) -->
    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
/* Estilos globales simples */
.header-banner {
  border-radius: 12px;
}
</style>