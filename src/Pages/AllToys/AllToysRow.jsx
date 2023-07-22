import { Link } from "react-router-dom";

const AllToysRow = ({ allToy }) => {
    const { _id, sellerName, toyName, price, quantity, subCategory } = allToy;
    return (
        <tr>
            <th>{sellerName}</th>
            <td>
                <div className="font-semibold">{toyName}</div>
            </td>
            <td>
                {subCategory}
            </td>
            <td>${price}
            </td>
            <td className="badge badge-primary badge-sm">{quantity}
            </td>
            <th>
                <Link to={`/details/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;