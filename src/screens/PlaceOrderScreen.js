import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ProgressSteps from '../components/ProgressSteps';
import { createOrder } from '../redux/actions/orderActions';

const PlaceOrderScreen = () => {
	const { cartItems, shippingAddress, paymentMethod } = useSelector((state) => state.cart);
	const { id } = useSelector((state) => state.userLogin.userInfo);
	const dispatch = useDispatch();
	const history = useHistory();
	const getDecimalPlaces = (num) => {
		return Math.round((num * 100) / 100).toFixed(2);
	};
	let price = getDecimalPlaces(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0));
	let shippingPrice = getDecimalPlaces(cartItems.price > 500 ? 0 : 500);
	let taxPrice = getDecimalPlaces((price * 8) / 100);
	let totalPrice = getDecimalPlaces(Number(price) + Number(shippingPrice) + Number(taxPrice));

	const submitHandler = () => {
		let data = {
			user: id,
			price,
			shippingPrice,
			taxPrice,
			totalPrice,
			orderItems: cartItems,
			paymentMethod,
			shippingAddress,
		};
		console.log(data);
		dispatch(createOrder(data));
		history.push('/orderDetails');
	};
	return (
		<div className='placeOrder '>
			<div className='login center'>
				<div className='row login-screen'>
					<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
						<ProgressSteps step1 step2 step3 step4 />
					</div>
				</div>
			</div>
			<div className='row container'>
				<div className='col l8 m8 s12 offset-m2 '>
					<div className='card'>
						<div className='placeOrderScreen'>
							<h5>
								<strong>Shipping</strong>
							</h5>
							<p>
								<strong>Address: </strong>
								{shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode},
								{shippingAddress.country}
							</p>
						</div>
					</div>
					<div className='card'>
						<div className='placeOrderScreen'>
							<h5>
								<strong>Payment Method</strong>
							</h5>
							<p>
								<strong>Method: </strong>
								{paymentMethod}
							</p>
						</div>
					</div>
					<div className='card'>
						<div className='placeOrderScreen'>
							<h5>
								<strong>Order Items</strong>
							</h5>
							<table>
								<tbody>
									{cartItems.map((item, idx) => {
										return (
											<tr>
												<td>
													<img src={item.image} alt={item.name} className='placeOrder-image' />
												</td>
												<td>
													<Link to={`/product/${item.id}`}>{item.name.slice(1, 50) + '...'}</Link>
												</td>
												<td>{`${item.qty} X ₹${item.price} = ₹ ${item.qty * item.price}`}</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className='col s12 m8 l4 offset-m2'>
					<div className='card'>
						<div className='placeOrderScreen'>
							<table>
								<tbody>
									<tr>
										<td colSpan='2'>
											<h5>
												<strong>Order Summary</strong>
											</h5>
										</td>
									</tr>
									<tr>
										<td>Items</td>
										<td>₹ {price}</td>
									</tr>
									<tr>
										<td>Shipping</td>
										<td>₹ {shippingPrice}</td>
									</tr>
									<tr>
										<td>Tax</td>
										<td>₹ {taxPrice}</td>
									</tr>
									<tr>
										<td>Total</td>
										<td>₹ {totalPrice}</td>
									</tr>
									<tr>
										<td colSpan='2' className='center'>
											<Link
												className='waves-effect waves-light btn btn-large orange darken-2'
												onClick={submitHandler}
											>
												<i className='material-icons right'>send</i>Place Order
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlaceOrderScreen;
