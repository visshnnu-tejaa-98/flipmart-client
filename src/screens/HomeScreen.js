import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
// import productsList from '../products';
const HomeScreen = () => {
	const { products, loading, error } = useSelector((state) => state.productList);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);

	return (
		<div className='homescreen'>
			{error && (
				<div className='center'>
					<h5 className='red-text message'> 😞 {error}</h5>
				</div>
			)}
			{products && (
				<div className='home-heading'>
					<img
						src='https://www.searchpng.com/wp-content/uploads/2019/01/Flipart-Logo-Icon-PNG-Image.png'
						alt=''
						className='heading-image '
					/>
					<h4 className='indigo-text text-accent-2 heading-text'>
						<strong>
							<em>Latest Products</em>
						</strong>
					</h4>
				</div>
			)}

			<div className='row '>
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
				{products && products.map((product, index) => <Card product={product} key={index} />)}
			</div>
		</div>
	);
};

export default HomeScreen;
