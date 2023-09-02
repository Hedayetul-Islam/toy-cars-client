
const BestCar = () => {
    return (
        <div className="mb-12">
            <h3 className="text-center font-bold text-5xl mt-8 mb-4">Best Cars</h3>
            <p className="text-center mb-6">Toy cars are miniature wonders that capture the hearts and imaginations of both young and old. <br /> They hold a timeless appeal, reminding us of the joy and fascination we experienced during our own childhoods.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/249343/pexels-photo-249343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Audi Q3</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/574519/pexels-photo-574519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Audi A1</h2>
                    </div>
                </div>
                <div className="card card-compact w-full bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-photo/white-luxury-sport-sedan-car-standing-race-trace-front-side-view_114579-1161.jpg?w=996&t=st=1693647559~exp=1693648159~hmac=009350a9d398a8ee3b27b4ede71b244fda2b447dc0c838da5b864e4c7a166aa4" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Lamborghini Aventador</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BestCar;