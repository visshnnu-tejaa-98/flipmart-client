import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userEditName } from '../redux/actions/userActions';
const ProfileScreen = () => {
	const [name, setName] = useState('');
	const [profileName, setProfileName] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userLogin.userInfo);
	useEffect(() => {
		const M = window.M;
		M.AutoInit();
	}, []);

	useEffect(() => {
		user.name = JSON.parse(localStorage.getItem('userInfo')).name;
		setProfileName(user);
	}, [user]);
	const changeNameHandler = () => {
		if (name.length > 0) {
			let email = JSON.parse(localStorage.getItem('userInfo')).email;
			let token = JSON.parse(localStorage.getItem('userInfo')).token;
			dispatch(userEditName(name, email, token));
		} else {
			const M = window.M;
			M.toast({ html: 'Input should not be empty' });
		}
	};

	return (
		<div className='rrofilescreen container'>
			<div className='home-heading'>
				<img
					src='https://www.searchpng.com/wp-content/uploads/2019/01/Flipart-Logo-Icon-PNG-Image.png'
					alt=''
					className='heading-image '
				/>
				<h4 className='indigo-text text-accent-2 heading-text'>
					<strong>
						<em>My Profile</em>
					</strong>
				</h4>
			</div>
			<div className='row'>
				<div className='col m4 s12'>
					<div className='card profile-card center'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
							alt=''
							className='profile-img'
						/>
						<h5>
							<strong>
								{JSON.parse(localStorage.getItem('userInfo')).name}
								<a href='#name' className='fas fa-pen profile-edit modal-trigger'></a>
								<div id='name' className='modal'>
									<div className='modal-content'>
										<div className='center'>
											<h4>Set New Name</h4>
											<div className='input-field '>
												<input
													id='name'
													type='text'
													className='validate'
													value={name}
													onChange={(e) => setName(e.target.value)}
													required
												/>
												<label htmlFor='name'> Name</label>
											</div>
										</div>
									</div>
									<div className='modal-footer'>
										<Link
											to='/profile'
											className='modal-close waves-effect waves-green btn-flat'
											onClick={changeNameHandler}
										>
											Agree
										</Link>
									</div>
								</div>
							</strong>
						</h5>
						<p>{JSON.parse(localStorage.getItem('userInfo')).email}</p>
						<button className='waves-effect waves-light btn orange darken-2'>
							change password
						</button>
					</div>
				</div>
				<div className='col m8 s12'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore omnis illum sit ab
					molestiae odit, porro soluta iste possimus pariatur placeat labore incidunt, nihil at non
					amet provident sequi unde enim quidem atque repellat rem fugiat! Fugiat itaque eaque
					repellat non nobis natus vel perferendis qui, consequuntur ut eos saepe odit. Porro
					deserunt blanditiis quisquam suscipit et accusamus maiores, saepe, in reprehenderit quo
					nisi dolor, dolorem alias voluptate quibusdam iure eligendi dicta exercitationem soluta?
					Voluptates obcaecati omnis nulla itaque, illum excepturi hic harum unde error nisi dolorem
					sunt, officiis quam delectus reprehenderit ex ducimus expedita explicabo nostrum! Adipisci
					voluptates veniam atque nemo illum quasi, assumenda est, ipsa dolores odio ut totam dolore
					quidem eos quibusdam aperiam molestias reiciendis placeat eveniet tempora facilis? Qui
					voluptatibus beatae molestias, reiciendis pariatur nihil ab blanditiis porro corporis?
					Perferendis possimus porro sunt aliquam provident consequuntur architecto iusto dolorum
					dolorem nemo molestiae dolor ab ad perspiciatis nihil nobis, facilis fuga impedit
					obcaecati, iure ex tenetur eveniet? Repellendus, minima vitae. Possimus voluptates vitae,
					voluptatum odit iure ut a provident molestias sapiente blanditiis, laboriosam, numquam
					repellat. Dicta, architecto animi exercitationem veritatis assumenda maxime dolore,
					placeat voluptate ratione voluptas officiis aperiam, distinctio quia! Saepe illo voluptas
					accusamus veritatis aliquam.
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
