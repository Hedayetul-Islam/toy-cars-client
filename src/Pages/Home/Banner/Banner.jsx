
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://images.pexels.com/photos/35964/ferrari-red-auto-sports-car.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://images.pexels.com/photos/4934421/pexels-photo-4934421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;