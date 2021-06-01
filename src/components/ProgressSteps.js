import { Link } from 'react-router-dom';
const ProgressSteps = ({ step1, step2, step3, step4 }) => {
	return (
		<div className='progress-step '>
			<div className='row'>
				<div className='col s3 m3 l3 center'>
					<Link
						to='/login'
						className='btn-floating waves-effect waves-light green btn-small'
						disabled={!step1 ? true : false}
					>
						<i className='material-icons '>person</i>
					</Link>
					<p className={step1 ? `green-text` : `grey-text`}>
						<strong>Login</strong>
					</p>
				</div>
				<div className='col s3 m3 l3 center'>
					<Link
						to='/shipping'
						className='btn-floating  waves-effect waves-light  green btn-small'
						disabled={!step2 ? true : false}
					>
						<i className='fas fa-address-card'></i>
					</Link>
					<p className={step2 ? `green-text` : `grey-text`}>
						<strong>Shipping</strong>
					</p>
				</div>
				<div className='col s3 m3 l3 center'>
					<Link
						to='/payment'
						className='btn-floating  waves-effect waves-light  green btn-small'
						disabled={!step3 ? true : false}
					>
						<i className='fas fa-credit-card'></i>
					</Link>
					<p className={step3 ? `green-text` : `grey-text`}>
						<strong>Payment</strong>
					</p>
				</div>
				<div className='col s3 m3 l3 center'>
					<Link
						to='/placeOrder'
						className='btn-floating  waves-effect waves-light  green btn-small'
						disabled={!step4 ? true : false}
					>
						<i className='fas fa-boxes'></i>
					</Link>
					<p className={step4 ? `green-text` : `grey-text`}>
						<strong>Place Order</strong>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProgressSteps;
