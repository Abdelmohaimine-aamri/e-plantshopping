import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => {
            // Remove $ sign and convert to number
            const price = parseFloat(item.cost.replace('$', ''));
            return total + (price * item.quantity);
        }, 0).toFixed(2); // Round to 2 decimal places
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        if (onContinueShopping) {
            onContinueShopping(e);
        }
    };

    const handleIncrement = (item) => {
        dispatch(updateQuantity({
            name: item.name,
            quantity: item.quantity + 1
        }));
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({
                name: item.name,
                quantity: item.quantity - 1
            }));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        const price = parseFloat(item.cost.replace('$', ''));
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
                                    <div className="cart-item-cost">{item.cost} each</div>
                                    <div className="cart-item-quantity">
                                        <button
                                            className="cart-item-button cart-item-button-dec"
                                            onClick={() => handleDecrement(item)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="cart-item-quantity-value">{item.quantity}</span>
                                        <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>
                                            +
                                        </button>
                                    </div>
                                    <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                                    <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="continue_shopping_btn">
                        <button className="get-started-button" onClick={handleContinueShopping}>
                            Continue Shopping
                        </button>
                        <br />
                        <button className="get-started-button1">Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItem;