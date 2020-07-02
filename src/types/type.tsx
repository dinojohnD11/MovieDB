export interface StoreType{
    searchValue:string;
    genreValue:string;
    languageValue:string;
    sortValue:string;
    movieOrTv:'tv'|'movie';
    dClass:string;
    lClass:string;
    mClass:string;
    tClass:string;
    list:EntityType[];
    totalPages:number;
    currentPage:number;
    apiKey: string;
    lastUrl: string;
}

export const SEARCH_ONCHANGE='SEARCH_ONCHANGE'
export const MOVIEORTV_ONCLICK='MOVIEORTV_ONCLICK'
export const SORTFILTER_CHANGE='SORTFILTER_CHANGE'
export const SCROLL ='SCROLL'

export interface SourceForMovieOrTv_OnClickAction{
        list: EntityType[],
        currentPage: Number,
        totalPages:Number,
        movieOrTv: 'movie'|'tv',
        lastUrl: string
        searchValue:string;
        genreValue:string;
        languageValue:string;
        sortValue:string;
}

export interface SourceForScroll{
        list: EntityType[],
        currentPage: Number,
        lastUrl: string
}


export interface SourceForSortFilter_Change{
        list: EntityType[],
        currentPage: Number,
        totalPages:Number,
        lastUrl: string
        searchValue:string;
        genreValue:string;
        languageValue:string;
        sortValue:string;
}

interface Search_Onchange {
     
        type: typeof SEARCH_ONCHANGE,
        source:SourceForSortFilter_Change
    
}
interface Movieortv_Onclick {
    
        type: typeof MOVIEORTV_ONCLICK,
        source: SourceForMovieOrTv_OnClickAction
    
}
interface Sortfilter_Change {
    
        type: typeof SORTFILTER_CHANGE,
        source:SourceForSortFilter_Change
    
}
interface Scroll {
    
        type: typeof SCROLL,
        source:SourceForScroll
    
}

export type ActionType = Search_Onchange|Movieortv_Onclick|Sortfilter_Change|Scroll


interface MovieData {
    poster_path:string | null,
    adult?: boolean,
    overview: String,
    release_date?:string,
    genre_ids:number[],
    id: number,
    original_title?: string,
    original_language: string,
    title?: string,
    backdrop_path:string | null,
    popularity:number,
    vote_count: number,
    video?:boolean,
    vote_average: number
}
interface TvData{
    poster_path:string | null,
    popularity:number,
    id: number,
    backdrop_path:string | null,
    vote_average: number,
    overview: string,
    first_air_date?: string,
    origin_country?:string[],
    genre_ids:number[],
    original_language: string,
    vote_count: number,
    name?: string,
    original_name?: string
}

export type EntityType= TvData & MovieData

export interface PropInterface{
       
        movieortv_Onclick: Function
        scroll: Function
        search_Onchange: Function
        sortfilter_Change: Function
        stateInMain: StoreType
}