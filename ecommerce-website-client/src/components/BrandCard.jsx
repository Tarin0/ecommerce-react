import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const { id, name, image } = brand;
    // console.log(brand);
    return (
        <div>
            <div className="card w-96 glass">
                <figure> <img className="h-52 w-full" src={image} alt="" /></figure>
                <div className="p-4 text-center dark:bg-black ">
                    <h2 className="text-3xl dark:text-white">{name}</h2>

                    <div className="card-actions justify-end">
                        <Link to={`/products/${name}`}>
                            <button className="btn bg-gray-400">More!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCard;