import React from 'react';

const ShoppingCart: React.FC = () => {
  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-2xl font-bold mb-5 text-back">Shopping cart</h1>

      <div className="bg-white p-5 rounded shadow-md">
        <div className="flex mb-4">
          <div className="flex-1 font-bold">PRODUCT</div>
          <div className="w-20 text-center font-bold">QUANTITY</div>
          <div className="w-32 text-right font-bold">PRICE</div>
          <div className="w-20"></div>
        </div>

        {["Some name of item", "Product name", "Another name of some product"].map((product, index) => (
          <div key={index} className="flex mb-4 items-center">
            <div className="flex-1">
              <h2 className="font-semibold">{product} goes here</h2>
              <p>Size: XL, Color: blue, Brand: Gucci</p>
            </div>
            <div className="w-20 text-center">
              <select className="border p-1 rounded">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="w-32 text-right">$1156.00</div>
            <div className="w-20 text-center">
              <button className="text-red-500">Remove</button>
            </div>
          </div>
        ))}

        <div className="text-left">
          <button className="text-blue-500">Continue shopping</button>
        </div>
      </div>

      <div className="mt-5 p-5 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="coupon" className="block text-sm font-bold mb-2">Have coupon?</label>
          <input type="text" id="coupon" placeholder="Coupon code" className="border p-2 w-full" />
        </div>

        <div className="flex justify-between">
          <div>
            <p>Total price: USD 568</p>
            <p>Discount: USD 68</p>
            <p className="font-bold">Total: $1,650</p>
          </div>
          <div>
            <button className="bg-blue-500 text-white p-2 rounded">Make Purchase</button>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center p-4 bg-green-500 text-white rounded">
        Free Delivery within 1-2 weeks
      </div>
    </div>
  );
}

export default ShoppingCart;
