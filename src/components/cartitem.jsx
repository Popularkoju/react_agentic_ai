export default function CartItem({ product, onQuantityChange, onRemove }) {
    return (
        <div className="flex items-center gap-4 p-4">
            <img className="w-16 h-16 rounded-lg object-cover" src={product.image} alt={product.title} />

            <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{product.title}</h3>
                <p className="text-sm text-gray-500 truncate">{product.subtitle}</p>
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={() => onQuantityChange(product.id, Math.max(1, product.quantity - 1))}
                    className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                    -
                </button>
                <span className="w-4 text-center text-sm text-gray-400">{product.quantity}</span>
                <button
                    onClick={() => onQuantityChange(product.id, product.quantity + 1)}
                    className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                    +
                </button>
            </div>

            <span className="w-16 text-right font-medium text-gray-900">
                ${(product.price * product.quantity).toFixed(2)}
            </span>

            <button
                onClick={() => onRemove(product.id)}
                className="text-sm text-gray-400 hover:text-red-500"
            >
                Remove
            </button>
        </div>
    )
}
