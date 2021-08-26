import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        primary: '#3f51b5',
        secondary: '#00bcd4',
        accent: '#009688',
        error: '#e91e63',
        warning: '#f44336',
        info: '#ffc107',
        success: '#4caf50'
    },
});
