import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-redux";
// import data from "../data";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { createReview, detailsProduct } from "../actions/productActions";
import Rating from "../components/Rating";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";
// import { addToFavorite } from "../actions/favoriteCartActions";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// bootStrap part
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { Helmet } from "react-helmet-async";
import { Helmet } from "react-helmet";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import Container from "react-bootstrap/Container";
import ScrollToTop from "../components/ScrollToTop";
import data from "../data";

export default function ProductScreen(props) {
  // console.log("in ProductScreen.js new-1");
  console.log(props);

  const dispatch = useDispatch();
  const productId = Number(props.match.params.slag);
  console.log("TAZA KAKA");
  console.log(productId);
  console.log("TAZA KAKA");
  console.log("TAZA KAKA");
  // const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [filetrdArray, setFiletrdArray] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  console.log("this kaka now in productScreen.js");
  console.log(product);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (successReviewCreate) {
      window.alert("Review Submitted Successfully");
      setRating("");
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);

  // useEffect(() => {
  //   let filetrdArray = data.services.filter((el) => {
  //     el._id = productId;
  //     return filetrdArray;
  //   });
  // }, [productId]);
  console.log("TAZA KAKA2");
  console.log(filetrdArray);
  console.log("TAZA KAKA2");

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert("Please enter comment and rating sir");
    }
  };

  const handlingSizeChange = (e) => {
    setSize(e.target.value);
    console.log(size);
  };
  console.log(size);

  const handlingColorChange = (e) => {
    setColor(e.target.value);
    console.log(color);
  };

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <>
      <Helmet>
        <title>Glossy Code</title>
      </Helmet>
      <Container fluid className="paddingRemove">
        <img
          className=" w-100 first-background-For-Contact"
          src="https://as2.ftcdn.net/v2/jpg/03/11/59/79/1000_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg"
          alt="First slide"
        ></img>

        <Container className="glossyCodeName">
          <Row>
            <Col>
              <h1>Glossy Code</h1>
            </Col>
          </Row>
        </Container>

        <Container className="glossyCodeTexts-Contact">
          <Row>
            <Col className="w 40%">
              <h2>Contact Us</h2>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container>
        {/* <Link to="/">Back to result</Link> */}
        <Row>
          {data.services
            .filter((service) => service._id === productId)
            .map((item, index) => (
              <div>
                hi
                {console.log("uuu")}
              </div>
            ))}

          <Col md={6}>
            <img
              className="img-large"
              // src={product.image}
              src={selectedImage || product.image}
              alt={product.name}
            ></img>
          </Col>

          <Col md={6}>
            <ListGroup variant="flush" className="align-items-center">
              <ListGroup.Item>
                <Helmet>
                  <title>{product.name}</title>
                </Helmet>
                <h1>{product.name}</h1>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                ></Rating>
              </ListGroup.Item>

              {/* <ListGroup.Item>Price : ${product.price}</ListGroup.Item> */}

              <ListGroup.Item>
                <Row>
                  <Col>
                    <p>
                      We are an Erbil web design company delivering stunning,
                      functional websites and web-apps that resonate with the
                      people interacting with them – your clients. Our websites
                      and web-apps don't just look good, they perform, they
                      convert. If you are looking to generate enquiries,
                      increase sales or maximise awareness we have the in-house
                      web design and development teams in place to achieve this.
                      Suncode IT Solutions and Consultancy is a dependable Erbil
                      Web Development partner in the area, Iraq who purposefully
                      tailors our services to meet the specific needs of
                      agencies. We know you want a trouble-free development
                      experience and a site that functions exactly as designed.
                      We provide reliable maintenance services that release you
                      from the burden of managing upgrades and handling
                      unplanned client support tasks. Our agency clients handle
                      the digital strategy, creative design and overall project
                      direction. We take care of the development and ongoing
                      support. Smart Solutions can come to the table as your
                      development team or work invisibly to support your brand.
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                Description:
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>${product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        {product.countInStock > 0 ? (
                          <Badge bg="success">In Stock</Badge>
                        ) : (
                          <Badge bg="danger">Unavailable</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Color:</Col>
                      <Col>
                        <select value={color} onChange={handlingColorChange}>
                          <option value="">Select</option>
                          {product.color?.map((anyColor, index) => (
                            <option key={index} value={anyColor}>
                              {anyColor}
                            </option>
                          ))}
                        </select>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Size:</Col>
                      <Col>
                        <select value={size} onChange={handlingSizeChange}>
                          <option value="">Select</option>
                          {product.size?.map((anySize, index) => (
                            <option key={index} value={anySize}>
                              {anySize}
                            </option>
                          ))}
                        </select>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <button
                          onClick={(e) =>
                            dispatch(addToCart(product._id, qty, size, color))
                          }
                          // onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>

        {/* review part kaka*/}
        <div className="my-3">
          <h2 id="reviews">Reviews</h2>
          <div className="mb-3">
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
          </div>
          <ListGroup>
            {product.reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>

                <Rating rating={review.rating} caption=" "></Rating>
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="my-3">
            {userInfo ? (
              <form className="form" onSubmit={submitHandler}>
                <h2>Write a customer review</h2>

                <Form.Group className="mb-3" controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Select
                    arial-label="Rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1">1- Poor</option>
                    <option value="2">2- Fair</option>
                    <option value="3">3- Good</option>
                    <option value="4">4- Very good</option>
                    <option value="5">5- Excelent</option>
                  </Form.Select>
                </Form.Group>

                <FloatingLabel
                  controlId="comment"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </FloatingLabel>

                <div className="mb-3">
                  <Button disabled={loadingReviewCreate} type="submit">
                    Submit
                  </Button>
                  {loadingReviewCreate && <LoadingBox></LoadingBox>}
                </div>
              </form>
            ) : (
              <MessageBox>
                Please{" "}
                <Link to={`/signin?redirect=/product/${product.id}`}>
                  Sign In
                </Link>
                {""}
                to write a review
              </MessageBox>
            )}
          </div>
        </div>
      </Container>

      <Container fluid className="colorback">
        <div>
          <h1>Contact Info</h1>
        </div>
        <Row>
          <Col xs={12} md={8}>
            <div>
              <ul>
                <li>
                  <i class="fa fa-location-arrow colorInfo"></i>
                  No 144, Dar u Asn (Hadid u Khashab) Ave. Shoresh, Erbil, Iraqi
                  Kurdistan
                </li>

                <li>
                  <i class="fa fa-phone colorInfo"></i>+964 750 555 1 999
                </li>
                <li>
                  <i class="fa fa-envelope colorInfo"></i>nfo@suncode.co
                </li>
                <li>
                  <i class="fa fa-envelope colorInfo"></i>www.suncode.co
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={6} md={4}>
            <Row>
              <Col>
                <h1>Follow us on</h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/contactscreen" className="item ">
                  <i className="fa fa-facebook-f coloredIcon"></i>
                </a>
                Facebook
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/aboutusscreen" class="item">
                  <i
                    className="fa fa-instagram coloredIcon"
                    aria-hidden="true"
                  ></i>
                </a>
                Instagram
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/websites/colorful/" className="item">
                  <i className="fa fa-twitter coloredIcon" aria-hidden="true">
                    {" "}
                  </i>
                </a>
                <span>Twitar</span>
              </Col>
            </Row>

            <Row>
              <Col>
                <a href="/websites/colorful/" className="item">
                  <i
                    className="fa fa-linkedin coloredIcon"
                    aria-hidden="true"
                  ></i>
                </a>
                LinkedIn
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <ScrollToTop></ScrollToTop>
    </>
  );
}
