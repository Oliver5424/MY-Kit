import { App, Plugin } from 'vue';
import DxBorderBox1 from './src/dx-border-box-1.vue';
import DxBorderBox2 from './src/dx-border-box-2.vue'

export const BoxPlugin: Plugin = {
  install(app: App) {
    app.component('dx-border-box-1', DxBorderBox1);
    app.component('dx-border-box-2', DxBorderBox2);
  },
};

export {
  DxBorderBox1,
  DxBorderBox2
};
