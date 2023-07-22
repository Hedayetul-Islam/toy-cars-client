import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
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