import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Counter from '../components/Counter';
import { productDetails } from '../redux/actions/productActions';
import { cartReducer } from '../redux/reducers/CartReducers';
const ProductDetails = () => {
	let { loading, product, error } = useSelector((state) => state.productDetails);
	let dispatch = useDispatch();
	useEffect(() => {
		let id = window.location.pathname.split('/')[2];
		dispatch(productDetails(id));
	}, [dispatch]);

	const [count, setcount] = useState(1);

	const increment = () => {
		if (count > 0 && count < product.countInStock) {
			setcount(count + 1);
		}
	};

	const decrement = () => {
		if (count > 1 && count <= product.countInStock) {
			setcount(count - 1);
		}
	};
	return (
		<div className='product-details '>
			{loading && (
				<div className='center spinner-margin'>
					<div className='preloader-wrapper big active'>
						<div className='spinner-layer spinner-blue-only'>
							<div className='circle-clipper left'>
								<div className='circle'></div>
							</div>
							<div className='gap-patch'>
								<div className='circle'></div>
							</div>
							<div className='circle-clipper right'>
								<div className='circle'></div>
							</div>
						</div>
					</div>
				</div>
			)}
			{error && (
				<div className='center'>
					<h5 className='red-text message'> 😞 {error}</h5>
				</div>
			)}
			{product && !loading && !error && (
				<div className='row '>
					<div className='col s12 m12 l5 '>
						<div className='img center'>
							<img src={product.image} alt='' className='details-page-image' />
							{product.countInStock > 0 ? (
								<div className='buttons'>
									<Link
										to={`/cart/${product._id}?qty=${count}`}
										className='waves-effect waves-light btn-large amber darken-2'
									>
										<i className='material-icons left'>add_shopping_cart</i>Add to cart
									</Link>
									<a className='waves-effect waves-light btn-large red'>
										<i className='material-icons left'>flash_on</i>Buy now
									</a>
								</div>
							) : (
								<div className='buttons'>
									<a className='waves-effect waves-light btn-large amber darken-2'>
										<i className='material-icons left'>notifications</i>Notify me
									</a>
								</div>
							)}
						</div>
					</div>
					<div className='col s12 m12 l7 product-details-description'>
						<div className='product-details-content'>
							<h5>
								<strong>{product.name}</strong>
							</h5>
							<span className='product-details-rating  green darken-2 white-text'>
								{product.ratings} <i className='fas fa-star'></i>
							</span>
							<span> on {product.numReviews} Ratings</span>
							<p className='card-price'>₹ {product.price}</p>
							<p className='description'>
								Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to
								15 inches) in the padded sleeve, your everyday.
							</p>
							<p>
								<strong>Available offers</strong>
							</p>
							<p className='m-0'>
								<i className='fas fa-tag green-text text-darken-2 '></i>
								<strong> Bank Offer </strong>
								10% off on Citi Credit/Debit Cards, up to ₹10000. On orders of ₹5000 and above
							</p>
							<p className='m-0'>
								<i className='fas fa-tag green-text text-darken-2 '></i>
								<strong> Bank Offer </strong>
								Extra ₹500 Off on Citi Credit EMI Transactions
							</p>
							<p className='m-0'>
								<i className='fas fa-tag green-text text-darken-2 '></i>
								<strong> Bank Offer </strong>
								5% Unlimited Cashback on Flipkart Axis Bank Credit Card
							</p>
							<p className='m-0'>
								<i className='fas fa-tag green-text text-darken-2 '></i>
								<strong> Partner Offer </strong>
								Get Extra 10% Off on select Woodland Shoes on your purchase of Mobiles
							</p>
						</div>
						<div className='table row center'>
							<div className='col s18 m8 l8 offset-l2 offset-s3 offset-m2'>
								<table className='table-details'>
									<thead>
										<tr>
											<th>Category</th>
											<th>Value</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>Price</td>
											<td>₹ {product.price * 75}</td>
										</tr>
										<tr>
											<td>Status</td>
											<td>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</td>
										</tr>
										<tr>
											<td>Count In Stock</td>
											<td>{product.countInStock}</td>
										</tr>
										<tr>
											<td>Select No. of items</td>
											<td>
												{/* <Counter stock={product.countInStock} /> */}
												<div className='counter'>
													<button
														className='btn-floating btn-small waves-effect waves-light red'
														onClick={decrement}
													>
														<i className='material-icons'>remove</i>
													</button>
													<span>
														<pre className='counter-pre'> {count} </pre>
													</span>
													<button
														className='btn-floating btn-small waves-effect waves-light green'
														onClick={increment}
													>
														<i className='material-icons'>add</i>
													</button>
												</div>
												{/* <Counter stock={product.countInStock} /> */}
											</td>
										</tr>
										<tr>
											<td colSpan='2' className='center'>
												{product.countInStock > 0 ? (
													<Link
														to={`/cart/${product._id}?qty=${count}`}
														className='waves-effect waves-light btn amber darken-2'
													>
														<i className='material-icons left'>add_shopping_cart</i>
														Add {count} items to Cart
													</Link>
												) : (
													<Link to='' className='waves-effect waves-light btn amber darken-2'>
														<i className='material-icons left'>flash_on</i>Notify me
													</Link>
												)}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
