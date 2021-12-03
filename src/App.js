import React , {useState} from 'react';
import Accordion from './components/Accordion';
import ClickCounter from './components/ClickCounter';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
import SongList from './components/SongList';
const  App = () =>{
	const items=[
		{
			title: 'What is React',
			content: 'react is a front end javascript framework'
		},
		{
			title: 'Why use React',
			content: 'React is a favourite JS library among engineers'
		},
		{
			title: 'How do u use react',
			content: 'You use react by creating components'
		}
	];

	const option=[
		{
			label: 'The color Red',
			value: 'red'
		},
		{
			label: 'The color Green',
			value: 'green'
		},
		{
			label: 'The color Blue',
			value: 'blue'
		}
	];
	const songs = [
		{
			title: 'Malare', 
			duration: '5.03'
		},
		{	
			title: 'Ennavale Ennavale',
		 	duration: '4.55'},
		{
			title: 'Mukkala Mukkala', 
			duration: '4.35'
		},
		{
			title: 'Kannalane',
		 	duration: '6.08'
		}]; 
	const [selected, setSelected] = useState(option[0]);
	// const [showDropDown, setShowDropdown] = useState(true);
	// // return (
	// 	<div>
	// 		<h2>React Hook System</h2>
	// 		{/*<Accordion items={items}/>*/}
	// 		<br/>
	// 		{/*<ClickCounter/>*/}
	// 		{/*<Search/>*/}
	// 		<button onClick={()=>setShowDropdown(!showDropDown)}>Toggle Dropdown</button>
	// 		{showDropDown ? 
	// 			<Dropdown 
	// 				labelVal='Select a Color'
	// 				selection={selected}
	// 				onSelectionChange={setSelected}
	// 				options={option}
	// 			/> : null
	// 		}
	// 	</div>
	// 	);
	// // const showAccordion = () => {
	// // 	if(window.location.pathname === '/'){
	// // 		return <Accordion items={items}/>
	// // 	}
	// // }
	// // const showList = () => {
	// // 	if(window.location.pathname === '/list'){
	// // 		return <Search/>
	// // 	}
	// // }
	// // const showDropdown = () => {
	// // 	if(window.location.pathname === '/dropdown'){
	// // 		return( <Dropdown 
	// // 							labelVal='Select a Color'
	// // 							selection={selected}
	// // 							onSelectionChange={setSelected}
	// // 							options={option}
	// // 							/>
	// // 		);
	// // 	}
	// // }
	// // const showTranslate = () => {
	// // 	if(window.location.pathname === '/translate'){
	// // 		return <Translate/>
	// // 	}
	// // }
	// // return(
	// // 	<div>
	// // 		{showAccordion()}
	// // 		{showTranslate()}
	// // 		{showList()}
	// // 		{showDropdown()}
	// // 	</div>
	// // );

	return(
		<div>
			<Header/>
			<Route path='/'>
				<Accordion items={items}/>
			</Route>
			<Route path='/list'>
				<Search />
			</Route>
			<Route path='/dropdown'>
				 <Dropdown 
					labelVal='Select a Color'
					selection={selected}
					onSelectionChange={setSelected}
					options={option}
				/>
			</Route>
			<Route path='/translate'>
				 <Translate />
			</Route>
			<Route path='/counter'>
				 <ClickCounter />
			</Route>
			<Route path='/songs'>
				<SongList songs={songs}/>
			</Route>
		</div>
	);

}
export default App;