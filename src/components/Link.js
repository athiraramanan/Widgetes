import React from 'react';
const Link = ({className, href, children}) => {

	const onClick =(event) =>{
		// if you are press on ctrl key and click on control it will open 
		// the link in new tab
		if (event.metaKey || event.ctrlKey)
		{
			return;
		}
		// to avoid the page reload every time when click on link
		event.preventDefault();
		// to chenge the url
		window.history.pushState({},'',href);
		// to change the component based on url and 
		// also write the listen event inside the router component also
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent)

	};

	return (
		<a onClick={onClick} className={className} href={href}>{children}
		</a>
	);
}
export default Link;