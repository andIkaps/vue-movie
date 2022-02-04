import { ref } from "vue";
import axios from "axios";

const movie = ref([]);
const load = ref(true);
const msg = ref("Please Wait");
const loadAMovie = ref(false);

const loadMovie = async id => {
  load.value = true;
  loadAMovie.value = false;
  msg.value = "Please Wait";
  try {
    const { data, status } = await axios.get(`${import.meta.env.VITE_API_URL}?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`);
    if (status != 200) {
      throw new Error(data.Error);
    }
    movie.value = data;
    load.value = false;
    loadAMovie.value = true;
  } catch (err) {
    console.log(err.message);
  }
};
export default { movie, load, msg, loadAMovie, loadMovie };
