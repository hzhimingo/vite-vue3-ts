import '@/utils/rem';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import './style.css';

import { Button, Checkbox, Icon, NavBar, Tabbar, TabbarItem, Toast } from 'vant';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Checkbox);
app.use(Toast);
app.use(Icon);

app.mount('#app');
