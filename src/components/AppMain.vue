<template>
    <div class="container">
      <SearchApp @addMessage="apiCall" />
      <h1>
          Film
      </h1>
      <div class="flex">
            <div class="film-card" v-for="film in FilmList" :key="film.id">
                <h3>
                    {{ film.title }}
                </h3>

                <p>
                    {{ film.original_title }}
                    
                </p>

                <img v-if="languageFlagAppear(film.original_language)" :src="getImagePath(film.original_language)" alt="">

                <span v-else="">
                  {{ film.original_language }}
                </span>
                <p>
                    {{ film.vote_average.toFixed(0) }}
                </p>
            </div>
      </div>
      
      <div>
        <h1>
          TV series
        </h1>
        <div class="flex">
            <div class="film-card" v-for="series in seriesList">
                <h3>
                    {{ series.name }}
                </h3>

                <p>
                    {{ series.original_name }}
                </p>
                
                <img v-if="languageFlagAppear(series.original_language)" :src="getImagePath(series.original_language)" alt="">
                
                <span v-else="">
                  {{ series.original_language }}
                </span>

                <p>
                    {{ series.vote_average.toFixed(0) }}
                </p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SearchApp from './SearchApp.vue';
  import axios from 'axios';
  
  export default {
    name: 'AppMain',
    data() {
      return {
        FilmList: [],
        seriesList:[],
        FlagList:['it.png','en.png','ja.png','pt.png','es.png','fr.png' ],
        ApiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=6b2e78461e0d04629d8506dcedd436c4&query=',
        ApiSeriesUrl: 'https://api.themoviedb.org/3/search/tv?api_key=6b2e78461e0d04629d8506dcedd436c4&query=',
        itflag: `../public/image/it.png`,

      };
    },
    components: {
      SearchApp,
    },
    methods: {
      apiCall(call) {
        axios.get(this.ApiUrl + call)
          .then((response) => {
            this.FilmList = response.data.results;
          });

        axios.get(this.ApiSeriesUrl + call)
          .then((response) => {
            this.seriesList= response.data.results;
          });
      },
      
      languageFlagAppear(lang){
        if(this.FlagList.includes(lang + '.png')){
          return true
        }else{
          return false
        }
      },

      getImagePath(img){
        return new URL(`../../public/image/${img}.png`, import.meta.url).href;
      }
    },
  };
  </script>

<style lang="scss" scoped>
    div.container{
        width: 1200px;
        margin: 0 auto;
    }

    div.film-card{
        width: calc((100%/5) - 1.63rem);
        border: solid black 1px;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        padding: 0 .5rem;
    }

    div.flex{
        display: flex;
        flex-wrap: wrap;
    }

    img{
      width: 35px;
    }
</style>