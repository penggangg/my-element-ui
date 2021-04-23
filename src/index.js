import {
    Button
} from 'element-ui';
import ZctButton from '../packages/button/index.js';
const components = [
        ZctButton
    ],
    install = function(Vue, opts = {}) {
        components.forEach(component => {
            Vue.component(component.name, component);
        });
    },
    loadElementComponent = (Vue) => {
        Vue.use(Button);
    };
export default {
    loadElementComponent,
    install
};
