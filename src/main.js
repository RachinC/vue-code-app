import { createApp } from 'vue'
import VCalendar from 'v-calendar';
import App from './App.vue'
import store from './store';
import 'v-calendar/style.css';


const app = createApp(App);
app.use(store);
app.use(VCalendar, {})
app.mount("#app");
