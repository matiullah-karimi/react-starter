import TrendingProducts from "../components/TrendingProducts";

const Home = () => (
    <div className="container flex flex-col">
        <div className="flex">
            <div className="flex flex-col justify-center items-start flex-1 pr-64">
                <h1 className="text-6xl text-gray-800 font-bold tracking-tight">Summer styles are finally here</h1>
                <span className="text-lg text-gray-500 my-4">This year, our new summer collection will shelter you from the harsh elements
                    of a world that doesn't care if you live or die.
                </span>
                <button className="inline-block py-3 px-6 bg-gray-700 hover:bg-gray-800 text-white text-center rounded-md text-md font-bold">Shop Collection</button>
            </div>

            <div className="flex-1">
                <img src="/banner.jpg"/>
            </div>
        </div>

        <div>
            <TrendingProducts />
        </div>
    </div>
);

export default Home;