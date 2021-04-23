import Vue from 'vue';
import router from './router';
import App from './App.vue';
import ZctUi from '@penggang/zct-ui';

ZctUi.loadElementComponent(Vue);
Vue.use(ZctUi);
Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
