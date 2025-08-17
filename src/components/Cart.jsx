// src/components/Cart.jsx
export default function Cart({ cart }) {
  return (
    <div className="fixed right-4 top-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="font-bold">Your Cart ({cart.length})</h3>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between py-2">
          <span>{item.name}</span>
          <span>KSh {item.price}</span>
        </div>
      ))}
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
        Checkout
      </button>
    </div>
  )
}