import Axios from "axios";
import {
  COUPON_CREATE_FAIL,
  COUPON_CREATE_REQUEST,
  COUPON_CREATE_SUCCESS,
  COUPON_DELETE_FAIL,
  COUPON_DELETE_REQUEST,
  COUPON_DELETE_SUCCESS,
  COUPON_DETAILS_FAIL,
  COUPON_DETAILS_REQUEST,
  COUPON_DETAILS_SUCCESS,
  COUPON_LIST_FAIL,
  COUPON_LIST_REQUEST,
  COUPON_LIST_SUCCESS,
  COUPON_UPDATE_FAIL,
  COUPON_UPDATE_REQUEST,
  COUPON_UPDATE_SUCCESS,
} from "../constants/couponConstants";

export const listCoupons = () => async (dispatch, getState) => {
  dispatch({ type: COUPON_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await Axios.get("/api/coupons", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    dispatch({ type: COUPON_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COUPON_LIST_FAIL, payload: message });
  }
};

export const createCoupon = () => async (dispatch, getState) => {
  dispatch({ type: COUPON_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  console.log("WHO ENTERD JUST NOW" + userInfo);
  try {
    const { data } = await Axios.post(
      "/api/coupons",
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      }
    );
    dispatch({
      type: COUPON_CREATE_SUCCESS,
      //   payload: data.category,
      payload: data.coupon,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COUPON_CREATE_FAIL, payload: message });
  }
};

export const deleteCoupon = (couponId) => async (dispatch, getState) => {
  dispatch({ type: COUPON_DELETE_REQUEST, payload: couponId });
  const {
    userSignin: { userInfo },
  } = getState();

  try {
    await Axios.delete(`/api/coupons/${couponId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: COUPON_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COUPON_DELETE_FAIL, payload: message });
  }
};

export const detailsCoupon = (couponId) => async (dispatch) => {
  dispatch({ type: COUPON_DETAILS_REQUEST, payload: couponId });
  try {
    const { data } = await Axios.get(`/api/coupons/${couponId}`);
    dispatch({ type: COUPON_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COUPON_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCoupon = (coupon) => async (dispatch, getState) => {
  dispatch({ type: COUPON_UPDATE_REQUEST, payload: coupon });

  const {
    userSignin: { userInfo },
  } = getState();

  try {
    const { data } = await Axios.put(`/api/coupons/${coupon._id}`, coupon, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: COUPON_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: COUPON_UPDATE_FAIL, payload: message });
  }
};
