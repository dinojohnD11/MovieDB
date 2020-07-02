
import {SEARCH_ONCHANGE,MOVIEORTV_ONCLICK,SORTFILTER_CHANGE,SCROLL,ActionType,SourceForMovieOrTv_OnClickAction,SourceForSortFilter_Change,SourceForScroll} from '../types/type'

export function search_Onchange(source:SourceForSortFilter_Change):ActionType {
    return { 
        type: SEARCH_ONCHANGE,
        source: source
    }
}
export function movieortv_Onclick(source:SourceForMovieOrTv_OnClickAction):ActionType{
    return {
        type: MOVIEORTV_ONCLICK,
        source: source
    }
}
export function sortfilter_Change(source:SourceForSortFilter_Change):ActionType{
    return {
        type: SORTFILTER_CHANGE,
        source: source
    }
}
export function scroll(source:SourceForScroll):ActionType{
    return {
        type: SCROLL,
        source: source
    }
}