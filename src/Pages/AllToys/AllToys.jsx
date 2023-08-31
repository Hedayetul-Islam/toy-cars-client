import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import { Helmet } from "react-helmet-async";

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('https://baby-shop-server-six.vercel.app/cars')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Baby Shop | All Toys</title>
            </Helmet>
            <table className="table">
                {/* head */}
                <thead className="text-black">
                    <tr className="bg-slate-200">
                        <th>SellerName</th>
                        <th>ToyName</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allToys.map(allToy => <AllToysRow
                            key={allToy._id}
                            allToy={allToy}
                        ></AllToysRow>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;