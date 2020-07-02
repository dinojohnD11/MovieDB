import { StoreType ,ActionType} from '../types/type'


const initialState :StoreType= {
    searchValue:'',
    genreValue:'',
    languageValue:'',
    sortValue:'',
    movieOrTv:'movie',
    dClass:'border bg-dark text-light border-dark col-md-6 p-2',
    lClass:'border bg-light text-dark border-dark col-md-6 p-2',
    mClass:'border bg-dark text-light border-dark col-md-6 p-2',
    tClass:'border bg-light text-dark border-dark col-md-6 p-2',
    list:[],
    totalPages:0,
    currentPage:1,
    apiKey: '6b4467d11caf9e77125a5cfa5382ff7a',
    lastUrl:''

  };
  function reducer(state:StoreType = initialState,action:ActionType) {
    switch(action.type){
        case "MOVIEORTV_ONCLICK":{
            let r=Object.assign({},state,action.source);
            console.log('moviortv)onclick');
            console.log(r.list)
            console.log('last url');
            console.log(r.lastUrl);
            console.log('genre value');
            console.log(r.genreValue);
            console.log('language value');
            console.log(r.languageValue);
            console.log('sort value');
            console.log(r.sortValue);
            return r;
            }
        case "SORTFILTER_CHANGE":{
            let r=Object.assign({},state,action.source);
            console.log('sortfilter-chnage')
            console.log(r.list)
            console.log('last url');
            console.log(r.lastUrl);
            console.log('genre value');
            console.log(r.genreValue);
            console.log('language value');
            console.log(r.languageValue);
            console.log('sort value');
            console.log(r.sortValue);
            return r;
          }
          case "SEARCH_ONCHANGE":{
            let r=Object.assign({},state,action.source);
            console.log('serch-onchnage')
            console.log(r.list)
            console.log('last url');
            console.log(r.lastUrl);
            console.log('genre value');
            console.log(r.genreValue);
            console.log('language value');
            console.log(r.languageValue);
            console.log('sort value');
            console.log(r.sortValue);
            return r;
            }
            case "SCROLL":{
                let r=Object.assign({},state,action.source);
                console.log('scroll')
                console.log(r.list)
                console.log('last url');
                console.log(r.lastUrl);
                console.log('genre value');
                console.log(r.genreValue);
                console.log('language value');
                console.log(r.languageValue);
                console.log('sort value');
                console.log(r.sortValue);
                return r;
                }
    }
  
      return state;
    
  }
  export default reducer;


