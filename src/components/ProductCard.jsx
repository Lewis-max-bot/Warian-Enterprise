// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-600">KSh {product.price.toLocaleString()}</p>
        <button className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}