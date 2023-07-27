import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {

    const toy = useLoaderData();
    const {_id, price, quantity, description} = toy;

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const details = {price, quantity, description}

        console.log(details)

        fetch(`https://baby-shop-server-six.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json' 
            },
            body: JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })


    }

    return (
        <div className="bg-orange-300 p-8">
            <h2 className='text-center font-bold text-3xl'>Update Toy</h2>
            <form onSubmit={handleUpdateToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-neutral btn-block" type="submit" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;