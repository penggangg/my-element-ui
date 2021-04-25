import {
    Button,
    Radio
} from 'element-ui';
import ZctButton from '../packages/button/index.js';
import ZctRadio from '../packages/radio/index.js';
const components = [
        ZctButton,
        ZctRadio
    ],
    install = function(Vue, opts = {}) {
        components.forEach(component => {
            Vue.component(component.name, component);
        });
    },
    loadElementComponent = (Vue) => {
        Vue.use(Button);
        Vue.use(Radio);
    };
export default {
    loadElementComponent,
    install
};
