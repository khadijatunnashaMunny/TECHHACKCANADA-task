import React from 'react';
import Sample from './Feed/Sample.json'

function Series() {
    return (
        <div className="">
          <div className="body-part bg-dark">
	        	<div className="container">
		           	<div className="series text-light navbar-brand ">
			             	<p className="h4 pt-2 pb-2">Popular series</p>
		            </div>
	        	</div>
      	</div>

<div className="container">

      		<div className="row flex-container">
              <div className="content pt-4">

            {Sample.sort(function (a, b) {
                return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                }).slice(0,36).filter(post =>
                post.releaseYear >= 2010 && post.programType==="series").map(filteredseries => (
                    <div  className="boxx">
                        <div className="">
                            <img className="images" src={filteredseries.images['Poster Art'].url} alt="Logo"/>
                        </div>
                         <p className="stitle">{filteredseries.title}</p>
                    </div>
            ))}
            </div>
            </div>
            </div>
      
        </div>
    );
}

export default Series;

