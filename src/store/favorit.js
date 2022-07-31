import { defineStore } from "pinia";
import axios from "axios";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "f9bfc5b4";

export const useFavoritStore = defineStore("favorit", {
  state: () => {
    return {
      favMovies: JSON.parse(localStorage.getItem("favMovies")) ?? [],
    };
  },
  actions: {
    addToFavorit(id) {
      axios
        .get(`${API_URL}?apikey=${API_KEY}&i=${id}`)
        .then(res => {
          const { data } = res;
          const movie = {
            imdbID: data.imdbID,
            Title: data.Title,
            Poster: data.Poster,
            Year: data.Year,
          };
          this.favMovies.push(movie);
          localStorage.setItem("favMovies", JSON.stringify(this.favMovies));
        })
        .catch(err => console.log(err));
    },
    removeFromFav(id) {
      this.favMovies = this.favMovies.filter(movie => movie.imdbID != id);
      localStorage.setItem("favMovies", JSON.stringify(this.favMovies));
    },
  },
});
