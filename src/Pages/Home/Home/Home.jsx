import About from "../About/About";
import Banner from "../Banner/Banner";
import BestCar from "../BestCar/BestCar";
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
            <BestCar></BestCar>
        </div>
    );
};

export default Home;