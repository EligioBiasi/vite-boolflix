<template>
    <nav>
        
    </nav>
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
    
</style>