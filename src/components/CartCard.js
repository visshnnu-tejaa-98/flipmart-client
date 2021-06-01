import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, addToCart } from '../redux/actions/CartActions';
const CartCard = ({ item, qty }) => {
	const dispatch = useDispatch();
	const [count, setcount] = useState(Number(qty));
	const increment = () => {
		if (count > 0 && count < item.countInStock) {
			setcount(count + 1);
			dispatch(addToCart(item.id, count + 1));
		}
	};

	const decrement = () => {
		if (count > 1 && count <= item.countInStock) {
			setcount(count - 1);
			dispatch(addToCart(item.id, count - 1));
		}
	};
	return (
		<div className='col s12 m10 l7 offset-m1 offset-l1'>
			<div className='card'>
				<div className='row cart-card valign-wrapper center'>
					<div className='col s3 l2'>
						<img src={item.image} alt='' className='cart-image' />
					</div>
					<div className='col s6 l2'>
						<Link to={`/product/${item.id}`}>
							<p>
								<strong>{item.name.slice(0, 40) + '...'}</strong>
							</p>
						</Link>
					</div>
					<div className='col s6 l1'>
						<p>
							<strong>₹ {item.price}</strong>
						</p>
					</div>
					<div className='col s6 l2 hide-on-small-only'>
						<div className='counter'>
							<button
								className='btn-floating btn-small waves-effect waves-light red'
								onClick={decrement}
							>
								<i className='material-icons'>remove</i>
							</button>
							<span>
								<pre className='counter-pre'>{count}</pre>
								{/* <pre className='counter-pre'> 1 </pre> */}
							</span>
							<button
								className='btn-floating btn-small waves-effect waves-light green'
								onClick={increment}
							>
								<i className='material-icons'>add</i>
							</button>
						</div>
					</div>

					<div className='col s6 l2 hide-on-small-only'>
						<button
							className='waves-effect waves-light btn red'
							onClick={() => dispatch(removeFromCart(item.id))}
						>
							<i className='material-icons left'>delete</i>Delete
						</button>
					</div>
				</div>
				<div className='row cart-card cart-card-bottom valign-wrapper center hide-on-med-and-up'>
					<div className='col s6 '>
						<div className='counter'>
							<button
								className='btn-floating btn-small waves-effect waves-light red'
								onClick={decrement}
							>
								<i className='material-icons'>remove</i>
							</button>
							<span>
								<pre className='counter-pre'> {count} </pre>
								{/* <pre className='counter-pre'> 1 </pre> */}
							</span>
							<button
								className='btn-floating btn-small waves-effect waves-light green'
								onClick={increment}
							>
								<i className='material-icons'>add</i>
							</button>
						</div>
					</div>
					<div className='col s6 '>
						<button
							className='waves-effect waves-light btn red hide-on-med-and-up'
							onClick={() => dispatch(removeFromCart(item.id))}
						>
							<i className='material-icons left'>delete</i>Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartCard;
