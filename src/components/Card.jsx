import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <section className="card">
        <img src={img} className="card-img" alt="title" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
           {star}{star}{star}{star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
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
