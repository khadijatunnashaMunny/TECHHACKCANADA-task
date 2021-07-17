import React, { useState }  from 'react';
import Sample from './Feed/Sample.json'

function Movie() {
  

    return (
     
        <div className="">
          <div className="body-part bg-dark">
	        	<div className="container">
		           	<div className="series text-light navbar-brand ">
			             	<p className="h4 pt-2 pb-2">Popular movie</p>
		            </div>
	        	</div>
      	</div>
       <div className="container">
      		<div className="row flex-container">
              <div className="content pt-4">

            {Sample.sort(function (a, b) {
                return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
                }).slice(0,78).filter(post =>
                post.releaseYear >= 2010 && post.programType==="movie").map(filteredmovie => (
                    <div  className="boxx">
                        <div className="">
                            <img className="images" src={filteredmovie.images['Poster Art'].url} alt="Logo"/>
                        </div>
                         <p className="stitle">{filteredmovie.title}</p>
                    </div>
            ))}
            </div>
            </div>
           </div>
        </div>
    );
}

export default Movie;

