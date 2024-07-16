
import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className=" md:flex md:w-[550px] justify-evenly gap-x-10 gap-y-10 border-b-2 border-black py-3">

        <div className="md: h-[180px] w-[150px]">
          <img className="md:h-full" src={item.image} />
        </div>

        <div className="md:flex flex-col items-center gap-y-10">
          <div>
            <h1 className="md:text-lg text-gray-800 font-semibold">{item.title}</h1>
            <h1 className="md:text-sm text-gray-800 font-semibold">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</h1>
          </div>
          <div className="md:flex items-center gap-x-12 ">
            <p className="md:text-2xl text-green-600 font-semibold">${item.price}</p>
            <div
              className="md:ml-[250px]"
              onClick={removeFromCart}>
              <FcDeleteDatabase size={45}/>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CartItem;
