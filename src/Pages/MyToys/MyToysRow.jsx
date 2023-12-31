import { Link } from "react-router-dom";

const MyToysRow = ({mytoy, handleDelete}) => {
    const {_id, sellerName, toyName, photo, email, price, quantity, rating, description} = mytoy;
    return (
        <tr>
            <th>
            <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                        <div className="text-sm font-semibold opacity-50">{sellerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-primary badge-sm">{quantity}</span>
            </td>
            <td>${price}
            <br/>
            <span className="badge badge-primary badge-sm">{rating}</span>
            </td>
            <td>{description}</td>
            <th>
                <Link to={`/updateToy/${_id}`}><button className="btn btn-primary btn-sm">Update</button></Link>
            </th>
        </tr>
    );
};

export default MyToysRow;