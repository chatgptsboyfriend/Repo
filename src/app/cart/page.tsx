'use client';

import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6">🛒 Panier</h1>

      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map(item => (
              <li
                key={item.id}
                className="flex items-center justify-between border p-4 rounded"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    CHF {item.price} × {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">Total : CHF {total}</p>

            <button
              onClick={clearCart}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
            >
              Vider le panier
            </button>
          </div>
        </>
      )}
    </main>
  );
}
