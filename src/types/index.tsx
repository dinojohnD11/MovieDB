export interface StoreType{
    searchValue:String;
    genrevalue:String;
    languageValue:String;
    sortValue:String;
    movieOrTv:'tv'|'movie';
    dClass:String;
    lClass:String;
    mClass:String;
    tClass:String;
    list:EntityType[];
    totalResults:Number;
    apiKey: String;
}

export const SEARCH_ONCHANGE='SEARCH_ONCHANGE'
export const MOVIEORTV_ONCLICK='MOVIEORTV_ONCLICK'
export const GENRE_ONCHANGE='GENRE_ONCHANGE'
export const LANGUAGE_ONCHANGE='LANGUAGE_ONCHANGE'
export const SORT_ONCHANGE='SORT_ONCHANGE'
export const SCROLL ='SCROLL'

interface Search_Onchange {
     
        type: typeof SEARCH_ONCHANGE,
        payload:String
    
}
interface Movieortv_Onclick {
    
        type: typeof MOVIEORTV_ONCLICK,
        payload: String
    
}
interface Genre_Change {
    
        type: typeof GENRE_ONCHANGE,
        payload: Number
    
}
interface Language_Onchange {
    
        type: typeof LANGUAGE_ONCHANGE,
        payload:String
    
}
interface Sort_Onchange {
    
        type: typeof SORT_ONCHANGE,
        payload:String
    
}
interface Scroll {
    
        type: typeof SCROLL
    
}

export type ActionType = Search_Onchange|Movieortv_Onclick|Genre_Change|Language_Onchange|Sort_Onchange|Scroll


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