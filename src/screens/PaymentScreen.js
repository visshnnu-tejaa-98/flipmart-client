import ProgressSteps from '../components/ProgressSteps';
import { useDispatch } from 'react-redux';
import { cartSavePaymentMethod } from '../redux/actions/CartActions';
import { useState } from 'react';
import { useHistory } from 'react-router';

const PaymentScreen = () => {
	const dispatch = useDispatch();
	const [paymentMethod, setPaymentMethod] = useState('PayPal');
	const history = useHistory();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(cartSavePaymentMethod(paymentMethod));
		history.push('/placeOrder');
	};
	return (
		<div className='login center'>
			<div className='row login-screen'>
				<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
					<ProgressSteps step1 step2 step3 />

					<div className='card'>
						<div className='login-card'>
							<h4>Payment Method</h4>
							<form onSubmit={submitHandler}>
								<h6 className=''>
									<br />
									<strong>Select Payment Method</strong>
								</h6>
								<p>
									<label>
										<input
											type='checkbox'
											id='paypal'
											name='paypal'
											value='PayPal'
											defaultChecked
										/>
										<span>PayPal or Credit Card</span>
									</label>
								</p>
								<br />
								<div>
									<button className='waves-effect waves-light btn orange '>Continue</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentScreen;
