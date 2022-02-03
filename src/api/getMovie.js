import { ref } from "vue";
import axios from "axios";

const movie = ref([]);

const loadMovie = async id => {
  try {
    const { data, status } = await axios.get(`https://www.omdbapi.com/?apikey=f9bfc5b4&i=${id}`);
    if (status != 200) {
      throw new Error(data.Error);
    }
    movie.value = data;
  } catch (err) {
    console.log(err.message);
  }
};
export default { movie, loadMovie };
