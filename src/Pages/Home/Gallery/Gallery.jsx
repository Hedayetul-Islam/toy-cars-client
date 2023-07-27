
const Gallery = () => {
    return (
        <div className="bg-slate-200">
            <div className="text-center pt-14">
                <h2 className="uppercase text-6xl font-bold ">Gallery of toy cars</h2>
                <p className="p-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis atque quasi doloremque? In laboriosam aspernatur esse, obcaecati alias suscipit quod culpa ipsam est nulla explicabo?</p>
            </div>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/2527931/pexels-photo-2527931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/102977/pexels-photo-102977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/1648349/pexels-photo-1648349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;