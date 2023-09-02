
const Faq = () => {
    return (
        <div className=" mb-12">
            <h2 className="text-center text-5xl font-bold mb-4">FAQ</h2>
            <p className="text-center"> It refers to a list of common questions and their <br /> respective answers on a particular topic, product, service, or subject matter.</p>
            <div className="lg:flex justify-center items-center gap-10 lg:px-16 px-6 lg:ml-10">
                <div className="lg:w-1/2">
                    <img className="w-96" src="https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?w=740&t=st=1693645159~exp=1693645759~hmac=041a3c4ba5feacb2ed6df99f38e96ac715618bc5b509c99540ecd7700d257843" alt="" />
                </div>
                <div className="lg:w-1/2">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What are toy cars made of?
                        </div>
                        <div className="collapse-content">
                            <p>Toy cars are typically made of various materials, including plastic, metal, and sometimes rubber for tires. The choice of materials can vary depending on the manufacturer and the intended purpose of the toy.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How do remote control (RC) toy cars work?
                        </div>
                        <div className="collapse-content">
                            <p>RC toy cars are operated using a remote control transmitter that sends signals to the cars receiver. The receiver interprets these signals and controls the cars motors, allowing it to move forward, backward, turn, and perform other functions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What types of toy cars are available for collectors?
                        </div>
                        <div className="collapse-content">
                            <p>Collectors can find a wide range of toy cars, including die-cast model cars, vintage tinplate cars, limited edition replicas of real vehicles, and miniature racing cars used in slot car racing sets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;