import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Card from "react-bootstrap/Card";
import {
  addToCart,
  addToFavorite,
  removeFromFavorite,
} from "../actions/cartActions";
// import Button from "react-bootstrap/Button";
// import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
// import Favorite from "@mui/icons-material/Favorite";
// import Preview from "@mui/icons-material/Preview";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { IconName } from "react-icons/bs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Service(props) {
  const { service } = props;
  const renderTooltipv = <Tooltip>View Product</Tooltip>;
  const renderTooltipr = <Tooltip>Remove from Wishlist</Tooltip>;
  const renderTooltipf = <Tooltip>Add to Wishlist</Tooltip>;
  const renderTooltipc = <Tooltip>Add to Cart</Tooltip>;

  console.log("first props in Product.js");
  console.log(service._id);
  const favorite = useSelector((state) => state.favorite);
  const { favoriteItems } = favorite;

  const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;
  // console.log(cartItems);

  // const addToFavoriteHandler = () => {
  //   if (favoriteItems.product) {
  //     dispatch(removeFromFavorite(product._id));
  //   } else {
  //     dispatch(addToFavorite(product._id));
  //   }
  //   console.log(favoriteItems.product);
  // };

  // const discountRate = (product.discount / 100) * product.price;

  const lackOfProductHandler = () => {
    alert("Sorry this product ha been runing out of the stock");
  };

  // const addToCartHandler = async (item) => {
  //   const existItem = cartItems.find((x) => x._id === product.product);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`/api/products/${item._id}`);
  //   if (data.countInStock < quantity) {
  //     window.alert("Sorry. Product is out of stock");
  //     return;
  //   }
  //   ctxDispatch({
  //     type: "CART_ADD_ITEM",
  //     payload: { ...item, quantity },
  //   });
  // };

  return (
    <Card className="card" key={service._id}>
      {/* <Link to={`/product/${product._id}`}> */}
      <img
        src={service.image}
        className="justyfyingImages"
        alt={service.name}
      />
      {/* </Link> */}

      <Card.Body className="wholeBody">
        <div className="textOnBody">
          <FontAwesomeIcon icon="fa fa-globe" />
          <div className="textOnBodyII">
            <i class="fa fa-globe textOnBodyI"></i>
          </div>

          <div className="textOnBodyII">
            <Link className="textOnBodyI " to={`/service/${service._id}`}>
              <h8 className="fontLink1">{service.name}</h8>
            </Link>
          </div>

          <Card.Text className="texts">
            We are using the best tools and technologies to create unique
            websites and eye catching graphic design.
          </Card.Text>
          <Card.Text className="explorCenter">Explore More</Card.Text>
        </div>
        {/* {product.discount > 0 ? (
          <div>
            <Card.Text
              style={{
                textDecorationLine: "line-through",
                textDecorationStyle: "solid",
                color: "red",
              }}
            >
              ${product.description}
            </Card.Text>
            <Card.Text className="discountRatee">{discountRate}</Card.Text>
            <Card.Text>${product.price - discountRate} Current Price</Card.Text>
          </div>
        ) : (
          <Card.Text>${product.price}</Card.Text>
        )} */}

        {/* <Button>Add to cart</Button> */}
        {/* {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock kase xare
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )} */}
      </Card.Body>
      <div className="iconsOverProducts">
        {/* <div className="iconsOverProducts-opocity"> */}
        {/* <div>
          <Link to={`/favorite/${product._id}`}>
            <i className="fa fa-heart-o eachIcon"></i>
          </Link>
        </div> */}

        {/* <div>
          <li className="preview-color">
            {favoriteItems ? (
              <OverlayTrigger placement="left" overlay={renderTooltipr}>
                <i
                  className="fa fa-heart-o eachIcon"
                  onClick={() => addToFavoriteHandler(product._id)}
                />
              </OverlayTrigger>
            ) : (
              <OverlayTrigger placement="left" overlay={renderTooltipf}>
                <i
                  className="fa fa-heart-o eachIcon"
                  onClick={() => addToFavoriteHandler(product._id)}
                />
              </OverlayTrigger>
            )}
          </li>
        </div> */}

        {/* <div>
          <OverlayTrigger placement="left" overlay={renderTooltipc}>
            <li className="preview-color">
              {product.countInStock === 0 ? (
                <i
                  class="fa fa-shopping-basket eachIcon aa2"
                  onClick={() => lackOfProductHandler()}
                ></i>
              ) : (
                <i
                  className="fa fa-shopping-basket eachIcon"
                  onClick={(e) => dispatch(addToCart(product._id, 1))}
                ></i>
              )}
            </li>
          </OverlayTrigger>
        </div> */}

        {/* <div>
          <i onClick={() => addToCartHandler(product)} className="fa fa-heart-o eachIcon"></i>
        </div> */}
      </div>
      {/* </div> */}
    </Card>
  );
}
