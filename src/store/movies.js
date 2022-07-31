import axios from "axios";
import { defineStore } from "pinia";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "f9bfc5b4";

export const useMoviesStore = defineStore("movies", {
  state: () => {
    return {
      movies: [],
      movie: {},
      isLoading: false,
      totalResults: 0,
      loadingMessage: "Please wait",
      page: 1,
    };
  },
  actions: {
    async getAllMovies(keyword) {
      this.isLoading = true;
      this.loadingMessage = "Please wait";
      if (!keyword) {
        keyword = "One Piece";
      }

      try {
        const { data } = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${keyword}`);
        if (data.Response == "False") {
          throw new Error(data.Error);
        }
        [this.totalResults, this.movies, this.isLoading, this.page] = [data.totalResults, data.Search, false, 1];
      } catch (err) {
        [this.isLoading, this.loadingMessage] = [true, err.message];
      }
    },
    async nextPage(page) {
      const keyword = localStorage.getItem("keyword") ? localStorage.getItem("keyword") : "One Piece";
      this.isLoading = true;
      this.loadingMessage = "Please wait";
      try {
        const { data } = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${keyword}&page=${page}`);

        if (data.Response == "False") {
          throw new Error(data.Error);
        }
        this.isLoading = false;
        data.Search.forEach(movie => this.movies.push(movie));
      } catch (error) {}
    },
    async getMovieByID(id) {
      this.isLoading = true;
      try {
        const { data, status } = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);
        if (status != 200) {
          throw new Error(data.Error);
        }
        [this.movie, this.isLoading] = [data, false];
      } catch (err) {
        console.log(err.message);
      }
    },
  },
});
