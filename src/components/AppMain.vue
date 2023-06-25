<template>
    <div class="container gray-background">
      <SearchApp @addMessage="apiCall" class="black-background"/>
      <h1 class="pink-background">
          Film
      </h1>
      <div class="flex">

        <div class="film-card" v-for="film in FilmList" :key="film.id">

          <img :src="this.PosterUrl + film.poster_path" alt="#" class="poster-img" >
          
          <h3>
              {{ film.title }}
          </h3>

          <p>
              {{ film.original_title }}
              
          </p>

          <img v-if="languageFlagAppear(film.original_language)" :src="getImagePath(film.original_language)" alt="" class="flag">

          <span v-else="">
            {{ film.original_language }}
          </span>

          <div class="star">
            <span v-for="color in voteRounder(film.vote_average)" :key="color">
              <font-awesome-icon icon="fa-solid fa-star" :style="{ color: color }" />
            </span>
          </div>

        </div>
      </div>
      
      <div>
        <h1 class="pink-background">
          TV series
        </h1>
        <div class="flex">
            <div class="film-card" v-for="series in seriesList">
              <img :src="this.PosterUrl + series.poster_path" alt="#" class="poster-img">
                <h3>
                    {{ series.name }}
                </h3>

                <p>
                    {{ series.original_name }}
                </p>
                
                <img v-if="languageFlagAppear(series.original_language)" :src="getImagePath(series.original_language)" alt="" class="flag">
                
                <span v-else="">
                  {{ series.original_language }}
                </span>

                <div class="star">
                  <span v-for="color in voteRounder(series.vote_average)" :key="color">
                    <font-awesome-icon icon="fa-solid fa-star" :style="{ color: color }" />
                  </span>
                </div>
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
        PosterUrl:'https://image.tmdb.org/t/p/w500/',
        yellowStar:'',
        greyStar:'',
        seeIt: false,
      };
    },
    components: {
      SearchApp,
    },
    methods: {
      apiCall(call, PosterLocation) {
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
      },

      voteRounder(vote) {
        const roundedVote = Math.round(vote / 2);
        const starsColor = [];

        for (let i = 0; i < roundedVote; i++) {
          starsColor.push('#fbff00'); // Colore stella gialla
        }

        for (let i = roundedVote; i < 5; i++) {
          starsColor.push('#cccccc'); // Colore stella grigia
        }

        return starsColor;
      },
    },
  };
  </script>

<style lang="scss" scoped>
    div.container{
        width: 1200px;
        margin: 0 auto;
    }

    div.film-card{
        width: calc((100%/5) - 0.63rem);
        border: solid black 1px;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;

        h3,
        p,
        img.flag,
        span,
        div.star{
          display: none;
        }
    }

    div.film-card:hover{
      background-color: red;

        img.poster-img{
          display: none;
        }
        h3,
        p,
        img.flag,
        span{
          display: block;
          padding: .5rem;
        }

        div.star{
          display: flex;
          margin-top: 1rem;
        }
    }

    div.flex{
        display: flex;
        flex-wrap: wrap;
    }
    
    
    img.flag{
      width: 35px;
    }

    img.poster-img{
      width: 100%;
      height: 100%;
      display: block;
    }

    .padding-5{
      padding: 0.5rem;
    }

    .black-background{
      background-color: black;
    }

    .gray-background{
      background-color: gray;
    }

    .pink-background{
      background-color: pink;
    }

    h1{
      margin: 0;
      padding: 1rem 0;
    }
</style>