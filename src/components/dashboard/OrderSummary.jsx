import { FaClipboardList, FaMoneyBillWave, FaTrashRestoreAlt, FaUser } from "react-icons/fa";
import { useState } from "react";

const OrderSummary = ({ orders }) => {
    const [orderCount, setOrderCount] = useState(orders.length);
    const customerSet = new Set();

    orders?.forEach(order => {
        customerSet.add(order.Customer_Name);
    });

    const customerCount = customerSet.size;
    const totalPriceReceived = orders.map(order =>
        order.Items.reduce((subtotal, item) => subtotal + item.Total_Price, 0)
    ).reduce((total, subtotal) => total + subtotal, 0);

    return (
        <div className="container  py-8">
            <div className="flex flex-wrap mb-8 gap-5">
                <div className="bg-white shadow-md rounded-lg p-4 text-center max-w-md mx-auto min-w-[200px]">
                    <FaClipboardList className="text-4xl text-gray-600 mb-2 mx-auto" />
                    <p className="text-xl font-bold text-gray-800">{orderCount}</p>
                    <p className="text-gray-600"> Total Orders</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 text-center max-w-md mx-auto min-w-[200px]">
                    <FaUser className="text-4xl text-gray-600 mb-2 mx-auto" />
                    <p className="text-xl font-bold text-gray-800">{customerCount}</p>
                    <p className="text-gray-600"> Total Customers</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 text-center max-w-md mx-auto min-w-[200px]">
                    <FaMoneyBillWave className="text-4xl text-gray-600 mb-2 mx-auto" />
                    <p className="text-xl font-bold text-gray-800">${totalPriceReceived.toFixed(2)}</p>
                    <p className="text-gray-600">Total Received </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 text-center max-w-md mx-auto min-w-[200px]">
                    <FaTrashRestoreAlt className="text-4xl text-gray-600 mb-2 mx-auto" />
                    <p className="text-xl font-bold text-gray-800">{10}</p>
                    <p className="text-gray-600">Vacant Tables</p>
                </div>
            </div>

        </div>
    );
};
export default OrderSummary;