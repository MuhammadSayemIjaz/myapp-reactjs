import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore/lite";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../config/firebase";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [downloadURL, setDownloadURL] = useState("");
  const [states, setStates] = useState({});

  const handleUpload = (e) => {
    let file = e.target.files[0];

    if (!file) return;

    const fileRef = ref(storage, "images/" + file.name);

    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setDownloadURL(downloadURL);
        });
      }
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setStates((s) => ({ ...s, [name]: value }));
  };

  const addDocsInFirestore = async (user) => {
    const collectionName = "Products";
    const docsCollectionRef = collection(firestore, collectionName);
    let { productName, category, price, quantity, description, downloadURL } =
      states;

    let formData = {
      productName,
      category,
      price,
      quantity,
      description,
    };
    formData.imgUrl = downloadURL;
    console.log(formData);
    try {
      const docRef = await addDoc(docsCollectionRef, formData);
      toast.success("User has been added!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Document written with ID: ", user.uid);
    } catch (e) {
      toast.error("Something went wrong.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error adding document: ", e);
    }
  };
  const handleSubmitProduct = (e) => {
    e.preventDefault();
    addDocsInFirestore();
  };

  return (
    <div>
      <div className="container pt-5">
        <div className="mt-5 mx-auto col-lg-5 col-md-8 col-sm-11 border rounded-3 shadow">
          <form className="mx-5 my-5" onSubmit={handleSubmitProduct}>
            <h1 className="text-center mt-3 fw-bolder">Add Products</h1>
            <label htmlFor="Name" className="form-label mt-3 fw-bolder">
              Product Name :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Name ..."
              onChange={handleChange}
              name="productName"
            />
            <label htmlFor="Name" className="form-label mt-3 fw-bolder">
              Category :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              onChange={handleChange}
              name="category"
            />
            <label htmlFor="Name" className="form-label mt-3 fw-bolder">
              Price :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Price"
              onChange={handleChange}
              name="price"
            />
            <label htmlFor="Name" className="form-label mt-3 fw-bolder">
              Quantity :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Quantity"
              onChange={handleChange}
              name="quantity"
            />
            <label htmlFor="Name" className="form-label mt-3 fw-bolder">
              Description : :
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Description ..."
              onChange={handleChange}
              name="description"
            />
            <label htmlFor="Name" className="form-label mt-3 fw-bolder">
              Image :
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              placeholder="Choose Image..."
              onChange={handleUpload}
              name="image"
            />
            <button className="btn btn-dark text-white fw-bolder w-100 mt-5">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
