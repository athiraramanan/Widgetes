import React ,{useState} from 'react';
const ClickCounter =()=>{
	const [count,setCount] =useState(0)
	const onButtonClick =()=>{
		setCount(count+1)
	}
	return(
		<div>
			<div><button onClick={onButtonClick}>Click Me</button></div>
			<h4>Click Count: {count}</h4>
		</div>
	);
}
export default ClickCounter;