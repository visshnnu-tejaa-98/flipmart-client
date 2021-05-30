import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/CartActions';
import CartCard from '../components/CartCard';
const CartScreen = () => {
	let cartItems = useSelector((state) => state.cart.cartItems);
	let dispatch = useDispatch();
	if (window.location.pathname.length > 5) {
		var id = window.location.href.split('/')[4].split('?')[0];
		var qty = Number(window.location.href.split('/')[4].split('?')[1].split('=')[1]);
	}
	useEffect(() => {
		if (window.location.pathname.length > 5) {
			dispatch(addToCart(id, qty));
		}
	}, [dispatch, qty, id]);

	const checkoutHandler = () => {
		console.log('btn to checkout');
	};
	return (
		<div className='cart'>
			<div className='home-heading'>
				<img
					src='https://www.searchpng.com/wp-content/uploads/2019/01/Flipart-Logo-Icon-PNG-Image.png'
					alt=''
					className='heading-image '
				/>
				<h4 className='indigo-text text-accent-2 heading-text'>
					<strong>
						<em>Your Cart</em>
					</strong>
				</h4>
			</div>
			<div className='row '>
				{cartItems.length === 0 && (
					<div className='center'>
						<h5 className='blue-text message'> 😞 Your cart is empty</h5>
						<Link to='/home' class='waves-effect waves-light btn orange darken-2'>
							Continue Shopping
						</Link>
					</div>
				)}
				{cartItems && cartItems.map((item) => <CartCard item={item} qty={qty} />)}
				{cartItems.length > 0 && (
					<div className='col l3 m6 s10 offset-m3 offset-s1  '>
						<div className='card subtotal-card cart-side-bar'>
							<ul>
								<li className='subtotal-heading'>Price Details</li>
							</ul>
							<hr />
							<table>
								<tbody>
									<tr>
										<td>Total Items:</td>
										<td>{cartItems.reduce((acc, curr) => acc + curr.qty, 0)}</td>
									</tr>
									<tr>
										<td>Total Price</td>
										<td>₹ {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}</td>
									</tr>
									<tr>
										<td colSpan='2' className='center'>
											<button
												class='waves-effect waves-light btn orange darken-2'
												onClick={checkoutHandler}
											>
												<i class='material-icons right'>send</i>Checkout
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartScreen;
