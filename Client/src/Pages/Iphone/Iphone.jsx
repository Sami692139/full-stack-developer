import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [products, setProducts] = useState([]); // Initialize products state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch("http://localhost:3305/iphones")
      .then((res) => {
        // Check if the response is ok
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data); // Directly set the products
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        setError(error.message); // Set error message
        setLoading(false); // Update loading state
      });
  }, []);

  console.log(products);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  let order = 1; // Initialize order variable

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product) => {//"?" Optinal chainig 
            const {
              product_url,
              product_name,
              product_img,
              product_brief_description,
              starting_price,
              price_range,
            } = product;

            const productPage = "/iphone/" + product_url;

            // Determine order1 and order2 based on the current order
            let order1 = 1;
            let order2 = 2;

            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--; // Decrement order
            } else {
              order++; // Increment order
            }

            return (
              <div
                key={product_url}
                className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product_name}</div>
                  <div className="product-brief">
                    {product_brief_description}
                  </div>
                  <div className="starting-price">{`Starting at ${starting_price}`}</div>
                  <div className="monthly-price">{price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`${product.product_id}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={product_img} alt={product_name} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
