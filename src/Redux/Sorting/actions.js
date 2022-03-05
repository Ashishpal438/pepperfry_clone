import { SORT_BY_PRICE } from "./actionTypes";

export const sortByPrice = (data) => {  
    return {
        type: SORT_BY_PRICE,
        payload: data
    };
    };