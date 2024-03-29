import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import antd from 'ant-design-vue';
import router from '../src/router/index.ts'


const app = createApp(App)

app.use(antd)
    .use(router)
// .use(Button)
// .use(Form)
// .use(Input)
// .use(InputNumber)


app.mount('#app')
