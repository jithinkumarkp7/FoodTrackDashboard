import React from 'react';
import { ORDER_DATA } from '../../store';

const ItemTable = () => {
    const getRowColor = (status) => {
        switch (status) {
            case 'Pending':
                return 'bg-yellow-100';
            case 'Delivered':
                return 'bg-green-100';
            case 'In Transit':
                return 'bg-red-100';
            default:
                return 'bg-white';
        }
    };

    return (
        <table className="min-w-full bg-white border-collapse border border-gray-300">
            <thead>
                <tr className="bg-white">
                    <th className="border border-gray-300 px-4 py-2 text-left">Customer Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Order ID</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Order Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Order Status</th>
                </tr>
            </thead>
            <tbody>
                {ORDER_DATA?.slice(0, 12).map(order => (
                    <tr key={order.Order_ID} className={`${getRowColor(order.Order_Status)} hover:bg-gray-50`}>
                        <td className="border border-gray-300 px-4 py-2">{order.Customer_Name}</td>
                        <td className="border border-gray-300 px-4 py-2">{order.Order_ID}</td>
                        <td className="border border-gray-300 px-4 py-2">{order.Order_Type}</td>
                        <td className="border border-gray-300 px-4 py-2">{order.Order_Status}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default ItemTable;
