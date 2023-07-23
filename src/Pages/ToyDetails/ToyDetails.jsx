import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { sellerName, toyName, photo, email, price, quantity, rating, description } = toyDetails;

    return (
        <div className="card w-2/3 mx-auto bg-base-100 shadow-xl p-8">
            <figure><img src={toyDetails.photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {toyDetails.toyName}
                    <div className="badge badge-secondary">ratings {toyDetails.rating}</div>
                </h2>
                <p>Seller Name: {toyDetails.sellerName}</p>
                <p>Email: {toyDetails.email}</p>
                <p><small className="font-semibold text-xl">Description:</small> <br />
                    {toyDetails.description}
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Price: $ {toyDetails.price}</div>
                    <div className="badge badge-outline">Quantity: {toyDetails.quantity}</div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;