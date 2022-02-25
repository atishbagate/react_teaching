import React from "react";
function Home(props) {
  console.log("props inside Home folder ",props);
  return (
    <>
      <div>
        <div className="add-to-cart">
            <img className="cart"  src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728552_960_720.jpg" alt="Cart"/>
        </div>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img
              src="https://media.carphonewarehouse.com/is/image/cpw2/iphone-11BLACK?$xl-retina$"
              alt="iphone"
            />
          </div>
          <div className="text-wrapper item">
            <span>I-Phone 11</span> <br />
            <span>Price:20,000</span>
          </div>
          <div className="btn-wrapper item">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
