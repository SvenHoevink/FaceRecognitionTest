import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const particleOptions = {
	particles: {
		number: {
			value: 160,
			density: {
				enable: true,
				value_area: 450
			}
		},
		color: {
			value: '#ffffff'
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000'
			},
			polygon: {
				nb_sides: 5
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100
			}
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false
			}
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 4,
				size_min: 0.3,
				sync: false
			}
		},
		line_linked: {
			enable: false,
			distance: 150,
			color: '#ffffff',
			opacity: 0.4,
			width: 1
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 600
			}
		}
	},
	retina_detect: true
};

const app = new Clarifai.App({
	apiKey: 'e3bb62daba80458aa1822d7d7f03ef88'
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: ''
		};
	}

	onButtonSubmit = () => {
		console.log('click');
		app.models.predict(Clarifai.FACE_DETECT_MODEL, 'https://samples.clarifai.com/face-det.jpg').then(
			function(response) {
				console.log(response);
			},
			function(error) {
				//there was an error
			}
		);
	};

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	render() {
		return (
			<div className="App">
				<Particles params={particleOptions} className="particles" />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm onButtonSubmit={this.onButtonSubmit} inputChange={this.onInputChange} />
				{/* <FaceRecognistion /> */}
			</div>
		);
	}
}

export default App;
