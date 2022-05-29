import React from "react";

export default function Topcarusel() {
  return (
    <container>
      {/* <h1>CSS-only Carousel</h1>

                <p>This carousel is created with HTML and CSS only.</p> */}

      <section className="carousel2 carouselHomeScreen" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li
            id="carousel__slide1"
            class="image"
            tabindex="0"
            className="carousel__slide"
          >
            <div className="carousel__snapper">
              <a href="#carousel__slide2" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide1" className="carousel__next">
                Go to next slide
              </a>
            </div>
            <div>
              <button className="btn">press on Here</button>
            </div>
          </li>
          <li id="carousel__slide2" tabindex="0" className="carousel__slide">
            <div className="carousel__snapper"></div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide2" className="carousel__next">
              Go to next slide
            </a>
          </li>

          {/* <li id="carousel__slide3"
                        tabindex="0"
                        className="carousel__slide">
                    <div className="carousel__snapper"></div>
                    <a href="#carousel__slide3"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide1"
                        className="carousel__next">Go to next slide</a>
                    </li> */}
          {/* <li id="carousel__slide4"
                        tabindex="0"
                        className="carousel__slide">
                    <div className="carousel__snapper"></div>
                    <a href="#carousel__slide3"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide1"
                        className="carousel__next">Go to first slide</a>
                    </li> */}
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            {/* <li className="carousel__navigation-item">
                        <a href="#carousel__slide3"
                        className="carousel__navigation-button">Go to slide 3</a>
                    </li> */}
            {/* <li className="carousel__navigation-item">
                        <a href="#carousel__slide4"
                        className="carousel__navigation-button">Go to slide 4</a>
                    </li> */}
          </ol>
        </aside>
      </section>
    </container>
  );
}

// ///////////// SeearchScreen.js
return (
  <div>
    <Helmet>
      <title>Search Products</title>
    </Helmet>
    <Row>
      <Col md={3}>
        <h3>Department</h3>
        <div>
          <ul>
            <li>
              <Link
                className={'all' === category ? 'text-bold' : ''}
                to={getFilterUrl({ category: 'all' })}
              >
                Any
              </Link>
            </li>
            {categories.map((c) => (
              <li key={c}>
                <Link
                  className={c === category ? 'text-bold' : ''}
                  to={getFilterUrl({ category: c })}
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Price</h3>
          <ul>
            <li>
              <Link
                className={'all' === price ? 'text-bold' : ''}
                to={getFilterUrl({ price: 'all' })}
              >
                Any
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  to={getFilterUrl({ price: p.value })}
                  className={p.value === price ? 'text-bold' : ''}
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
                  className={`${r.rating}` === `${rating}` ? 'text-bold' : ''}
                >
                  <Rating caption={' & up'} rating={r.rating}></Rating>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={getFilterUrl({ rating: 'all' })}
                className={rating === 'all' ? 'text-bold' : ''}
              >
                <Rating caption={' & up'} rating={0}></Rating>
              </Link>
            </li>
          </ul>
        </div>
      </Col>







      <Col md={9}>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Row className="justify-content-between mb-3">
              <Col md={6}>
                <div>
                  {countProducts === 0 ? 'No' : countProducts} Results
                  {query !== 'all' && ' : ' + query}
                  {category !== 'all' && ' : ' + category}
                  {price !== 'all' && ' : Price ' + price}
                  {rating !== 'all' && ' : Rating ' + rating + ' & up'}
                  {query !== 'all' ||
                  category !== 'all' ||
                  rating !== 'all' ||
                  price !== 'all' ? (
                    <Button
                      variant="light"
                      onClick={() => navigate('/search')}
                    >
                      <i className="fa fa-times-circle"></i>
                    </Button>
                  ) : null}
                </div>
              </Col>
              <Col className="text-end">
                Sort by{' '}
                <select
                  value={order}
                  onChange={(e) => {
                    navigate(getFilterUrl({ order: e.target.value }));
                  }}
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="lowest">Price: Low to High</option>
                  <option value="highest">Price: High to Low</option>
                  <option value="toprated">Avg. Customer Reviews</option>
                </select>
              </Col>
            </Row>


            
            {products.length === 0 && (
              <MessageBox>No Product Found</MessageBox>
            )}

            <Row>
              {products.map((product) => (
                <Col sm={6} lg={4} className="mb-3" key={product._id}>
                  <Product product={product}></Product>
                </Col>
              ))}
            </Row>

            <div>
              {[...Array(pages).keys()].map((x) => (
                <LinkContainer
                  key={x + 1}
                  className="mx-1"
                  to={getFilterUrl({ page: x + 1 })}
                >
                  <Button
                    className={Number(page) === x + 1 ? 'text-bold' : ''}
                    variant="light"
                  >
                    {x + 1}
                  </Button>
                </LinkContainer>
              ))}
            </div>
          </>
        )}
      </Col>
    </Row>
  </div>
);
}