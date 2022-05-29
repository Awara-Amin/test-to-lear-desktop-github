import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createCoupon,
  deleteCoupon,
  listCoupons,
} from "../actions/couponActions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  COUPON_CREATE_RESET,
  COUPON_DELETE_RESET,
} from "../constants/couponConstants";

export default function CouponListScreen(props) {
  const { pageNumber = 1 } = useParams();
  const sellerMode = props.match.path.indexOf("/seller") >= 0;

  const couponList = useSelector((state) => state.couponList);

  const { loading, error, coupons, page, pages } = couponList;

  const couponCreate = useSelector((state) => state.couponCreate);

  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    coupon: createdCoupon,
  } = couponCreate;

  console.log("awara for coupon");
  console.log(couponCreate);
  // console.log(createdCoupon._id);

  const couponDelete = useSelector((state) => state.couponDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = couponDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: COUPON_CREATE_RESET });
      console.log("what is this kaka");
      console.log(createdCoupon._id);
      props.history.push(`/coupon/${createdCoupon._id}/edit`);
      // props.history.push(`/coupon/${coupon._id}/edit`)
    }
    if (successDelete) {
      dispatch({ type: COUPON_DELETE_RESET });
    }
    dispatch(
      listCoupons({ seller: sellerMode ? userInfo._id : "", pageNumber })
      // listCategories()
    );
  }, [
    createdCoupon,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (coupon) => {
    if (window.confirm("Are you sure you wonna delete this mate?")) {
      // todo: dispatch delete action
      dispatch(deleteCoupon(coupon._id));
    }
  };
  const createHandler = () => {
    dispatch(createCoupon());
  };

  return (
    // <div>
    //   <h1>test coupon kaka</h1>
    // </div>
    <div>
      <div className="row">
        <h1>Coupons</h1>
        <button type="button" className="promary" onClick={createHandler}>
          Create Coupon
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}

      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>NAME</th>
                <th>Expiry</th>
                <th>DISCOUNT</th>
                {/* <th>CATEGORY</th> */}
                {/* <th>BRAND</th> */}
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon._id}>
                  {/* <td>{category._id}</td> */}
                  <td>{coupon.name}</td>
                  <td>{coupon.expiry.substring(0, 10)}</td>
                  <td>%{coupon.discount}</td>
                  {/* <td>{category.category}</td> */}
                  {/* <td>{category.brand}</td> */}
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/coupon/${coupon._id}/edit`)
                      }
                    >
                      Edite
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(coupon)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="row center pagination">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === page ? "active" : ""}
                key={x + 1}
                to={`/couponlist/pageNumber/${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
