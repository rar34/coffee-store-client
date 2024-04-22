import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, photo, quantity, taste, supplier, category, details } = coffee;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="flex bg-base-100 shadow-md">
            <figure><img className="w-80" src={photo} alt="" /></figure>
            <div className="text-left flex justify-between w-full">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn join-item">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-500 join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;