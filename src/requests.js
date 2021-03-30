const API_KEY = "f99de45afeda2e0339ccbe541cb2d051";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchIndflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
}

export default requests;