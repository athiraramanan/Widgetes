import React, {useState} from 'react';
import SongDetail from './SongDetail';

const SongList = ({songs}) => {
	const [selectedSong, setSelectedSong] = useState()
	const renderSongs = songs.map((song) =>{
		return(
			<div className='ui divided list'>
				<div className='item' key={song.title}>
						{song.title}
					<div className='right floated content'>
							<button 
								onClick={(e) => setSelectedSong(song)}
								className='ui button primary'
							>
								Select
							</button>
					</div>
				</div>
			</div>
		);
	})
	if(!selectedSong){
		return(
			<div>
				{renderSongs}
				<h3>Please select a song</h3>
			</div>
		);
	}
	return(
		<div>
			{renderSongs}
			<SongDetail songSelection={selectedSong}/>
		</div>
	);
}

export default SongList;