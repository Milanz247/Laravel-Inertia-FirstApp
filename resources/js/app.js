import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from '@inertiajs/progress';
// import { Link } from '@inertiajs/inertia-vue3';


createInertiaApp({
  resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      // .component('Link', Link) we can call this like gloaly.if we do this no need ti import it in our using componets it willl work
      .mount(el)
  },
});

InertiaProgress.init({
     
    color: '#29d',
    showSpinner: true,  
});