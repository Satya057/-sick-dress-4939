import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../src/Components/RegisterAndLogin/login/LoginPage";
import RegisterPage from "../src/Components/RegisterAndLogin/register/RegisterPage";
import OtpPage from "../src/Components/RegisterAndLogin/otp/OtpPage";
  import Content  from "../src/Components/Footer/Content";
 import Navbar from "./Components/LandingPage/Navbar";
import Body from "./Components/HomePage/HomePageBody/Body";
import RequiredAuth from "./ReqAuth/RequiredAuth";
import Jobs from "./Components/HomePage/HomePageBody/Jobs";

function App() {
	return (
		<div className="App">
			<Routes>
				
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/otp" element={<OtpPage />} />
				 <Route path="/Footer" element={<Content />} /> 
				 <Route path="/HomePageBody" element={<Jobs />} /> 
				 		 
				<Route path="/" element={<Navbar />}></Route>
				<Route
					path="/home"
					element={
						<RequiredAuth>
							<Body />
						</RequiredAuth>
					}
				/>
				
			</Routes>
		</div>
	);
}

export default App;
