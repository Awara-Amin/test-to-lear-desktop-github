import React, { useState, useEffect } from "react";
import "./index.css";
// import "@material-tailwind/react/tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { signout } from "./actions/userActions";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";
import PrivateRoute from "./components/PrivateRoute";
import ProductListScreen from "./screens/ProductListScreen";
import AdminRoute from "./components/AdminRoute";

import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";

import SellerRoute from "./components/SellerRoute";
import SellerScreen from "./screens/SellerScreen";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";

import MapScreen from "./screens/MapScreen";

import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";
import ChatBox from "./components/ChatBox";

import FavoriteScreen from "./screens/FavoriteScreen";
import CategoryListScreen from "./screens/CategoryListScreen";
import CategoryEditScreen from "./screens/CategoryEditScreen";
// import alertBox from './components/AlertBox';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import CouponListScreen from "./screens/CouponListScreen";
import CouponEditScreen from "./screens/CouponEditScreen";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Contact from "./screens/ContactScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import { NavLink } from "react-router-dom";
import Projects from "./screens/Projects";
import ServiceScreen from "./screens/ServiceScreen";

// portfolio
// import Projects from "./screens/Projects";
// import { initialProjects } from "./utils/initialProjects";

// import Nav from 'react-bootstrap/Nav';

// console.log(data)

function App() {
  // const [mydata, setdata] = useState(initialProjects);
  const [loading, setLoading] = useState(true);
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  console.log("userInfo kaka", userInfo);

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  // ******* favorite into dataBase
  // const favorite = useSelector(state => state.favorite);
  // console.log("test kaka")
  // console.log(favorite)
  // console.log("test kaka")
  // const {favorateProducts} = favorite;

  const favorite = useSelector((state) => state.favorite);
  console.log("test kaka in App.js");
  console.log(favorite);
  console.log("test kaka");
  const { favoriteItems } = favorite;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" className="fixingNavbar">
            <Container>
              <Link to="/">
                <Navbar.Brand>Glossy Code</Navbar.Brand>
              </Link>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto w-100  justify-content-end">
                  {/* <Link to="/favorite?" className="nav-link">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    {favoriteItems.length > 0 && (
                      <Badge pill bg="danger aaFav">
                        {favoriteItems.length}
                      </Badge>
                    )}
                  </Link> */}

                  <Link to="/" className="nav-link">
                    <i className="fa fa-heart" aria-hidden="true">
                      HOME
                    </i>
                  </Link>

                  <Link to="/aboutusscreen" className="nav-link">
                    ABOUT
                  </Link>

                  <Link to="/" className="nav-link">
                    SERVISES
                  </Link>
                  <Link to="/project" className="nav-link">
                    PROJECTS
                  </Link>

                  <Link to="/contactscreen" className="nav-link">
                    TALK TO US
                  </Link>

                  {/* <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger aaFav">
                        {cart.cartItems.reduce((a, c) => a + Number(c.qty), 0)}
                      </Badge>
                    )}
                  </Link> */}

                  {/* {userInfo && userInfo.isSeller && (
                    <NavDropdown title="Seller" id="admin-nav-dropdown">
                      <NavDropdown.Item>
                        <Link to="/productlist/seller">Products</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/orderlist/seller">Orders</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  )} */}

                  {userInfo && userInfo.isAdmin && (
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                      <NavDropdown.Item>
                        <Link to="/dashboard">Dashboard</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/categorylist">Category</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/couponlist">Coupon</Link>
                      </NavDropdown.Item>
                      {/* <NavDropdown.Item>
                        <Link to="/productlist">Products</Link>
                      </NavDropdown.Item> */}
                      <NavDropdown.Item>
                        <Link to="/orderlist">Orders</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/userlist">Users</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/support">Support</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>

        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        ></div>

        <main>
          <Container fluid className="paddingRemove">
            <Switch>
              <Route path="/" component={HomeScreen} exact></Route>
              <Route path="/seller/:id" component={SellerScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/signin" component={SigninScreen}></Route>
              <Route path="/register" component={RegisterScreen}></Route>

              {/* <Route
                path="/product/:id"
                component={ProductScreen}
                exact
              ></Route> */}

              <Route
                path="/service/:id"
                component={ServiceScreen}
                exact
              ></Route>

              <Route
                path="/favorite/:id?"
                component={FavoriteScreen}
                exact
              ></Route>
              <Route
                path="/product/:id/edit"
                component={ProductEditScreen}
                exact
              ></Route>
              <Route
                path="/category/:id/edit"
                component={CategoryEditScreen}
                exact
              ></Route>

              <Route
                path="/coupon/:id/edit"
                component={CouponEditScreen}
                exact
              ></Route>

              <Route path="/shipping" component={ShippingAddressScreen}></Route>
              <Route path="/payment" component={PaymentMethodScreen}></Route>
              <Route path="/placeorder" component={PlaceOrderScreen}></Route>
              <Route path="/order/:id" component={OrderScreen}></Route>
              <Route
                path="/orderhistory"
                component={OrderHistoryScreen}
              ></Route>
              <Route
                path="/search/name/:name?"
                component={SearchScreen}
                exact
              ></Route>

              <Route
                path="/search/category/:category"
                component={SearchScreen}
                exact
              ></Route>

              <Route
                path="/search/category/:category/name/:name"
                component={SearchScreen}
                exact
              ></Route>

              <Route
                path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
                component={SearchScreen}
                exact
              ></Route>

              {/* <Route path="/profile" component={ProfileScreen}></Route> */}
              <PrivateRoute
                path="/profile"
                component={ProfileScreen}
              ></PrivateRoute>

              <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>

              {/* <AdminRoute
                path="/productlist"
                component={ProductListScreen}
                exact
              ></AdminRoute> */}

              {/*  */}
              <AdminRoute
                path="/categorylist"
                component={CategoryListScreen}
                exact
              ></AdminRoute>

              {/*  */}
              <AdminRoute
                path="/couponlist"
                component={CouponListScreen}
                exact
              ></AdminRoute>

              {/* <AdminRoute
                path="/productlist/pageNumber/:pageNumber"
                component={ProductListScreen}
                exact
              ></AdminRoute> */}

              <AdminRoute
                path="/orderlist"
                component={OrderListScreen}
                exact
              ></AdminRoute>

              <AdminRoute
                path="/userlist"
                component={UserListScreen}
              ></AdminRoute>

              <AdminRoute
                path="/user/:id/edit"
                component={UserEditScreen}
              ></AdminRoute>

              <AdminRoute
                path="/dashboard"
                component={DashboardScreen}
              ></AdminRoute>

              <AdminRoute
                path="/support"
                component={SupportScreen}
              ></AdminRoute>

              {/* <SellerRoute
                path="/productlist/seller"
                component={ProductListScreen}
              ></SellerRoute> */}

              <SellerRoute
                path="/orderlist/seller"
                component={OrderListScreen}
              ></SellerRoute>

              <Route path="/" component={HomeScreen} exact></Route>
              <Route
                path="/contactscreen"
                component={ContactScreen}
                exact
              ></Route>
              <Route
                path="/aboutusscreen"
                component={AboutUsScreen}
                exact
              ></Route>

              <Route path="/project" component={Projects} exact></Route>
            </Switch>
          </Container>
        </main>

        <footer>
          <div className="text-center-1">Created by Amini</div>
        </footer>
      </div>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
