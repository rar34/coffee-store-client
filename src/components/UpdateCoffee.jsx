import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffeeForUpdate = useLoaderData()

    const { _id, name, photo, quantity, taste, supplier, category, details } = coffeeForUpdate;

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo }
        console.log(newCoffee)
        form.reset()

        // sent data  to the server
        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }

    console.log(coffeeForUpdate)
    return (
        <div className="bg-[#F4F3F0] p-4 md:p-24">
            <h2 className="text-3xl font-bold text-center">Update Coffee</h2>
            <form onSubmit={handleUpdate}>
                {/* form name and quantity row */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Coffee Name</span>
                        </div>
                        <input name="name" type="text" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Available Quantity</span>
                        </div>
                        <input name="quantity" type="text" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* form supplier and taste row */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Supplier</span>
                        </div>
                        <input name="supplier" type="text" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Taste</span>
                        </div>
                        <input name="taste" type="text" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* form categories and details row */}
                <div className="md:flex mb-4">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Categories</span>
                        </div>
                        <input name="category" type="text" defaultValue={category} placeholder="Categories" className="input input-bordered w-full " />
                    </label>
                    <label className="form-control md:ml-4 w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Details</span>
                        </div>
                        <input name="details" type="text" defaultValue={details} placeholder="Details" className="input input-bordered w-full " />
                    </label>
                </div>
                <div className="mb-6">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-medium">Photo URL</span>
                        </div>
                        <input name="photo" type="text" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full " />
                    </label>
                </div>
                <input className="btn btn-block" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;