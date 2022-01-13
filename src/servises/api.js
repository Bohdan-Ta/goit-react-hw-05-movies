import axios from 'axios';

const getDataMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 1000,

  params: {
    api_key: 'da2e772b3d67a7bcc8df1ac3d375d0a4',
  },
});
export async function fetchAPI(q) {
  try {
    const { data } = await getDataMovies(q);
    return data;
  } catch (error) {
    console.error(error);
  }
}
