import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';

const Navbar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);

	const [userInfo, setUserInfo] = useState({});
	const [userLS, setUserLS] = useState({});
	const user = useSelector((state) => state.userLogin);
	const dispatch = useDispatch();

	useEffect(() => {
		setUserInfo(user.userInfo);
	}, [user, userInfo]);

	useEffect(() => {});
	const logoutHandler = () => {
		dispatch(logout());
		setUserInfo(null);
	};
	return (
		<div className='navbar'>
			<nav className='indigo accent-2 '>
				<div className='nav-wrapper container'>
					<Link to='/' className='brand-logo '>
						<em className='brand'>Flipmart</em>
					</Link>
					<Link to='/' data-target='mobile-demo' className='sidenav-trigger '>
						<i className='material-icons'>menu</i>
					</Link>
					<ul className='right hide-on-med-and-down'>
						<li>
							<Link to='/cart'>
								<i className='fas fa-shopping-cart navbar-icon'></i> Cart
							</Link>
						</li>
						{userInfo && userInfo.name ? (
							<li>
								<i className='fas fa-user-circle navbar-icon'></i>
								<strong className='drop-down'>{userInfo.name}</strong>
							</li>
						) : (
							<li>
								<a
									href='/login'
									className='waves-effect waves-light btn white indigo accent-2  z-depth-0'
								>
									<i className='material-icons left'>person</i>
									<strong>Login</strong>
								</a>
							</li>
						)}
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/profile'>Profile</Link>
				</li>
				<li>
					<Link to='/cart'>Cart</Link>
				</li>
				<li>
					<Link to='/logout'>Logout</Link>
				</li>
			</ul>

			{userInfo && userInfo.name && (
				<div className='indigo accent-4 secondNav  hide-on-med-and-down'>
					<div className='row center'>
						<Link to='/' className='col l3 white-text'>
							Home
						</Link>
						<Link to='/profile' className='col l3 white-text'>
							Profile
						</Link>
						<Link to='/cart' className='col l3 white-text'>
							Cart
						</Link>
						<Link to='/' className='col l3 white-text' onClick={logoutHandler}>
							Logout
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
