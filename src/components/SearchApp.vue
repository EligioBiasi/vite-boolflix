<template>
    <div class="flex">
        <div class="film-card" v-for="film in FilmList">
            {{ film.original_title }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            QuerySearch : "",
            FilmList : [],
        }
    },

    created(){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=6b2e78461e0d04629d8506dcedd436c4&query=back')
        .then( (response) => {
            this.FilmList = response.data.results;
            console.log(response.data.results)
        });
    }
}
</script>

<style lang="scss" scoped>
    div.film-card{
        width: calc((100%/5) - 1.14rem);
        height: 200px;
        border: solid black 1px;
        margin: 0.5rem;
    }

    div.flex{
        display: flex;
        flex-wrap: wrap;
    }
</style>