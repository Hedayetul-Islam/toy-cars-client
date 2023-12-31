
const About = () => {
    return (
        <div className="lg:flex lg:h-[650px] items-center gap-16 p-10">
            <div className="lg:w-1/2 text-center py-4">
                <h2 className="text-5xl font-bold">About Us</h2>
                <p className="p-6 text-justify">Toy cars are miniature wonders that capture the hearts and imaginations of both young and old. These diminutive vehicles bring joy and excitement as they zoom across floors, tracks, and imaginary landscapes. Whether it is a sleek sports car, a rugged monster truck, or a classic vintage model, toy cars allow us to explore a world of adventure and speed within the palm of our hands. With vibrant colors, intricate details, and realistic designs, they spark creativity and encourage pretend play. Toy cars not only entertain but also foster motor skills, hand-eye coordination, and imaginative storytelling. They hold a timeless appeal, reminding us of the joy and fascination we experienced during our own childhoods.</p>
                <button className="btn btn-neutral btn-primary">Contact Us</button>
            </div>
            <div className="lg:w-1/2">
                <img src="https://images.pexels.com/photos/4934421/pexels-photo-4934421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    );
};

export default About;