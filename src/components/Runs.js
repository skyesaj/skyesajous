// import React, { Component } from "react";
// import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
// // components
// import Nav from '../Nav';
// // import About from './About';
// import Shop from '../Shop';
// import Login from './Login';
// import StylistForm from './Stylist/StylistForm';
// import file from './CustomerProfile';

// class Routes extends Component {

// 	render(){
// 		return <div className="container">
// 			<div className="row">
// 				<div className="col-12">
// 					<h3 className="text-center">Animating Routes With GSAP</h3>
// 					<p className="lead"></p>
// 				</div>
// 			</div>

// 			<BrowserRouter>
// 				<div>
// <Nav />
// 					{/* MENU */}
// 					{/* <nav className="col-12"> */}
// 						{/* <Link className="btn gsap-btn mr-2" exact path='/' component={Login}>Home</Link>
// 						<Link className="btn gsap-btn mr-2" path="/about" component={StylistForm}>Home</Link>
// 						<Link className="btn gsap-btn mr-2" path="/shop" exact component={CustomerProfile}>Services</Link>
// 						<Link className="btn gsap-btn" path="/Meet The Stylist" component={Shop}>Contact</Link> */}
// 					{/* </nav> */}
// 					CONTENT
// 					<Router>
// 					<div className="App">
// 						<Nav />
// 						<Switch>
// 					 	<Route path="/" exact>
// 							{ ({ match }) =>  <Login show={match !== null} /> }
// 						</Route>
// 						<Route path="/about">
// 							{ ({ match }) => <StylistForm show={match !== null} /> }
// 						</Route>
// 						<Route path="/shop">
// 							{ ({ match }) => <CustomerProfile show={match !== null} /> }
// 						</Route>
// 						<Route path="/Meet The Stylist">
// 							{ ({ match }) => <Shop show={match !== null} /> }
// 						</Route>
// 						</Switch>
// 					</div>
// </Router>
// 				</div>
// 			</BrowserRouter>

// 		</div>;
// 	}

// }

// export default Routes;
