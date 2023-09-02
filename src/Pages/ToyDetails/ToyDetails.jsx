import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { sellerName, toyName, photo, email, price, quantity, rating, description } = toyDetails;

    return (
        <div className="card lg:w-2/3 mx-auto bg-base-100 shadow-xl p-8 mb-10">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toyName}
                    <div className="badge badge-secondary">ratings {rating}</div>
                </h2>
                <p>Seller Name: {sellerName}</p>
                <p>Email: {email}</p>
                <p><small className="font-semibold text-xl">Description:</small> <br />
                    {description}
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Price: $ {price}</div>
                    <div className="badge badge-outline">Quantity: {quantity}</div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;