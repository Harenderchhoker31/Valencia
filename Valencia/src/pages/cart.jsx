import { useCart } from '../context/CartContext';

const Orders = () => {
  const { cart } = useCart();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <p className="mt-4">Items in cart: {cart.length}</p>
    </div>
  );
};

export default Orders;