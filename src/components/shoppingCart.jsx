import { useState } from "react"
import { cartProducts } from "../data/shopping"
import CartItem from "./cartitem"

export function ShoppingCart() {
    const [cartItems, setCartItems] = useState(cartProducts)

    function updateQuantity(id, quantity) {
        setCartItems(cartItems.map(product =>
            product.id === id ? { ...product, quantity } : product
        ))
    }

    function removeItem(id) {
        setCartItems(cartItems.filter(product => product.id !== id))
    }

    const subtotal = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0)

    return (
        <main className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h1>

                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
                    {cartItems.map(product => (
                        <CartItem
                            key={product.id}
                            product={product}
                            onQuantityChange={updateQuantity}
                            onRemove={removeItem}
                        />
                    ))}
                </div>

                <div className="flex justify-between items-center mt-6 text-lg font-semibold text-gray-900">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
            </div>
        </main>
    )
}
