import { createApp } from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag-next'

Vue({
    components: {
        CountryFlag
    }
})

createApp(App).mount('#app')
