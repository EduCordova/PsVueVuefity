//importar las vistas quieres rutear
import adopcion from '../components/pages/adopcion.vue'
import home from '../components/pages/home.vue'
import notfound from '../components/pages/notfound.vue'

//exportamos las rutas

export const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/adopcion',component:adopcion},
    {path:'**',component:notfound}
]