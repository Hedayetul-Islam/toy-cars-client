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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(mytoy => <MyToysRow
                            key={mytoy._id}
                            mytoy={mytoy}
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;