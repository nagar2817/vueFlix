<style scoped>
#container{
  margin-top:10px;
}
.tag {
  display: inline-block;
  padding: 0.3em 0.6em;
  background-color: #f2f2f2;
  color: #555555;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
}

</style>

<template>
  <div class="home">
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Movies </b-navbar-brand>
      <router-link :to="{ name: 'favMovie', params: { favoriteMovies: favoriteMovies } }" class="FavIcon">   <b-button variant="danger"> Favorite-Movies</b-button>  </router-link> 
    

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
   

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mb-2">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="searchTerm" @input="handleInputChange"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  
<div>
  <label for="genre-select">Filter by Genre:</label>
  <select id="genre-select" v-model="selectedGenre" @change="handleGenreChange">
    <option value="">All Genres</option>
    <option  v-for="genre in genres" :value="genre" :key="genre">{{ genre }}</option>
  </select>
</div> 

<div>
  <label for="year-select">Filter by Year:</label>
  <select id="year-select" v-model="selectedYear" @change="handleYearChange">
    <option value="">All Years</option>
    <option  v-for="year in years" :value="year" :key="year">{{ year }}</option>
  </select>
</div> 


<b-container id="container">
      <b-row>
        <b-col cols="4" v-for="(item, index) in movies" :key="index">
          <b-card id="card" :title="item.title" :img-src="item.poster" img-alt="Image" img-top class="mb-3">
            <!-- <p> {{ item.genres }}</p>  -->
            <span class="tag">{{ item.genres[0] }}</span>
            <span class="tag">{{ item.genres[1] }}</span>
            <span class="tag">{{ item.genres[2] }}</span>

            <p>{{  item.year }}</p>
            <b-card-actions class="justify-content-center">
            <b-button variant="primary"  @click="viewMovie(item.id)">View</b-button>
            <b-button variant="primary"  @click="addToFavorites(item)" class="ml-3">Add to Favorite</b-button>

          </b-card-actions>

     
    </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div> 
</template>

<script>
import './movieStyle.css';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: 'home',
    computed: {
    ...mapState(['movies', 'originalMovies', 'genres', 'years', 'selectedYear', 'selectedGenre', 'searchTerm', 'favoriteMovies']),

    selectedYear: {
      get() {
        return this.$store.state.selectedYear;
      },
      set(year) {
        this.$store.commit('setSelectedYear', year);
        this.filterMovies();
      },
    },
    selectedGenre: {
      get() {
        return this.$store.state.selectedGenre;
      },
      set(genre) {
        this.$store.commit('setSelectedGenre', genre);
        this.filterMovies();
      },
  },
  searchTerm: {
      get() {
        return this.$store.state.searchTerm;
      },
      set(genre) {
        this.$store.commit('setSearchTerm', genre);
        this.filterMovies();
      },
  },
},
  methods: {
      ...mapMutations(['setSelectedYear', 'setSelectedGenre', 'setSearchTerm', 'addToFavorites', 'removeFromFavorites']),
    ...mapActions(['fetchMovies']),
    
    viewMovie(id) {
      this.$router.push('/movie/' + id);
    },
    handleInputChange() {
      if (this.searchTerm) {
        this.$store.commit('setSearchTerm', this.searchTerm.toLowerCase());
        this.filterMovies();
      } else {
        this.resetFilters();
      }
    },
    handleGenreChange() {
      if(this.selectedGenre){
        this.$sotre.commit('setSelectedGenre', this.selectedGenre.toLowerCase());
        this.filterMovies();
      }else{
        this.resetFilters();
      } 
    },
    handleYearChange() {
      if(this.selectedYear){
        this.$sotre.commit('setSelectedYear', this.selectedYear);
        this.filterMovies();
      }else{
        this.resetFilters();
      } 

    },
    filterMovies() {
      let filteredMovies = this.originalMovies;

      if (this.selectedGenre) {
        filteredMovies = filteredMovies.filter(movie => movie.genres.includes(this.selectedGenre));
      }

      if (this.selectedYear) {
        filteredMovies = filteredMovies.filter(movie => movie.year == this.selectedYear);
      }

      if (this.searchTerm) {
        filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(this.searchTerm));
      }

      this.$store.commit('setMovies', filteredMovies);
    },
    resetFilters() {
      this.setSelectedYear('');
      this.setSelectedGenre('');
      this.setSearchTerm('');
      this.$store.commit('setMovies', this.originalMovies);
    },
  },
  mounted() {
    this.fetchMovies();
  },
}

</script>

