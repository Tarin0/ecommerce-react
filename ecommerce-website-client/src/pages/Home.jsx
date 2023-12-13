import { useLoaderData } from "react-router-dom";
import BrandCard from "../components/BrandCard";
import PopularCategories from "../components/PopularCategories";
import NewArrivals from "../components/NewArrivals";


const Home = () => {
    const brands = useLoaderData();
    
    return (
        <div >
            <div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/5cvnFd8/banner2.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-2xl">
                            <h1 className="mb-5 text-5xl font-bold">Get Ready...</h1>
                            <p className="mb-5">Excitement is in the air as we introduce our latest collection of trendsetting fashion and lifestyle products. Dive into a world of fresh arrivals, handpicked to elevate your style. Explore a diverse range of new products that are designed to make a statement and leave you feeling confident and fashionable.</p>
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid m-2 md:m-14 md:grid-cols-3 gap-8">
                {
                    brands.map(brand => <BrandCard key={brands.id} brand={brand}></BrandCard>)
                }
            </div>
            <PopularCategories></PopularCategories>
            <NewArrivals></NewArrivals>
        </div>
    );
};

export default Home;