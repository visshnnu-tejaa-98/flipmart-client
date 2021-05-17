import { Link } from 'react-router-dom';
const Card = ({ product }) => {
	return (
		<div className=''>
			<div className='col s10 m6 l3 offset-s1 '>
				<div className='card card-height'>
					<div className='card-padding'>
						<div className='img center'>
							<img src={product.image} className='card-img' alt='' />
						</div>
						<div className='card-content'>
							<p className='product-name'>
								<strong> {product.name.toString().slice(0, 60)}...</strong>
							</p>
							<p className='reviews-section'>
								<span className='card-reviews  green darken-2 white-text'>
									{product.ratings} <i className='fas fa-star'></i>
								</span>
								<span>
									{product.reviews} on {product.numReviews} Ratings
								</span>
							</p>
							<p className='card-price'>₹ {product.price}</p>
							<div className='center card-button'>
								<Link
									to={`/product/${product._id}`}
									className='waves-effect waves-light btn amber darken-2'
								>
									view details
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
