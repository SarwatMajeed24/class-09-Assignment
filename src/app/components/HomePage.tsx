import Image from "next/image";

export default function HomePage() {
    return (
        <div className="min-h-screen p-4 md:p-8 lg:p-12">
            <div className="flex flex-col md:flex-row">
                <h1 className="text-center text-lg md:text-3xl lg:text-5xl font-extrabold mx-2 md:mx-6 lg:mx-12 mt-4 md:mt-6 lg:mt-8">
                    Women Black Bomber Genuine Sheepskin Sherpa Shearling Faux Fur Lined Winter Warm Fashion Chic Slim Fit Leather Jacket
                </h1>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full md:w-5/6 mx-auto mt-6 md:mt-12 space-y-4 lg:space-y-0 lg:space-x-8">
                {/* Container for text and button */}
                <div className="flex flex-col items-center text-center space-y-4 px-4 md:px-8 lg:px-12">
                    <p className="text-sm md:text-base lg:text-2xl leading-relaxed">
                        Elevate your winter wardrobe with our Womens Black Bomber Genuine Sheepskin Leather Jacket. Crafted from premium sheepskin leather, this jacket ensures long-lasting durability and a luxurious look. The Blue Sherpa shearling faux fur lining provides cozy warmth, making it perfect for the cold winter months. The stylish lapel collar adds a touch of sophistication to the jackets design. The asymmetric YKK zip closure not only enhances the overall aesthetics but also adds a trendy and edgy vibe to your outfit. With its multiple pockets, this jacket offers ample space to store your essentials, ensuring convenience and practicality. Whether you are heading out for a casual outing or a night on the town, this slim fit leather jacket will keep you fashionably warm and chic.
                        <br />
                        Price Range: $169.99 - $199.99
                    </p>
                    <button className="bg-blue-600 px-6 md:px-12 py-3 md:py-4 text-sm md:text-lg lg:text-2xl text-white rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
                        Order Now
                    </button>
                </div>
                <Image
                    src="/images/mainproduct.jpeg"
                    alt="main image"
                    width={500}
                    height={500}
                    className="w-full md:w-3/4 lg:w-1/2 max-w-full h-auto rounded-lg"
                />
            </div>
        </div>
    );
}
