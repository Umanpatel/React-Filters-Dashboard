import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
const Card = () => {
  return (
    <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" className="card-img" alt="Shoe" />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="rating-star"/> 
            <AiFillStar className="rating-star"/> 
            <AiFillStar className="rating-star"/> 
            <AiFillStar className="rating-star"/>
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
            <IoBagHandleSharp className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Card
