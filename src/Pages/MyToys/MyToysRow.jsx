
const MyToysRow = ({mytoy}) => {
    const {sellerName, toyName, photo, email, price, quantity, subCategory, rating, description} = mytoy;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
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
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyToysRow;