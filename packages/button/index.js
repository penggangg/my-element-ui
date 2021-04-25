import ZctButton from './src/button';
import {
    Button
} from 'element-ui';
ZctButton.install = function(Vue) {
    Vue.component(ZctButton.name, ZctButton);
};
ZctButton.loadElementComponent = function(Vue) {
    Vue.component(Button.name, Button);
};
export default ZctButton;
