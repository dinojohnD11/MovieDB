
import {SEARCH_ONCHANGE,MOVIEORTV_ONCLICK,GENRE_ONCHANGE,LANGUAGE_ONCHANGE,SORT_ONCHANGE,SCROLL,ActionType} from '../types/type'

export function search_Onchange(target:HTMLInputElement):ActionType {
    return { 
        type: SEARCH_ONCHANGE,
        payload:target.value 
    }
}
export function movieortv_Onclick(clickedOn:'movie'|'tv'):ActionType{
    return {
        type: MOVIEORTV_ONCLICK,
        payload: clickedOn
    }
}
export function genre_Change(target:HTMLSelectElement):ActionType{
    return {
        type: GENRE_ONCHANGE,
        payload:+target.value
    }
}
export function language_Onchange(target:HTMLSelectElement):ActionType{
    return {
        type: LANGUAGE_ONCHANGE,
        payload:target.value
    }
}
export function sort_Onchange(target:HTMLSelectElement):ActionType{
    return {
        type:SORT_ONCHANGE,
        payload:target.value
    }
}
export function scroll():ActionType{
    return {
        type:SCROLL
    }
}