import Vue from 'vue';
import router from './router';
import App from './App.vue';
import { button, radio } from '@penggang/zct-ui';
button.loadElementComponent(Vue);
radio.loadElementComponent(Vue);
Vue.use(button);
Vue.use(radio);
Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
