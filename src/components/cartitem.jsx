import { Trash2 } from "lucide-react"

export default function CartItem({ product, onQuantityChange, onRemove }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-b border-gray-100 last:border-0">
            <div className="flex-1 flex items-center gap-3 min-w-0">
                <img className="w-16 h-16 rounded-lg object-cover shrink-0" src={product.image} alt={product.title} />
                <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">{product.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{product.subtitle}</p>
                </div>
            </div>

            <div className="flex items-center justify-between sm:justify-start sm:w-[120px] gap-2">
                <span className="text-sm text-gray-500 sm:hidden">Quantity</span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onQuantityChange(product.id, Math.max(1, product.quantity - 1))}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-600"
                    >
                        -
                    </button>
                    <span className="w-4 text-center text-sm">{product.quantity}</span>
                    <button
                        onClick={() => onQuantityChange(product.id, product.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-600"
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-between sm:justify-start sm:w-[80px] font-semibold text-gray-900">
                <span className="text-sm text-gray-500 font-normal sm:hidden">Total</span>
                ${(product.price * product.quantity).toFixed(2)}
            </div>

            <div className="flex justify-end sm:w-[40px]">
                <button onClick={() => onRemove(product.id)} className="text-gray-400 hover:text-red-500">
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    )
}
