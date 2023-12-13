import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const MyCart = () => {

    const loadedCart = useLoaderData();
    const { user } = useContext(AuthContext);
    const { email } = user;
    const findCart = loadedCart ?.filter(pro => pro.email === email)
    const [userCarts,setUserCarts] = useState(findCart);
    console.log("1",loadedCart);
    console.log("2",userCarts);



    const handleDelete = id => {

        fetch(`https://ecommerce-server-nkd1t61ii-tarin0.vercel.app/cart/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Deleted Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    const remainingCarts = userCarts.filter(cart => cart._id !== id);
                    console.log("after delete",remainingCarts);
                    setUserCarts(remainingCarts);
                    
                }
            })
    }
    return (
        <div >
            <p className="text-2xl md:text-4xl text-center font-semibold text-blue-gray-500 md:p-5">My Selected Cart</p>

            <div className="m-0 w-24 md:w-full md:m-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand Name</th>
                            <th>Category </th>
                            <th>Price </th>
                            <th>Action </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            userCarts.map(pro => <tr key={pro._id}>
                                <td>
                                    <div className="md:flex items-center md:space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pro.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{pro.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {pro.brand}

                                </td>
                                <td>{pro.category}</td>
                                <td>
                                    ${pro.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(pro._id)} className="btn btn-sm md:btn-md">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default MyCart;