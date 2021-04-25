import ZctRadio from './src/radio';
import {
    Radio
} from 'element-ui';
ZctRadio.install = function(Vue) {
    Vue.component(ZctRadio.name, ZctRadio);
};
ZctRadio.loadElementComponent = function(Vue) {
    Vue.component(Radio.name, Radio);
};
export default ZctRadio;
