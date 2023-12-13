import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";


const ProductDetails = () => {

    const product = useLoaderData();
    const { name, brand, img, category, price, rating, description } = product
    const { user } = useContext(AuthContext);
    const {email} =user;

    console.log(user);
    console.log(email);
    const handleAddCart = () => {
        
        const newCart = {email, name, brand, img, category, price};
        console.log(newCart);

        fetch('https://ecommerce-server-nkd1t61ii-tarin0.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Item Added On Your Cart',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <div className="m-10 relative flex mx-auto flex-col text-gray-700 bg-blue-gray-50 shadow-md w-3/6 rounded-xl bg-clip-border">
                <div className="relative overflow-hidden text-gray-700 bg-blue-gray-50 md:h-96  bg-clip-border">
                    <img
                        src={img}
                        className="object-cover w-full md:h-full"
                    />
                </div>
                <div className="p-2 md:p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-blue-gray-900">
                            {name}
                        </p>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            {rating}
                        </p>

                    </div>
                    <p className="pb-2 block font-semibold font-sans text-base antialiased  leading-relaxed text-blue-gray-900">
                        ${price}
                    </p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <button
                        onClick={handleAddCart}
                        className="block w-full select-none rounded-lg bg-blue-gray-500 py-1 md:py-3 md:px-6 text-center align-middle font-sans md:text-xl font-bold uppercase text-blue-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;