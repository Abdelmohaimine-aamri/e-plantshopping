import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        let total = 0;
        cart.forEach(item => {
            // Convert cost string (e.g., "$12") to number by removing $
            const price = parseFloat(item.cost.substring(1));
            total += price * item.quantity;
        });
        return total.toFixed(2); // Return with 2 decimal places
    };

    // Continue shopping - call parent function
    const handleContinueShopping = (e) => {
        e.preventDefault();
        if (onContinueShopping) {
            onContinueShopping(e);
        }
    };

    // Checkout functionality (placeholder)
    const handleCheckoutShopping = (e) => {
        e.preventDefault();
        alert('Functionality to be added for future reference');
    };

    // Increment quantity using updateQuantity action
    const handleIncrement = (item) => {
        dispatch(updateQuantity({
            name: item.name,
            quantity: item.quantity + 1
        }));
    };

    // Decrement quantity (with remove if quantity becomes 0)
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            // Decrease quantity by 1 using updateQuantity
            dispatch(updateQuantity({
                name: item.name,
                quantity: item.quantity - 1
            }));
        } else {
            // Remove item if quantity would drop to 0 using removeItem
            dispatch(removeItem(item.name));
        }
    };

    // Remove plant from cart using removeItem action
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // Calculate item subtotal
    const calculateTotalCost = (item) => {
        // Extract numeric value from cost string
        const price = parseFloat(item.cost.substring(1));
        return (price * item.quantity).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <button className="get-started-button" onClick={handleContinueShopping}>
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    <div>
                        {cart.map(item => (
                            <div className="cart-item" key={item.name}>
                                <img className="cart-item-image" src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <div className="cart-item-name">{item.name}</div>
                                    <div className="cart-item-cost">{item.cost}</div>
                                    <div className="cart-item-quantity">
                                        <button
                                            className="cart-item-button cart-item-button-dec"
                                            onClick={() => handleDecrement(item)}
                                        >
                                            -
                                        </button>
                                        <span className="cart-item-quantity-value">{item.quantity}</span>
                                        <button
                                            className="cart-item-button cart-item-button-inc"
                                            onClick={() => handleIncrement(item)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                                    <button
                                        className="cart-item-delete"
                                        onClick={() => handleRemove(item)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'>
                            <strong>Grand Total: ${calculateTotalAmount()}</strong>
                        </div>
                        <div className="continue_shopping_btn">
                            <button
                                className="get-started-button"
                                onClick={handleContinueShopping}
                            >
                                Continue Shopping
                            </button>
                            <br />
                            <button
                                className="get-started-button1"
                                onClick={handleCheckoutShopping}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItem;