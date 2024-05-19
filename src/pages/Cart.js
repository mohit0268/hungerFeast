import { useSelector } from "react-redux";
import ItemsList from "../../components/ItemsList";
const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto shadow-xl p-4">
                <ItemsList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;