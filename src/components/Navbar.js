import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);
	return (
		<div className='navbar'>
			<nav className='indigo accent-2 '>
				<div className='nav-wrapper container'>
					<a href='#!' className='brand-logo '>
						<em className='brand'>Flipmart</em>
					</a>
					<a href='#' data-target='mobile-demo' className='sidenav-trigger '>
						<i className='material-icons'>menu</i>
					</a>
					<ul className='right hide-on-med-and-down'>
						<li>
							<Link to='/cart'>
								<i className='fas fa-shopping-cart navbar-icon'></i> Cart
							</Link>
						</li>
						<li>
							<a className='waves-effect waves-light btn yellow darken-3 '>
								<i className='material-icons left'>person</i>Login
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='mobile-demo'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/cart'>Cart</Link>
				</li>
				<li>
					<a href='collapsible.html'>Javascript</a>
				</li>
				<li>
					<a href='mobile.html'>Mobile</a>
				</li>
			</ul>

			<div className='indigo accent-4 secondNav  hide-on-med-and-down'>
				<div className='row center'>
					<Link to='/' className='col l3 white-text'>
						Home
					</Link>
					<a href='' className='col l3 white-text'>
						Home
					</a>
					<a href='' className='col l3 white-text'>
						Home
					</a>
					<Link to='/cart' className='col l3 white-text'>
						Cart
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
