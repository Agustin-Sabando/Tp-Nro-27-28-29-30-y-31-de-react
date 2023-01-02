import React from 'react';

import ContentRowMovies from './ContentRowMovies';
import ContentRowCenter from './ContentRowCenter';
import CuadroPeliculas from './CuadroPeliculas';

function ContentRowTop(){
    return(
        <React.Fragment>
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Tablero</h1>
					</div>
					<ContentRowMovies />
					<ContentRowCenter />
					<CuadroPeliculas />
				</div>
        </React.Fragment>
    )

}
export default ContentRowTop;