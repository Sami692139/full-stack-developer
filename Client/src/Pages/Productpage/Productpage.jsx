import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Productpage() {
  const [product, setProduct] = useState(null); // State to hold a single product
  const { pid: productID } = useParams(); // Get product URL from the URL parameters

  useEffect(() => {
    fetch("http://localhost:3305/iphones")
      .then((res) => res.json())
      .then((data) => {
        const singleProduct = data.find(
          (product) => product.product_id == (productID)
        );
        console.log(singleProduct);
        setProduct(singleProduct);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productID]);
  console.log(product);

  if (!product) {
    return <div>Loading...</div>; // Display until product is loaded
  }

  const {
    product_name: title,
    product_img: img,
    product_brief_description: Brief,
    starting_price: StartPrice,
    price_range: PriceRange,
    product_description: details,
  } = product;

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="bottom-100">
            <div className="row justify-content-center text-center bottom-50">
              <div className="col-12">
                <div className="title-wraper bold">{title}</div>
                <div className="brief-description">{Brief}</div>
              </div>
            </div>

            <div className="row justify-content-center text-center product-holder h-100">
              <div className="col-sm-12 col-md-6 my-auto">
                <div className="starting-price">{`Starting at ${StartPrice}`}</div>
                <div className="monthly-price">{PriceRange}</div>
                <div className="product-details">{details}</div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="product-image">
                  <img src={img} alt={title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Productpage;
