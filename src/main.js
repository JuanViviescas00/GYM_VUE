import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Importar iconos y estilos de Quasar
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

// Importar el enrutador y el componente principal
import { router } from './routes/routes.js'
import App from './App.vue'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
})

app.use(router) // Registrar el enrutador
app.mount('#app')
