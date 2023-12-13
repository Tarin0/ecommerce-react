import { Link } from "react-router-dom";


const ProductCard = ({ pro }) => {
    const {_id,name,brand,img,category,price,rating,description} = pro;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className=" md:h-52 md:w-48" src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">{name}</h2>
                <div className="grid md:grid-cols-2">
                <h2> <span className="font-bold">Brand : </span> {brand}</h2>
                <h2> <span className="font-bold">Category : </span> {category}</h2>
                <h2> <span className="font-bold">Price : </span> $ {price}</h2>
                <h2> <span className="font-bold">Rating : </span> {rating}</h2>
                </div>
                <div className="card-actions mt-2">
                    <Link to={`/productDetails/${_id}`}>
                    <button className="btn btn-primary mr-5 ">Details</button>
                    
                    </Link>
                    <Link to={`/updateProduct/${_id}`}>
                    <button className="btn btn-primary">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;