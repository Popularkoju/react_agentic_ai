import { useState } from "react"
import { cartProducts } from "../data/shopping"
import CartItem from "./cartitem"

// available voucher codes and their discount %
const vouchers = {
    DIS10: 10,
    DIS20: 20,
    DIS50: 50,
}

const DELIVERY_FEE = 15

export function ShoppingCart() {
    const [cartItems, setCartItems] = useState(cartProducts)
    const [voucherCode, setVoucherCode] = useState("")
    const [discountPercent, setDiscountPercent] = useState(0)
    const [toastMessage, setToastMessage] = useState("")

    function updateQuantity(id, quantity) {
        setCartItems(cartItems.map(product =>
            product.id === id ? { ...product, quantity } : product
        ))
    }

    function removeItem(id) {
        setCartItems(cartItems.filter(product => product.id !== id))
    }

    // look up the entered code and apply its discount
    function applyVoucher() {
        const code = voucherCode.trim().toUpperCase()
        setDiscountPercent(vouchers[code] || 0)
    }

    // show a message for a couple seconds
    function showToast(message) {
        setToastMessage(message)
        setTimeout(() => setToastMessage(""), 2000)
    }

    function checkout() {
        showToast("Checkout successful")
    }

    const subtotal = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const discountAmount = (subtotal * discountPercent) / 100
    const total = subtotal - discountAmount + DELIVERY_FEE

    return (
        <main className="min-h-screen bg-gray-50 py-8 px-4 sm:py-12 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-12 text-gray-900">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* cart items */}
                    <div className="flex-1 min-w-0 border border-gray-300 rounded-xl p-4">
                        <div className="hidden sm:flex text-sm font-semibold text-gray-500 pb-4">
                            <h2 className="flex-1">Product code</h2>
                            <h2 className="w-[120px]">Quantity</h2>
                            <h2 className="w-[80px]">Total</h2>
                            <h2 className="w-[40px]">Action</h2>
                        </div>

                        {cartItems.map(product => (
                            <CartItem
                                key={product.id}
                                product={product}
                                onQuantityChange={updateQuantity}
                                onRemove={removeItem}
                            />
                        ))}
                    </div>

                    {/* order summary */}
                    <div className="w-full lg:w-[380px] border border-gray-300 rounded-xl p-6 h-fit">
                        <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>

                        {/* voucher input */}
                        <div className="flex gap-2 mb-2">
                            <input
                                value={voucherCode}
                                onChange={e => setVoucherCode(e.target.value)}
                                placeholder="Discount Voucher"
                                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 "
                            />
                            <button
                                onClick={applyVoucher}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-900  font-medium"
                            >
                                Apply
                            </button>
                        </div>
                        {/* test codes shown for reference */}
                        <p className="text-xs text-gray-400 mb-6">Try: DIS10, DIS20, DIS50</p>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Sub Total</span>
                                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Discount ({discountPercent}%)</span>
                                <span className="font-semibold text-gray-900">-${discountAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Delivery fee</span>
                                <span className="font-semibold text-gray-900">${DELIVERY_FEE.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                            <span className="font-semibold text-gray-900">Total</span>
                            <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={checkout}
                            className="w-full mt-6 rounded-lg bg-gray-900 py-3 text-white font-semibold"
                        >
                            Checkout Now
                        </button>
                    </div>
                </div>
            </div>

            {/* toast message */}
            {toastMessage && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                    {toastMessage}
                </div>
            )}
        </main>
    )
}
