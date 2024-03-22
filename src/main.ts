import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {Button, Table} from 'ant-design-vue';
import router from '../src/router/index.ts'


const app = createApp(App)

app.use(Table)
    .use(router)
    .use(Button)


app.mount('#app')
