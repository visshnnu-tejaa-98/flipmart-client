import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/CartActions';
import CartCard from '../components/CartCard';
const CartScreen = () => {
	let cartItems = useSelector((state) => state.cart.cartItems);

	// console.log(token);
	let dispatch = useDispatch();
	let history = useHistory();
	if (window.location.pathname.length > 5) {
		var id = window.location.href.split('/')[4].split('?')[0];
		var qty = Number(window.location.href.split('/')[4].split('?')[1].split('=')[1]);
	}
	useEffect(() => {
		if (window.location.pathname.length > 5) {
			dispatch(addToCart(id, qty));
		}
	}, [dispatch, qty, id]);

	let userInfo = useSelector((state) => state.userLogin.userInfo);
	const checkoutHandler = (e) => {
		e.preventDefault();
		// console.log(userInfo.token);
		if (userInfo && userInfo.token) {
			console.log('Shipping');
			history.push('/shipping');
		} else {
			console.log('login');
			history.push('/login');
		}
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
						<Link to='/home' className='waves-effect waves-light btn orange darken-2'>
							Continue Shopping
						</Link>
					</div>
				)}
				{cartItems && cartItems.map((item, idx) => <CartCard item={item} qty={qty} key={idx} />)}
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
												className='waves-effect waves-light btn orange darken-2'
												onClick={checkoutHandler}
											>
												<i className='material-icons right'>send</i>Checkout
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
