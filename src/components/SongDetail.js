import React from 'react';
const SongDetail = ({songSelection}) => {
	return(
		<div className='column five wide'>
			<h3>Details</h3>
			<p>Selected Song:{songSelection.title}</p>
			<p>Duration: {songSelection.duration}</p>
		</div>
	);
}
export default SongDetail;