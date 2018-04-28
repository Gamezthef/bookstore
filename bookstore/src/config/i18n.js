import Vue from 'vue';
import Vuei18n from 'vue-i18n';
Vue.use(Vuei18n);
import messages from '@/translator'
export default new Vuei18n({
    locale:'es',
    messages
});