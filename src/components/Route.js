//  If we are not using JSX component like div, h1 etc... the no need to import the React
import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
	const [currentPath, setCurrentPath]=useState(window.location.pathname)
	useEffect(()=>{
		const onLocationChange=()=> {
			console.log('Location Change')
			setCurrentPath(window.location.pathname)
		};
		window.addEventListener('popstate', onLocationChange);
		return () =>{
			window.removeEventListener('popstate', onLocationChange);
		}
	},[]);
	return window.location.pathname === path ? children : null ;
	// these line also same as above we can use eithr currentPath
	// or window.location.pathname both are same now because its
	// updated using stateSystem
	// return currentPath === path ? children : null ;
	
}
export default Route;