import React from 'react';

const ItemPriceCard = ({ itemName, itemPrice }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-bold text-lg mb-2">{itemName}</h3>
            <div className='flex'>
                <div className="w-1/2">
                    <p className="text-gray-600">Price: ${itemPrice.toFixed(2)}</p>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DWjgECdmxa-Tr_3Xb9Va4Ogp1fb7v44ghA&s" alt="Item" className="w-16 h-16 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default ItemPriceCard;
