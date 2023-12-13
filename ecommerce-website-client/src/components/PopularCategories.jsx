

const PopularCategories = () => {
    return (
        <div>
            <h3 className="text-center text-4xl text-gray-600">Popular Categories</h3>
           <div className="grid grid-cols-1 md:grid-cols-5 m-16 gap-8">
           <div className="card glass ">
                <figure> <img className="h-24" src="https://i.ibb.co/FBtBqSf/hoodie.jpg" alt="" /></figure>
                <div className="p-4 text-center dark:bg-black">
                    <h2 className="text-3xl dark:text-white">Hoodie</h2>  
                </div>
            </div>
           <div className="card glass">
                <figure> <img className="h-24" src="https://i.ibb.co/R2VNrQ8/watch.jpg" alt="" /></figure>
                <div className="p-4 text-center dark:bg-black">
                    <h2 className="text-3xl dark:text-white">Watch</h2>  
                </div>
            </div>
           <div className="card glass">
                <figure> <img className="h-24" src="https://i.ibb.co/KVZrWQG/gadgets.webp" alt="" /></figure>
                <div className="p-4 text-center dark:bg-black">
                    <h2 className="text-3xl dark:text-white">Gadgets</h2>  
                </div>
            </div>
           <div className="card glass">
                <figure> <img className="h-24" src="https://i.ibb.co/PzC3jkg/shoes.webp" alt="" /></figure>
                <div className="p-4 text-center dark:bg-black">
                    <h2 className="text-3xl dark:text-white">Shoes</h2>  
                </div>
            </div>
           <div className="card glass">
                <figure> <img className="h-24" src="https://i.ibb.co/4p4yQTg/slide-sandal.webp" alt="" /></figure>
                <div className="p-4 text-center dark:bg-black">
                    <h2 className="text-3xl dark:text-white">Slide Sandal</h2>  
                </div>
            </div>
           </div>
        </div>
    );
};

export default PopularCategories;