import Axios from "axios";

import {CART_ADD_ITEM,
        CART_REMOVE_ITEM,

        CART_SAVE_PAYMENT_METHOD,
        CART_SAVE_SHIPPING_ADDRESS,

        CART_ADD_ITEM_FAIL,
        
        FAV_REMOVE_ITEM,
        FAV_ADD_ITEM,
    
                            } from "../constants/cartConstants";

// export const addToCart = (productId, qty) => async (dispatch, getState) =>{
//     const { data } = await Axios.get(`/api/products/${productId}`);
//     dispatch({
//         type: CART_ADD_ITEM,
//         payload: {
//             name: data.name,
//             image: data.image,
//             price: data.price,
//             countInStock: data.countInStock,
//             product: data._id,
//             seller: data.seller,
//             qty,
//         },
//     });
//     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
// }


export const addToCart = (productId, qty, size, color) => async (dispatch, getState) =>{
    const { data } = await Axios.get(`/api/products/${productId}`);
    const {cart: {cartItems}} = getState();
    // console.log(data.seller._id, cartItems[0].seller);
 // if(cartItems.length > 0 && data.seller._id !== cartItems[0].seller){
    if (cartItems.length > 0 && data.seller._id !== cartItems[0].seller._id){
        dispatch({
            type: CART_ADD_ITEM_FAIL,
            payload: `Can not Add to Cart. Buy only from ${cartItems[0].seller.seller.name} in this order`
        });
    } else {
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                product: data._id,
                seller: data.seller,
                qty,
                size,
                color,
            },
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    }  
}


export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};


export const saveShippingAddress = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_SHIPPING_ADDRESS, payload: data});
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) =>{
    dispatch({type: CART_SAVE_PAYMENT_METHOD, payload: data});
}




export const addToFavorite = (productId) => async (dispatch, getState) => {
    // const { data } = await Axios.get(`/api/favorite/${productId}`);
    const { data } = await Axios.get(`/api/products/${productId}`);
    const {
      favorite: { favoriteItems },
    } = getState();
    if (favoriteItems.length > 0) {
    }
    dispatch({
      type: FAV_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        seller: data.seller,
      },
    });
    localStorage.setItem(
      'favoriteItems',
      JSON.stringify(getState().favorite.favoriteItems)
    );
  };


export const removeFromFavorite = (productId) => (dispatch, getState) => {
  dispatch({ type: FAV_REMOVE_ITEM, payload: productId });
  localStorage.setItem(
    'favoriteItems',
    JSON.stringify(getState().favorite.favoriteItems)
  );
};

