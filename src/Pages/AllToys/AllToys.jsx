import { useEffect, useRef, useState } from "react";
import AllToysRow from "./AllToysRow";
import { Helmet } from "react-helmet-async";

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/cars?search=${search}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [search])

const handleSearch = () => {
    console.log(searchRef.current.value)
    setSearch(searchRef.current.value)
}

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>Baby Shop | All Toys</title>
            </Helmet>
            <div className="form-control">
                <div className="input-group">
                    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <table className="table">
                {/* head */}
                <thead className="text-black">
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