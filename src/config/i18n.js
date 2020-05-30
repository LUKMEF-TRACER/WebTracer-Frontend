import Vue from 'vue';
import VueI18n from 'vue-i18n';
import {translations,defaultLang} from '../locales/Translations/'

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale:defaultLang,
    fallbackLocale: 'en',
    messages:translations
})
