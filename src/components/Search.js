import axios from 'axios'
import React, {useState, useEffect} from 'react';
const Search =() =>{
	const [term, setTerm]= useState('programming');
	const [results, setResults]=useState([]);
	
	console.log(results)

	// Solution 1
	useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    if (term && !results.length) {
      search();
    } 
    else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

	//Solution 2
	// useEffect(()=>{
	// 	(async () => {
	//  Same as above only thing removing the assignment
	// and also removes the calling
	// 	})();
	// }, [term]); 

	


	const renderedList = results.map((result) =>{
		return(
			<div key={result.pageid} className='item'>
			<div className='right floated content'>
				<a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
				</div>
				<div className='content'>
					<div className='header'>
						{result.title}
					</div>		
				</div>
				{/*IF YOU ADD JUST ADD THE {result.snippet} THEN OUT PUT CONTAINS THE HTML ELEMENTS ALSO LIKE SPAN ETC.. SO WE ARE ADDING SPECIAL SYNTAX*/}{/*projects Time management <span class="searchmatch">Program</span>, a part of planning <span class="searchmatch">Programming</span> (music), generating music electronicallyRadio <span class="searchmatch">programming</span>, act of scheduling content*/}{/*{result.snippet}*/}
				<span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
				{/*the above content now projects Time management Program, a part of planning Programming(music), generating music electronically Radio programming, act of scheduling content*/}
			</div>
		);
	});

	return (
		<div>
			<div className='ui form'>
				<div className='field'>
					<label>Enter Search Term</label>
					<input 
						className='input' 
						value={term}
						style={{width: '250px'}} 
						onChange={(e) =>setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className='ui celled list'>{renderedList}</div>
		</div>
	);

}
export default Search;