import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
    const products = useLoaderData();
    // console.log(products);
    const [product, setProduct] = useState([]);
    const { name } = useParams();
    console.log(name);
    // console.log(services);

    useEffect(() => {
        const findProduct = products?.filter((product) => product.brand.toLowerCase() == name.toLowerCase())
        setProduct(findProduct);
        // console.log(findProduct);
    }, [name, products]);
    console.log(product);
    return (
        <div>

            <div className="carousel w-full ml-0 mt-0 h-[510px]">
                <div id="item1" className="carousel-item w-full ">
                    <img src="https://i.ibb.co/C6J1Z3v/add1.jpg" className="w-full" />
                    
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/s59Dg8j/add2.jpg" className="w-full" />
                    
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/ZJsDjFr/add3.jpg" className="w-full" />
                   
                </div>
                
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-md">1</a>
                <a href="#item2" className="btn btn-md">2</a>
                <a href="#item3" className="btn btn-md">3</a>
                
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 m-10">
                {
                    product.length > 0 ? (product?.map(pro => <ProductCard
                        key={pro._id}
                        pro={pro}></ProductCard>)) :
                        (
                            <p className="text-5xl  col-span-2 text-center font-semibold text-red-300">Sorry! No Available Products on {name} brand.</p>)
                }
            </div>
        </div>
    );
};

export default Products;