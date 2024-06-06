import { useDispatch, useSelector } from "react-redux";
import ItemsList from "../../components/ItemsList";
import { clearItems } from "../../store/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handlerClearCart = () => {
        dispatch(clearItems())
    }
    return(
        <div className="text-center m-4 p-4 ">
            <h1 className="font-bold text-2xl mb-4">Cart</h1>
            <div className="w-6/12 m-auto p-4 bg-gray-100 shadow-lg">
                {cartItems.length === 0 && <h1>Cart is empty! Add items to the cart.</h1>}
                <ItemsList items={cartItems}/>
            </div>
            <button className=" bg-black text-white my-4 px-4 py-1 rounded-md" onClick={handlerClearCart}>Clear</button>
        </div>
    )
}

export default Cart;