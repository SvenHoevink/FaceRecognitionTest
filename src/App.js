import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Logo />
			<ImageLinkForm />
			{/* <FaceRecognistion /> */}
		</div>
	);
}

export default App;
