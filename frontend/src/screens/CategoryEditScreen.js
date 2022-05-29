import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Axios from "axios";
import { detailsCategory, updateCategory } from "../actions/categoryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { CATEGORY_UPDATE_RESET } from "../constants/categoryConstants";
// import { LITERAL_TYPES } from "../../../../../../../../Library/Caches/typescript/4.3/node_modules/@babel/types/lib/index";

export default function CategoryEditScreen(props) {
  // getting the categoryId from the URL
  const categoryId = props.match.params.id;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const categoryDetails = useSelector((state) => state.categoryDetails);
  const { loading, error, category } = categoryDetails;

  console.log("esta kaka");
  console.log(category);

  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = categoryUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      // dispatch({ type: CATEGORY_UPDATE_RESET });
      props.history.push("/categorylist");
    }

    // if category didnt exist
    if (!category || category._id !== categoryId || successUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET });
      dispatch(detailsCategory(categoryId));
    } else {
      setName(category.name);
      setImage(category.image);
      setDescription(category.description);
    }
    // so when we have change in any of these, the useEffect function runs
  }, [category, dispatch, categoryId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // todo: dispatch update product
    dispatch(
      updateCategory({
        _id: categoryId,
        name,
        image,
        description,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    // setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      setImage(data);
    } catch (error) {
      setErrorUpload(error.message);
      //   setLoadingUpload(false);
    }
  };

  // UI part
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Category {categoryId}</h1>
          <h1>test kaka{categoryId}</h1>
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
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>

            <div>
              <label htmlFor="imagefile">Upload Image </label>
              <input
                type="file"
                id="imagefile"
                label="Upload Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

////lera
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import {
//   addToCart,
//   addToFavorite,
//   removeFromFavorite,
// } from '../actions/cartActions';
// import Rating from './Rating';
// import Tooltip from 'react-bootstrap/Tooltip';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Preview from '@mui/icons-material/Preview';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
// import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

// export default function Product(props) {
//   const { product } = props;
//   const renderTooltipv = <Tooltip>View Product</Tooltip>;
//   const renderTooltipr = <Tooltip>Remove from Wishlist</Tooltip>;
//   const renderTooltipf = <Tooltip>Add to Wishlist</Tooltip>;
//   const renderTooltipc = <Tooltip>Add to Cart</Tooltip>;

//   const favorite = useSelector((state) => state.favorite);
//   const { favoriteItems } = favorite;

//   const dispatch = useDispatch();

//   const addToFavoriteHandler = () => {
//     if (favoriteItems.product) {

//       dispatch(removeFromFavorite(product._id));
//     } else {
//       dispatch(addToFavorite(product._id));
//     }
//     console.log(favoriteItems.product);
//   };

//   return (
//     <Card
//       key={product._id}
//       className="container box d-flex w-100 col-md-3 col-sm-4"
//     >
//       <div className="card-img-top">
//         <img src={product.image} className="card-img-top" alt={product.name} />

//         <ul className="icon">
//           <OverlayTrigger placement="left" overlay={renderTooltipv}>
//             <li className="preview-color">
//               <Link
//                 className="preview-color-link"
//                 to={`/product/${product._id}`}
//               >
//                 <Preview />
//               </Link>
//             </li>
//           </OverlayTrigger>
//           <li className="preview-color">
//             {favoriteItems? (
//               <OverlayTrigger placement="left" overlay={renderTooltipr}>
//                 <Favorite onClick={() => addToFavoriteHandler(product._id)} />
//               </OverlayTrigger>
//             ) : (
//               <OverlayTrigger placement="left" overlay={renderTooltipf}>
//                 <FavoriteBorderIcon
//                   onClick={() => addToFavoriteHandler(product._id)}
//                 />
//               </OverlayTrigger>
//             )}
//           </li>
//           <OverlayTrigger placement="left" overlay={renderTooltipc}>
//             <li className="preview-color">
//               {product.countInStock === 0 ? (
//                 <AddShoppingCart
//                   onClick={(e) => dispatch(addToCart(product._id, 1))}
//                   disabled
//                 />
//               ) : (
//                 <AddShoppingCart
//                   onClick={(e) => dispatch(addToCart(product._id, 1))}
//                 />
//               )}
//             </li>
//           </OverlayTrigger>
//         </ul>
//       </div>
//       <Card.Body className="center">
//         <Link className="text-color" to={`/product/${product._id}`}>
//           <div>{product.name}</div>
//         </Link>
//         <Rating
//           rating={product.rating}
//           numReviews={product.numReviews}
//         ></Rating>
//         <Card.Text>
//           <div className="price-color">${product.price}</div>
//           <div>
//             <Link to={`/seller/${product.seller._id}`}>
//               {product.seller.seller.name}
//             </Link>
//           </div>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }
