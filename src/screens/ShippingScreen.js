import { useEffect, useState } from 'react';
import { saveShippingAddress } from '../redux/actions/CartActions';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProgressSteps from '../components/ProgressSteps';
const ShippingScreen = () => {
	const shippingAddress = useSelector((state) => state.cart.shippingAddress);

	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);
	let history = useHistory();
	const dispatch = useDispatch();
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		if (address && city && postalCode > 0 && country) {
			dispatch(saveShippingAddress({ address, city, postalCode, country }));
			history.push('/payment');
		}
	};
	return (
		<div className='login center'>
			<div className='row login-screen'>
				<div className='col l4 m8 s10 offset-s1 offset-m2 offset-l4 '>
					<ProgressSteps step1 step2 />
					<div className='card'>
						<div className='login-card'>
							<h4>Shipping Address</h4>
							<form onSubmit={submitHandler}>
								<div className='input-field '>
									<input
										id='address'
										type='text'
										className='validate'
										value={address}
										onChange={(e) => setAddress(e.target.value)}
										required
									/>
									<label htmlFor='address'>Address</label>
								</div>

								<div className='input-field '>
									<input
										id='city'
										type='text'
										className='validate'
										value={city}
										onChange={(e) => setCity(e.target.value)}
										required
									/>
									<label htmlFor='city'>City</label>
								</div>

								<div className='input-field '>
									<input
										id='postalCode'
										type='text'
										className='validate'
										value={postalCode}
										onChange={(e) => setPostalCode(e.target.value)}
										required
									/>
									<label htmlFor='postalCode'>Postal Code</label>
								</div>

								<div className='input-field '>
									<input
										id='country'
										type='text'
										className='validate'
										value={country}
										onChange={(e) => setCountry(e.target.value)}
										required
									/>
									<label htmlFor='postalCode'>Country</label>
								</div>

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

export default ShippingScreen;
