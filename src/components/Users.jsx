import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const allUsers = useLoaderData();
    const [users, setUsers] = useState(allUsers)

    const handleDelete = id => {
        fetch(`http://localhost:3000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('account deleted successfully')
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers)
                }
            })

    }
    return (
        <div>
            <h2 className="text-3xl">Users : {allUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id} className="bg-base-200">
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createAt}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;

