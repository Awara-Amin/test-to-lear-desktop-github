import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Axios from "axios";
import { detailsProduct, updateProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
// bootstrap
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import { Helmet } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      //  dispatch({type: PRODUCT_UPDATE_RESET});
      props.history.push("/productlist");
    }

    // if (!product.name){
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setPrice(product.discount);
      setImage(product.image);
      setImages(product.images);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    // todo: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        discount,
        image,
        images,
        category,
        brand,
        size,
        color,
        countInStock,
        description,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const uploadFileHandler = async (e, forImages) => {
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

      //   images
      if (forImages) {
        setImages([...images, data]);
      } else {
        setImage(data);
        // setLoadingUpload(false);
      }
    } catch (error) {
      setErrorUpload(error.message);
      //   setLoadingUpload(false);
    }
  };

  const deleteFileHandler = async (fileName) => {
    setImages(images.filter((x) => x !== fileName));
    console.log("hi");
  };

  // UI part
  return (
    <Container className="small-container">
      <Helmet>
        <title>Edit Product ${productId}</title>
      </Helmet>
      <h1>Edit Product {productId}</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="discount">
            <Form.Label>Discount</Form.Label>
            <Form.Control
              value={discount}
              placeholder="Enter discount if it exists"
              onChange={(e) => setDiscount(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image File</Form.Label>
            <Form.Control
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </Form.Group>

          {/* <div>
              <label htmlFor="price">Discount</label>
              <input
                id="discount"
                type="text"
                placeholder="Enter Discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              ></input>
            </div> */}

          {/* <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div> */}
          <Form.Group className="mb-3" controlId="imagefile">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" onChange={uploadFileHandler} />
            {loadingUpload && <LoadingBox></LoadingBox>}
          </Form.Group>

          {/* <div>
              <label htmlFor="imagefile">Upload Image </label>
              <input
                type="file"
                id="imagefile"
                label="Upload Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
            </div> */}

          {/* additional image */}
          <Form.Group className="mb-3" controlId="additionalImage">
            <Form.Label>Additional Images</Form.Label>
            {images.length === 0 && <MessageBox>No image</MessageBox>}
            <ListGroup variant="flush">
              {images.map((x) => (
                <ListGroup.Item key={x}>
                  {x}
                  <Button variant="light" onClick={() => deleteFileHandler(x)}>
                    <i className="fa fa-times-circle"></i>
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="additionalImageFile">
            <Form.Label>Upload Aditional Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => uploadFileHandler(e, true)}
            />
            {loadingUpload && <LoadingBox></LoadingBox>}
          </Form.Group>

          {/* <div>
              <label htmlFor="additionalImage">Additional Images</label>
              <textarea id="additionalImage" value={images}></textarea>
              {images.length === 0 && <MessageBox>No image kako</MessageBox>}
              {images.map((x, index) => (
                <li key={index}>
                  {x}
                  <button onClick={() => deleteFileHandler(x)}>
                    <i className="fa fa-times-circle"></i>
                  </button>
                </li>
              ))}
            </div> */}

          {/* another additinal image */}
          {/* <div>
              <label htmlFor="additionalImageFile">
                Upload Additional Image
              </label>
              <input
                type="file"
                id="additionalImageFile"
                label="Upload additional Image"
                onChange={(e) => uploadFileHandler(e, true)}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
            </div> */}
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="brand">
            <Form.Label>Brand</Form.Label>
            <Form.Control
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </Form.Group>
          {/* <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div> */}

          {/* <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div> */}

          <Form.Group className="mb-3" controlId="size">
            <Form.Label>Size</Form.Label>
            <Form.Control
              value={size}
              placeholder="Enter Size: Small, Medium, Large"
              onChange={(e) => setSize(e.target.value.split(","))}
              required
            />
          </Form.Group>

          {/* <div>
              <label htmlFor="size">Size</label>
              <input
                id="size"
                name="size"
                type="text"
                placeholder="Enter Size: Small, Medium, Large"
                value={size}
                onChange={(e) => setSize(e.target.value.split(","))}
              ></input>
            </div> */}

          <Form.Group className="mb-3" controlId="countInStock">
            <Form.Label>Count In Stock</Form.Label>
            <Form.Control
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          {/* <div>
            <label htmlFor="color">Color</label>
            <input
              id="color"
              name="color"
              type="text"
              placeholder="Enter Color: Such as: Red, Green, White, or so"
              value={color}
              onChange={(e) => setColor(e.target.value.split(","))}
            ></input>
          </div> */}

          <Form.Group className="mb-3" controlId="color">
            <Form.Label>Color</Form.Label>
            <Form.Control
              value={color}
              placeholder="Enter a color: Red, Green, White, or so"
              onChange={(e) => setColor(e.target.value.split(","))}
              required
            />
          </Form.Group>

          {/* <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div> */}

          {/* <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div> */}
          <div className="mb-3">
            <Button disabled={loadingUpdate} type="submit">
              Update
            </Button>
            {loadingUpdate && <LoadingBox></LoadingBox>}
          </div>

          {/* <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div> */}
        </Form>
      )}
    </Container>
  );
}
