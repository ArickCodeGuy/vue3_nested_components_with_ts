import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Checkbox from './components/Checkbox/index.vue';
import CheckboxLabel from './components/Checkbox/label.vue';
import CheckboxList from './components/Checkbox/list.vue';

import Main from './components/Main/index.vue';

import Accordion from './components/Accordion/index.vue';

import Modal from './components/Modal/index.vue';

import BorderBox from './components/BorderBox.vue';

createApp(App)
  .component('checkbox', Checkbox)
  .component('checkbox-label', CheckboxLabel)
  .component('checkbox-list', CheckboxList)
  .component('border-box', BorderBox)
  .component('Main', Main)
  .component('Accordion', Accordion)
  .component('Modal', Modal)
  .mount('#app');
