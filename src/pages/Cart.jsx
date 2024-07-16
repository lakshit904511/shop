import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  function handle() {
    toast.success("Order Dispatched");
  }
  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex md:flex-row flex-col-reverse gap-y-10 max-w-[1200px] mx-auto justify-between items-center min-h-[80vh] gap-x-12">
          <div className="md:max-w-[500px] h-[100vh] w-full flex flex-col justify-evenly mt-9">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="md:h-[80vh] w-15 flex flex-col mr-4 justify-between items-center">
            <div className="md:w-full h-[200px] flex items-center flex-col justify-evenly">
              <h2 className="md:text-2xl text-green-600 font-bold">
                Your Cart
              </h2>
              <h1 className="md:text-3xl text-green-600 font-bold">Summary</h1>
              <p>
                <span className="md:text-xl text-gray-800 font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="md:w-full flex items-center flex-col gap-y-3">
              <p className="md:text-2xl text-gray-800 font-semibold">
                {" "}
                Total Amount: ${totalAmount}
              </p>
              <button
                onClick={handle}
                className="md:text-white font-semibold text-xl bg-green-600 py-5 px-4 rounded-sm"
              >
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[80vh] gap-y-12">
          <h1 className="text-2xl text-red-500 font-bold">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-xl text-white font-semibold py-3 px-3 rounded-lg">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
