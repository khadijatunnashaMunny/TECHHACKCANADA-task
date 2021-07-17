
import React from 'react';
import '../App.css';
import Background from './photo/movi.jpg';


function Body() {
    return (
    <div className="">
	  <div className="body-part bg-dark">
	        	<div className="container">
		           	<div className="series text-light navbar-brand ">
			             	<p className="h4 pt-2 pb-2">Popular titles</p>
		            </div>
	        	</div>
      	</div>
		  <div className="content pt-4">
		<div className="container">
			<div className="row flex-container">
			    <div style={{ background: `url(${Background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="box">
                    <a href="/movie"><p className="text-dark h2 textt pt-2">Movie</p></a>
		     	</div>
			    <div   style={{ background: `url(${Background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="box">
			    	<a href="/series"><p className="text-dark h2 textt pt-2">Series</p></a>
			    </div>
	        </div>
	    </div>
		</div>
    </div>
      
    );
}

export default Body;

