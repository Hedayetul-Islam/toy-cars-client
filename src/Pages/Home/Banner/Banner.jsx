
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full flex flex-wrap">
                <div id="item1" className="carousel-item lg:w-full md:w-full sm:w-1/2">
                    <img src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    <div className="absolute rounded-xl flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-2/3'>
                            <h2 className='text-7xl font-bold'>Attractive Baby Toy Cars</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quas voluptate reiciendis eligendi exercitationem veniam.</p>
                            <div>
                                <button className="btn btn-primary">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;