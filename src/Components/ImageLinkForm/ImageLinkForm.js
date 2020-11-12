import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ inputChange, onButtonSubmit }) => {
	return (
		<div className="">
			<p className="f3 white">{'This magic brain will detect faces in your pictures. Give it a try!'}</p>
			<div className="center">
				<div className="form pa4 br3 shadow-5 center">
					<input onChange={inputChange} type="text" className="f4 pa2 w-70 center" />
					<button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white">
						{'Detect'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
