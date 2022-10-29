import './Navbar.css'
import './botones.css'
import { Link } from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
	return (
		<div className="container">

			<div className="btn-menu">

				<label for="btn-menu">  </label>

			</div>
			<Link to='/'>
			<div className="logo p-3">
				<h2 data-text="CheckPoint">Checkpoint</h2>
			</div>
			</Link>

			<nav className="menu">


				<div className="container2">
					<Link to='category/Horror'><span>Horror</span></Link>
				</div>

				<div className="container3">
				<Link to='category/Aventura'><span>Adventure</span></Link>
				</div>

				<div className="container1">
				<Link to='category/Estrategia'><span>Strategy</span></Link>
				</div>

				<div className="container4">
				<Link to='category/Accion'><span>Action</span></Link>
				</div>
				<div>
					<CartWidget />
				</div>
			</nav>

		</div>
	)
}

export default Navbar;