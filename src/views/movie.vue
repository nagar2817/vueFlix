<script scooped>

</script>
<template>
<div>
  <div class="background">
  <div class="poster">
    <div class="poster--content">
      <div class="poster--image">
        <img :src="movie.poster" alt="Duster - Stratosphere">
      </div>
      <div class="poster--info">
        <div class="poster--info-col-1">
          <div class="poster--tracks">
            <ol>
               <!-- Used v-for directive to loop through genres -->
               <li v-for="genre in movie.genres" :key="genre">{{ genre }}</li>
              
            </ol>
          </div>
          <div class="poster--release-info">
            <div>{{ movie.year }} </div>
          </div>
        </div>
        <div class="poster--info-col-2">
         

          <div class="poster--genre">{{ getYear(movie.release_date) }}</div>
          <div class="poster--title">
            <div class="poster--artist">{{ movie.title }}</div>
          </div>
          <b-button variant="danger"  @click="goBack()">Back</b-button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
import './movieStyle.css'
import axios from 'axios'

export default {
    name: 'Movie',
    props: ['id'],
    mounted() {
        axios({
          method: "GET",
          "url": "assets/json/movies.json"
        }).then(response => {
         const values = JSON.parse(JSON.stringify(response.data)); 
        this.movie = values.find(item => item.id === this.id);  
        }, error => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    data() {
        return {
          movie:null
        }
    },
    components: {},
   methods: {

     goBack () {
        this.$router.push('/')
    },
    getYear(value){
          const year = new Date(value * 1000).getFullYear();
        return year;
    }
  }
}

</script> 
