import { FaTrash } from "react-icons/fa";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import UseCarts from "../../../Hooks/UseCarts/UseCarts";
import UseAxios from "../../../Hooks/Axios/UseAxios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Carts = () => {

    const [cart, refetch] = UseCarts()
    const axiosSecure = UseAxios()

    const totalPrice = cart?.reduce((total, item) => total + item.price, 0)
    // console.log(totalPrice)

    const handleDelete = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })



            }
        })
    }


    return (
        <div className="my-10">
            <SectionTittle tittle={'WANNA ADD MORE?'} subTittle={'---My Cart---'}></SectionTittle>

            <div>
                <div className="flex justify-between items-center my-4">
                    <h2 className="text-2xl font-semibold">Total Orders: {cart?.length} </h2>
                    <h2 className="text-2xl font-semibold">Total price: ${totalPrice}</h2>
                    <Link to={'/dashboard/payment'}>
                        <button className="btn bg-[#D1A054] text-white">pay</button>
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#D1A054] text-white">
                                <th></th>
                                <th>Items Image</th>
                                <th>Items Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart?.map((item, idx) => <tr key={item._id}>
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost">{item.name}</span>
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <FaTrash onClick={() => handleDelete(item._id)} className="text-xl"></FaTrash>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Carts;