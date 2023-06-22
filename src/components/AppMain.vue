<template>
    <div class="container">
        <SearchApp @addMessage="apiCall"/>

        <div class="flex">
            <div class="film-card" v-for="film in FilmList">
                <h3>
                    {{ film.title}}
                </h3>

                <p>
                    {{ film.original_title}}
                </p>

                <p>
                    <country-flag country='it' size='big'/>
                </p>

                <p>
                    {{ film.vote_average.toFixed(0) }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import SearchApp from './SearchApp.vue';
import axios from 'axios';

export default {
    name:'AppMain',

    data(){
        return{
            ApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=6b2e78461e0d04629d8506dcedd436c4&query=',
            FilmList : [],
        }
    },

    components:{
        SearchApp,
    },

    methods:{
        apiCall(call){
            axios.get(this.ApiUrl + call)
                .then( (response) => {
                    this.FilmList = response.data.results;
                });
        }
    },
    

}
</script>

<style lang="scss" scoped>
    div.container{
        width: 1200px;
        margin: 0 auto;
    }

    div.film-card{
        width: calc((100%/5) - 2.13rem);
        border: solid black 1px;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        padding: 0 .5rem;
    }

    div.flex{
        display: flex;
        flex-wrap: wrap;
    }

</style>