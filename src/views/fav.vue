<template>
  <div>
    <h2>Favorite Movies</h2>
    <b-button variant="primary"  @click="goBack()" class="ml-3">Go Back</b-button>
    <b-container id="container">
    <b-row>
      <b-col cols="4" v-for="item in favoriteMovies" :key="item.id">
        <b-card id="card" :title="item.title" :img-src="item.poster" img-alt="Image" img-top class="mb-3">
          <p> {{ item.genres }}</p> 
          <p>{{  item.year }}</p>
          <b-card-actions class="justify-content-center">
          <b-button variant="primary"  @click="viewMovie(item.id)">View</b-button>
          <b-button variant="primary"  @click="goBack()" class="ml-3">Back</b-button>
          <b-button variant="primary"  @click="removeFav(item.id)" class="ml-3">Remove </b-button>
        </b-card-actions>
  </b-card>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  methods: {
    goBack() {
      this.$router.push('/');
    },
    removeFav(movieId) {
      this.$store.dispatch('favorites/removeFromFavorites', movieId);
    },
    viewMovie(movieId){
      this.$router.push('/movie/' + movieId);

    }
  },
  computed: {
    ...mapState(['favoriteMovies']),
  },
};
</script>