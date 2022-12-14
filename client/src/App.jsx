import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
	Navigate,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const PrivateRoutes = () => {
	const isAuth = false;

	return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>;
};

const RestrictedRoutes = () => {
	const isAuth = false;

	return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard' />}</>;
};

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route element={<PrivateRoutes />}>
					<Route path='/dashboard' element={<Dashboard />} />
				</Route>
				<Route element={<RestrictedRoutes />}>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</Router>
	);
};
export default App;
