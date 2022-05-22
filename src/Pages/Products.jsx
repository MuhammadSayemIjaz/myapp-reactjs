import { collection, getDoc } from "firebase/firestore/lite";
import React, { useEffect, useState } from "react";
import { firestore } from "../config/firebase";

const Products = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    let array = [];

    const querySnapshorts = await getDoc(collection(firestore, "products"));
    querySnapshorts.forEach((element) => {
      array.push(element.data());
    });
    setFetchData(array);
  };
  return (
    <div className="pb-5 mb-4">
      {fetchData.map((item, index) => {
        return (
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 animate__backInLeft">
            <div class="card rounded card-section border-0">
              <div class="card-body p-4">
                <img
                  src={item.src}
                  alt=""
                  class="img-fluid  d-block mx-auto mb-3 img-zoom"
                />
                <h5>{item.name}</h5>
                <hr class="my-0" />
                <div class="quantity-section card-body d-flex flex-column justify-content-between">
                  <div class="top-section">
                    <span class="">Quantity : {item.quantity}</span>
                    <span class="mx-3">Price : ${item.price}</span>
                  </div>
                  <div class="next-section">
                    <span>Category : {item.category}</span>
                  </div>
                </div>
                <hr class="my-0" />
                <div class="quantity-section card-body d-flex flex-column justify-content-between">
                  <span>
                    Discription : <br /> {item.description}
                  </span>
                </div>
                <div class="add-to-cart-btn card-body d-flex justify-content-center">
                  <button class="btn add-cart-btn px-4">
                  <i className="fa-solid fa-cart-shopping mx-2"></i>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
