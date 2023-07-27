
const BestCar = () => {
    return (
        <div>
            <h3 className="text-center font-bold text-6xl mt-8">Our Best Car</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BestCar;