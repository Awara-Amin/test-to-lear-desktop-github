import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createCategory,
  deleteCategory,
  listCategories,
} from "../actions/categoryActions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {
  CATEGORY_CREATE_RESET,
  CATEGORY_DELETE_RESET,
} from "../constants/categoryConstants";

export default function CategoryListScreen(props) {
  const { pageNumber = 1 } = useParams();
  const sellerMode = props.match.path.indexOf("/seller") >= 0;

  const categoryList = useSelector((state) => state.categoryList);

  const { loading, error, categories, page, pages } = categoryList;

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    category: createdCategory,
  } = categoryCreate;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = categoryDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: CATEGORY_CREATE_RESET });
      props.history.push(`/category/${createdCategory._id}/edit`);
      // props.history.push(`/category/${category._id}/edit`)
    }
    if (successDelete) {
      dispatch({ type: CATEGORY_DELETE_RESET });
    }
    dispatch(
      listCategories({ seller: sellerMode ? userInfo._id : "", pageNumber })
      // listCategories()
    );
  }, [
    createdCategory,
    dispatch,
    props.history,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
  ]);

  const deleteHandler = (category) => {
    if (window.confirm("Are you sure you wonna delete this mate?")) {
      // todo: dispatch delete action
      dispatch(deleteCategory(category._id));
    }
  };
  const createHandler = () => {
    dispatch(createCategory());
  };

  return (
    <div>
      <div className="row">
        <h1>Categories</h1>
        <button type="button" className="promary" onClick={createHandler}>
          Create Category
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
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>IMAGE</th>
                {/* <th>CATEGORY</th> */}
                {/* <th>BRAND</th> */}
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{category.name}</td>
                  <td>{category.price}</td>
                  <td>{category.image}</td>
                  {/* <td>{category.category}</td> */}
                  {/* <td>{category.brand}</td> */}
                  <td>
                    <button
                      type="button"
                      className="small"
                      onClick={() =>
                        props.history.push(`/category/${category._id}/edit`)
                      }
                    >
                      Edite
                    </button>
                    <button
                      type="button"
                      className="small"
                      onClick={() => deleteHandler(category)}
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
                to={`/categorylist/pageNumber/${x + 1}`}
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
