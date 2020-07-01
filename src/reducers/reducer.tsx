import { StoreType ,ActionType} from '../types/index'


const initialState :StoreType= {
    searchValue:'',
    genrevalue:'',
    languageValue:'',
    sortValue:'popularity',
    movieOrTv:'movie',
    dClass:'border bg-dark text-light border-dark col-md-6 p-2',
    lClass:'border bg-light text-dark border-dark col-md-6 p-2',
    mClass:'border bg-dark text-light border-dark col-md-6 p-2',
    tClass:'border bg-light text-dark border-dark col-md-6 p-2',
    list:[{
        poster_path: "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
        adult: false,
        overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
        release_date: "2012-04-25",
        genre_ids: [
          878,
          28,
          12
        ],
        id: 24428,
        original_title: "The Avengers",
        original_language: "en",
        title: "The Avengers",
        backdrop_path: "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
        popularity: 7.353212,
        vote_count: 8503,
        video: false,
        vote_average: 7.33
      }],
    totalResults:0,
    apiKey: '6b4467d11caf9e77125a5cfa5382ff7a'

  };
  function reducer(state:StoreType = initialState,action:StoreType) {
  
      return state;
    
  }
  export default reducer;