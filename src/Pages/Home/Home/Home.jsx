import About from "../About/About";
import Banner from "../Banner/Banner";
import BestToys from "../BestToys/BestToys";
import Gallery from "../Gallery/Gallery";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Baby Shop | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <BestToys></BestToys>
        </div>
    );
};

export default Home;