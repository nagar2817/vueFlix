import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    originalMovies: [],
    genres: [],
    years: [],
    selectedYear: '',
    selectedGenre: '',
    searchTerm: '',
    favoriteMovies: []
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setOriginalMovies(state, movies) {
      state.originalMovies = movies;
    },
    setGenres(state, genres) {
      state.genres = genres;
    },
    setYears(state, years) {
      state.years = years;
    },
    setSelectedYear(state, year) {
      state.selectedYear = year;
    },
    setSelectedGenre(state, genre) {
      state.selectedGenre = genre;
    },
    setSearchTerm(state, term) {
      state.searchTerm = term;
    },
    addToFavorites(state, movie) {
      if (!state.favoriteMovies.includes(movie)) {
        state.favoriteMovies.push(movie);
      }
    },
    removeFromFavorites(state, movie) {
      const index = state.favoriteMovies.findIndex(favorite => favorite.id === movie.id);
      if (index !== -1) {
        state.favoriteMovies.splice(index, 1);
      }
    }
  },
  actions: {
    fetchMovies(context) {
      axios
        .get('assets/json/movies.json')
        .then(response => {
          const movies = response.data.map(movie => {
            const year = new Date(movie.release_date * 1000).getFullYear();
            return { ...movie, year };
          });
          context.commit('setMovies', movies);
          context.commit('setOriginalMovies', movies);
          context.commit('setGenres', context.getters.getAllGenres);
          context.commit('setYears', context.getters.getYearList);
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    }
  },
  getters: {
    getAllGenres(state) {
      const genres = [];
      state.movies.forEach(movie => {
        movie.genres.forEach(genre => {
          if (!genres.includes(genre)) {
            genres.push(genre);
          }
        });
      });
      return genres;
    },
    getYearList(state) {
      const years = [];
      state.movies.forEach(movie => {
        if (!years.includes(movie.year)) {
          years.push(movie.year);
        }
      });
      years.sort((a, b) => b - a);
      return years;
    }
  }
});

export default store;
