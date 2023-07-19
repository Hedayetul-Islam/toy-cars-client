import About from "../About/About";
import Banner from "../Banner/Banner";
import BestToys from "../BestToys/BestToys";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <BestToys></BestToys>
        </div>
    );
};

export default Home;