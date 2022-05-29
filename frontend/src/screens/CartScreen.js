import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
// bootstrap
import { Helmet } from "react-helmet";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { applyCoupon } from "../actions/userActions";

export default function CartScreen(props) {
  // const productId = props.match.params.id;

  // const queryString = require("query-string");
  // const [coupon, setCoupon] = useState("");

  // const [totalAfterDiscount, setTotalAfterDiscount] = useState("");
  // const [discountError, setDiscountError] = useState("");

  // mine kaka 2022
  // const qty = props.location.search
  //    ? Number(props.location.search.split("=")[1])
  //    :
  //    1;

  // const qty = props.location.search
  //   ? Number(queryString.parse(props.location.search).qty)
  //   : 1;

  // const size = props.location.search
  //   ? String(queryString.parse(props.location.search).size)
  //   : 1;

  // const color = props.location.search
  //   ? String(queryString.parse(props.location.search).color)
  //   : 1;

  //    const size = props.location.search
  //    ? String(props.location.search.split("=").[2])
  //    :
  //    1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log("cartItems kaka new-1");
  console.log(cartItems);

  // const couponInput = useSelector((state) => state.couponValidation);
  // const { userCouponInfo } = couponInput;
  // console.log("what is this kaka");
  // console.log(userCouponInfo);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToCart(productId, qty, size, color));
  //   }
  // }, [dispatch, productId, qty, size, color]);

  const removeFromCartHandler = (id) => {
    // detele action here kaka
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    alert("cartItems kaka new-1");
    // props.history.push("/signin?redirect=/shipping");
    props.history.push("/signin?redirect=shipping");
  };

  //   const updateCartHandler = () => {
  //     console.log("create the function");
  //   };
  // const applyDiscountCoupon = () => {
  //   console.log("send coupon to backend kaka ", coupon);
  //   applyCoupon(coupon).then((res) => {
  //     console.log("RES ON COUPON APPLIED", res.data);
  //   });
  // };
  // const showApplyCoupon = () => {
  //   <>
  //     <input
  //       onChange={(e) => setCoupon(e.target.value)}
  //       value={coupon}
  //       type="text"
  //       className="form-control"
  //     ></input>
  //     <button onClick={applyDiscountCoupon} className="btn btn-primary mt-2">
  //       Apply
  //     </button>
  //   </>;
  // };

  return (
    <div>
      <Helmet>
        <title>Shopping Cart</title>
      </Helmet>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{" "}
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={1}>
                      <span>
                        <strong>Size</strong>
                      </span>
                      <span className="sizeInCartScreen">{item.size}</span>
                    </Col>
                    <Col md={1}>
                      <span>
                        <strong>Color</strong>
                      </span>
                      <span className="sizeInCartScreen">{item.color}</span>
                    </Col>

                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(
                              item.product,
                              Number(e.target.value),
                              item.size,
                              item.color
                            )
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </Col>

                    {/* <div>${item.price}</div> */}
                    <Col md={2}>
                      {/* <Button variant="light"> */}
                      <Button
                        onClick={() => removeFromCartHandler(item.product)}
                        variant="light"
                      >
                        <i className="fa fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                {/* <ListGroup.Item>
                  <h4>
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </h4>
                </ListGroup.Item> */}

                {/* <ListGroup.Item>
                  <h4>Have you got our coupon?</h4>
                  <>
                    <input
                      onChange={(e) => setCoupon(e.target.value)}
                      value={coupon}
                      type="text"
                      className="form-control"
                    ></input>
                    <button
                      onClick={applyDiscountCoupon}
                      className="btn btn-primary mt-2"
                    >
                      Apply
                    </button>
                  </>
                </ListGroup.Item> */}
              </ListGroup>

              {/* lets use this for coupon */}
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>
                    Subtotal ({cartItems.reduce((a, c) => a + Number(c.qty), 0)}{" "}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  {/* <div className="d-grid"> */}
                  <Button
                    // type="button"
                    variant="primary"
                    onClick={checkoutHandler}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                  {/* </div> */}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* <div className="col-1"> */}
        {/* <div className="card card-body"> */}
        {/* <ul> */}
        {/* <li>
                  <h2>
                    Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </h2>
                </li> */}

        {/* <li>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="primary block"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </li> */}
        {/* </ul> */}
        {/* </div> */}
        {/* </div> */}
      </Row>
    </div>
  );
}
