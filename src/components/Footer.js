import React from 'react';
import dd from './photo/dd.png';
import gooo from './photo/gooo.png';
import mm from './photo/mm.png';


function Footer() {
    return (
        <div className="bottom bg-dark ">
		<div className="container">
		<div className="bottom-menu">
			<div className="first-text text-light pt-4">
				<p>Home|Terms and Conditions </p>
				<p>Copyright @ 2016 demo streaming.All rights reserved  </p>
			</div>
			<div className="icon flex ">
				<div className="left-icon flex">
					<i className="fab fa-twitter "></i>
					<i className="fab fa-facebook "></i>
					<i className="fab fa-instagram "></i>
				</div>
				<div className="right-icon flex pb-4">
					<img className="imagess " src={dd} alt="Logo"/>
					<img className="imagess " src={gooo} alt="Logo"/>
					<img className="imagess " src={mm} alt="Logo"/>
				</div>
			</div>
		</div>
	</div>

        </div>
    );
}

export default Footer;

