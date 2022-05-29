import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Axios from "axios";
// import { detailsCategory, updateCategory } from "../actions/categoryActions";
import { detailsCoupon, updateCoupon } from "../actions/couponActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { COUPON_UPDATE_RESET } from "../constants/couponConstants";

export default function CouponEditScreen(props) {
  // getting the categoryId from the URL
  const couponId = props.match.params.id;

  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [discount, setDiscount] = useState("");

  const couponDetails = useSelector((state) => state.couponDetails);
  const { loading, error, coupon } = couponDetails;

  console.log("esta kaka inside couponEditScreen.js");
  console.log(coupon);

  const couponUpdate = useSelector((state) => state.couponUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = couponUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      // dispatch({ type: CATEGORY_UPDATE_RESET });
      props.history.push("/couponlist");
    }

    // if category didnt exist
    if (!coupon || coupon._id !== couponId || successUpdate) {
      dispatch({ type: COUPON_UPDATE_RESET });
      dispatch(detailsCoupon(couponId));
    } else {
      setName(coupon.name);
      setExpiry(coupon.expiry);
      setDiscount(coupon.discount);
    }
    // so when we have change in any of these, the useEffect function runs
  }, [coupon, dispatch, couponId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // todo: dispatch update product
    dispatch(
      updateCoupon({
        _id: couponId,
        name,
        expiry,
        discount,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  // UI part
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Coupon {couponId}</h1>
          <h1>test kaka{couponId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}

        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="expiry">Expiry</label>
              <input
                id="expiry"
                type="text"
                placeholder="Expiry Date"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="discount">Discount</label>
              <textarea
                id="discount"
                rows="3"
                type="text"
                placeholder="Enter discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
