import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);


    const url = `http://localhost:5000/cars?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])


    const handleDelete = id => {
        const proceed = confirm('Are You sure? you want to delete.');
        if (proceed) {
            fetch(`http://localhost:5000/cars/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                        setMytoys(remaining);
                    }
                })
        }
    }


    return (
        <div>
            <h2>my toys: {mytoys.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>ToyName & SellerName</th>
                            <th>Email & Quantity</th>
                            <th>Price & Rating</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(mytoy => <MyToysRow
                            key={mytoy._id}
                            mytoy={mytoy}
                            handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;