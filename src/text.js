'use client';

import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaTrash } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onIncrement,
  onDecrement,
  onRemove
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="relative w-full max-w-lg bg-white h-full shadow-lg z-50 p-4 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
            >
              <IoMdClose />
            </button>

            <h2 className="text-xl font-semibold mb-1">Shop Cart</h2>
            <p className="text-sm text-gray-500 mb-4">Location in 382480</p>
            <p className="border-b border-gray-300 mb-4" />

            <div className="bg-red-100 text-red-700 text-sm p-2 rounded-md mb-4 border border-red-200">
              You’ve got FREE delivery. Start <strong>checkout now!</strong>
            </div>

            {/* Cart Items */}
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-5 border-b border-gray-200"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 object-contain rounded"
                />
                <div className="flex-1 px-4">
                  <p className="font-semibold text-sm text-gray-800 mb-1">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.size}</p>
                  <button
                    onClick={() => onRemove(index)}
                    className="flex items-center gap-1 text-xs text-gray-600 mt-1 cursor-pointer"
                  >
                    <FaTrash className="text-[10px] text-green-600" /> Remove
                  </button>
                </div>
                <div className="flex justify-between gap-12">
                  <div className="flex items-center border border-gray-300 rounded px-2 py-1">
                    <button
                      onClick={() => onDecrement(index)}
                      className="text-sm px-2"
                    >
                      -
                    </button>
                    <span className="px-2 text-sm text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onIncrement(index)}
                      className="text-sm px-2"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm mt-2 font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="mt-6 flex justify-between gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded text-sm font-medium">
                Continue Shopping
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white py-2.5 px-4 rounded text-sm font-medium">
                Proceed To Checkout
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
