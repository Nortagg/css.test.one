import "./card.component.styles.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Header from "../Header/header.component";
export default function Card() {
  return (
    <div className="white-wrapper">
      <Header />
      <div className="all-wrapp">
        <div className="black-card">
          <div>
            <div className="more-offers">MORE OFFERS</div>
            <h1 className="title-thereis">
              There is <br />
              something else <br />
              for you
            </h1>
          </div>
          <div className="white-shop-bar">
            <div className="shop-all-products">
              <p className="shop-text">SHOP</p>
              <p className="all-products-text"> All products</p>
            </div>
            <div className="shopping-cart-icon">
              <HiOutlineShoppingCart />
            </div>
          </div>
        </div>
        <div className="right-wrapper-gray-purple-green">
          <div className="gray-card">
            <div className="gray-card-top-part">
              <p className="worldof-text">WORLD OF HEARING TECHNOLOGY</p>
              <div className="gray-card-icon">
                <HiOutlineArrowUpRight />
              </div>
            </div>
            <h2 className="viewour-text">View our blog</h2>
          </div>
          <div className="wrapper-purple-green">
            <div className="purple-card">
              <div className="purple-card-top-part">
                <p className="discoverour-text">
                  DISCOVER <br /> OUR HISTORY
                </p>
                <div className="purple-card-icon">
                  <HiOutlineArrowUpRight />
                </div>
              </div>
              <h2 className="aboutus-text">About us</h2>
            </div>
            <div className="green-card">
              <div className="green-card-top-part">
                <p className="havesome-text">
                  HAVE SOME <br /> QUESTIONS?
                </p>
                <div className="green-card-icon">
                  <HiOutlineArrowUpRight />
                </div>
              </div>
              <h2 className="contactus-text">Contact us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
