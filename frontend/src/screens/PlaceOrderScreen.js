import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import { applyCoupon } from "../actions/userActions";
import { listCoupons } from "../actions/couponActions";
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState("");
  console.log("inside placeOrder kaka");
  console.log(cart);

  // first check if the payment method has been choosen or not
  if (!cart.paymentMethod) {
    props.history.push("/payment");
  }

  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const couponList = useSelector((state) => state.couponList);
  const { loading: loaddingCoupon, error: errorCoupon, coupons } = couponList;
  console.log("what is this kaka");
  console.log(coupons);
  //   console.log("this is coupon name ", coupon);
  //   console.log(typeof coupon);

  //   console.log(error);

  const toPrice = (num) => Number(num.toFixed(2)); // to round the number 5.123 =>"5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );

  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);

  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  //   cart.taxPrice = toPrice(0.15 * cart.itemsPrice);

  //   cart.totalPrice = discount
  //     ? cart.itemsPrice +
  //       cart.shippingPrice +
  //       cart.taxPrice -
  //       cart.totalPrice * discount * 0.01
  //     : cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // console.log("see you in the next session")
    // all items of cart and changing cartItems name to orederItems
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  const couponHandler = () => {
    console.log("bringing coupons to here ");
    console.log(coupons);
    dispatch(listCoupons({}));
    const xx = coupons.filter((x) => x.name === coupon);
    console.log("xx");
    // setDiscount(xx[0].discount);
    // xx.length === 0
    //   ? alert("your coupon number is wrong")
    //   : setDiscount(xx[0].discount);
    if (xx.length === 0) {
      alert("your coupon number is wrong");
    } else {
      setDiscount(xx[0].discount);
    }

    // console.log("naw filter bram");
    // console.log(xx);
  };
  console.log("discount");
  console.log(discount);

  cart.totalPrice = discount
    ? cart.itemsPrice +
      cart.shippingPrice +
      cart.taxPrice -
      cart.totalPrice * discount * 0.01
    : cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  // applyCo;pon(coupon).then((res) => {
  //   console.log("RES ON COUPON APPLIED", res.data);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong>
                  {cart.shippingAddress.fullName} <br />
                  <strong>Address:</strong>
                  {cart.shippingAddress.address},{cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.postalCode},
                  {cart.shippingAddress.country}
                </p>
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Payment method</h2>
                <p>
                  <strong>Method:</strong>
                  {cart.paymentMethod}
                </p>
              </div>
            </li>

            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summery</h2>
              </li>

              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>

              <li>
                <h7>coupon?</h7>
                <>
                  <input
                    onChange={(e) => setCoupon(e.target.value.toString())}
                    value={coupon}
                    placeholder="add here if you have coupon number"
                    type="text"
                    className="form-control"
                  ></input>
                  <button
                    onClick={couponHandler}
                    className="btn btn-primary mt-2"
                  >
                    Apply to get discount
                  </button>
                </>
              </li>

              <li>
                <div className="row">
                  <div>
                    <strong>Order Total</strong>
                  </div>
                  <div>
                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>

              {/* here for pdf */}
              <li className="pushDown">
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="primary block pushDown"
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
