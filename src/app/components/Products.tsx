import Image from "next/image";

const Products = () => {
    return (
        <div className="px-4 md:px-8 lg:px-12">
            <h1 className="text-center font-bold text-blue-500 text-2xl md:text-4xl lg:text-5xl mt-12 mb-8">Description</h1>
            <p className="text-sm md:text-base lg:text-center lg:text-2xl leading-relaxed mx-4 md:mx-12 lg:mx-24">
                Premium Sheepskin Leather: Crafted From Genuine Sheepskin Leather, This Jacket Exudes Quality And Durability.<br />
                Luxurious Sherpa Shearling Lining: The Blue Sherpa Shearling Faux Fur Lining Provides Warmth And A Touch Of Luxury.<br />
                Stylish Lapel Collar: The Lapel Collar Adds A Chic And Sophisticated Element To The Overall Design.<br />
                Asymmetric Zip Closure: The Asymmetric YKK Zip Closure Adds An Edgy And Fashionable Touch To The Jacket.<br />
                Ample Space Pockets: This Jacket Features Multiple Pockets That Offer Ample Storage Space For Your Essentials While On The Go.
            </p>
            <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center mt-10 gap-6">
                <div className="w-full md:w-full lg:w-1/3 p-4">
                    <Image
                        src="/images/product2.jpeg"
                        alt="image2"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full md:w-full lg:w-1/3 p-4">
                    <Image
                        src="/images/product3.jpeg"
                        alt="image3"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full md:w-full lg:w-1/3 p-4">
                    <Image
                        src="/images/product4.jpeg"
                        alt="image4"
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center mt-8">
                <button className="bg-blue-600 px-6 md:px-12 py-3 md:py-4 mb-4 text-sm md:text-lg lg:text-2xl text-white rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default Products;


