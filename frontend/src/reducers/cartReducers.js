
import {CART_ADD_ITEM,
        CART_REMOVE_ITEM,
        
        CART_SAVE_PAYMENT_METHOD,
        CART_SAVE_SHIPPING_ADDRESS,

        CART_ADD_ITEM_FAIL,
        FAV_ADD_ITEM,
        FAV_REMOVE_ITEM,
        FAV_ADD_ITEM_FAIL,
        FAV_EMPTY,
                             } from "../constants/cartConstants";
import { CART_EMPTY } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => 
                    x.product === existItem.product ? item : x),
                };
                } else {
                    return { ...state, cartItems: [...state.cartItems, item] };     
                    }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                error: '',
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return{ ...state, shippingAddress: action.payload};

        case CART_SAVE_PAYMENT_METHOD:
            return {...state, paymentMethod: action.payload};

        case CART_ADD_ITEM_FAIL:
            return {...state, error: action.payload}
        
        case CART_EMPTY:
            return {...state, error: '', cartItems: []}
            
        default:
            return state;
                }
            };




export const favoriteReducer = (state = {favoriteItems: []}, action) => {
                switch(action.type){
                    case FAV_ADD_ITEM:
                        const item = action.payload;
                        const existItem = state.favoriteItems.find((x) => x.product === item.product);
                        if (existItem) {
                            return {
                                ...state,
                                favoriteItems: state.favoriteItems.map((x) => 
                                x.product === existItem.product ? item : x),
                            };
                            } else {
                                return { ...state, favoriteItems: [...state.favoriteItems, item] };     
                                }
                    case FAV_REMOVE_ITEM:
                        return {
                            ...state,
                            error: '',
                            favoriteItems: state.favoriteItems.filter((x) => x.product !== action.payload),
                            
                        };
                    
            
                    case FAV_ADD_ITEM_FAIL:
                        return {...state, error: action.payload}
                    
                    case FAV_EMPTY:
                        return {...state, error: '', favoriteItems: []}
                        
                    default:
                        return state;
                            }
};



//  export const favoriteReducer = (state = {}, action) => {
//     switch(action.type){
//         case FAV_ADD_ITEM:
//             const item = action.payload;
//             const existItem = state.favoriteItems.find((x) => x.product === item.product);
//             if (existItem) {
//                 return {
//                     ...state,
//                     favoriteItems: state.favoriteItems.map((x) => 
//                     x.product === existItem.product ? item : x),
//                 };
//                 } else {
//                     return { ...state, favoriteItems: [...state.favoriteItems, item] };     
//                     }
//         case FAV_REMOVE_ITEM:
//             return {
//                 ...state,
//                 error: '',
//                 favoriteItems: state.favoriteItems.filter((x) => x.product !== action.payload),
                
//             };
        

//         case FAV_ADD_ITEM_FAIL:
//             return {...state, error: action.payload}
        
//         case FAV_EMPTY:
//             return {...state, error: '', favoriteItems: []}
            
//         default:
//             return state;
//                 }
//             };





