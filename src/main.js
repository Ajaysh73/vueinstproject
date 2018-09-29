import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

// Register routes
const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

new Vue({
    render: h => h(App),
    router: router,
    store: store,
}).$mount('#app')
