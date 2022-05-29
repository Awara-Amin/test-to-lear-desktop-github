import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import Product from "../components/Service";
import { Link } from "react-router-dom";
import { prices, ratings } from "../utils.js";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function SearchScreen(props) {
  // useParams is a hook from react tout dom
  const {
    name = "all",
    category = "all",
    min = 0,
    max = 0,
    rating = 0,
    order = "newest",
    pageNumber = 1,
  } = useParams();
  console.log(name);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;

  console.log("for checking category of products in the searchScreen.js");
  console.log(categories);

  // useEffect(() => {
  //   dispatch(
  //     listProducts({
  //       pageNumber,
  //       name: name !== "all" ? name : "",
  //       category: category !== "all" ? category : "",
  //       min,
  //       max,
  //       rating,
  //       order,
  //     })
  //   );
  // }, [category, dispatch, name, max, min, rating, order, pageNumber]);

  const getFilterUrl = (filter) => {
    console.log("for checking filter of category in the searchScreen.js");
    console.log(filter);
    console.log("for checking filter.name of category in the searchScreen.js");
    console.log(name);
    console.log("for checking category of category in the searchScreen.js");
    console.log(category);
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;

    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };

  return (
    <div>
      <Helmet>
        <title>Search Products</title>
      </Helmet>

      <Row>
        <Col md={3}>
          <h3>Department</h3>
          <div>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              <ul>
                <li>
                  <Link
                    className={"all" === category ? "active" : ""}
                    to={getFilterUrl({ category: "all" })}
                  >
                    Any
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c}>
                    <Link
                      className={c === category ? "active" : ""}
                      to={getFilterUrl({ category: c })}
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/*  */}
          {/* <h3>Category</h3> */}
          {/* <h3>Ask M.Fuad if enything else is needed here</h3> */}

          <div>
            <h3>Price</h3>
            <ul>
              {prices.map((p) => (
                <li key={p.name}>
                  <Link
                    to={getFilterUrl({ min: p.min, max: p.max })}
                    className={
                      `${p.min}-${p.max}` === `${min}-${max}` ? "active" : ""
                    }
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Avg. Customer Review</h3>
            <ul>
              {ratings.map((r) => (
                <li key={r.name}>
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={`${r.rating}` === `${rating}` ? "active" : ""}
                  >
                    <Rating caption={" & up"} rating={r.rating}></Rating>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        {/*  */}
        <Col md={9}>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <Row className="justify-content-between mb-3">
                {products.length === 0 && (
                  <MessageBox>No Product found kaka</MessageBox>
                )}
                <Col className="row">
                  {loading ? (
                    <LoadingBox></LoadingBox>
                  ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                  ) : (
                    <div>{products.length} Results</div>
                  )}

                  <div>
                    Sort by{" "}
                    <select
                      value={order}
                      onChange={(e) => {
                        props.history.push(
                          getFilterUrl({ order: e.target.value })
                        );
                      }}
                    >
                      <option value="newest">Newest Arrivals</option>
                      <option value="lowest">Proce: Low to High</option>
                      <option value="highest">Price: High to Low</option>
                      <option value="toprated">Avg. Customer Reviews</option>
                    </select>
                  </div>
                </Col>
              </Row>

              {/* <Row>
                {products.map((product) => (
                  <Col sm={6} lg={4} className="mb-3" key={product._id}>
                    <Product product={product}></Product>
                  </Col>
                ))}
              </Row> */}

              <div>
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? "active" : ""}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    <Button
                      className={Number(page) === x + 1 ? "text-bold" : ""}
                      variant="light"
                    >
                      {x + 1}
                    </Button>
                  </Link>
                ))}
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}
