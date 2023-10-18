import {createApp} from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '@sweetalert2/theme-dark'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.use(VueSweetalert2);
app.mount('#app');
