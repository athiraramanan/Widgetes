// https://cloud.google.com/translate/docs/reference/rest/v2/translate
// Form more reference check this site
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('');
	const [debouncedText, setdebouncedText] = useState(text);

	// This one is used to avoid the calling of api when typing every single character
	// so as per this if the text is not typing after 500ms then only it call the api
	useEffect(()=>{
		const timerId= setTimeout(()=>{
			setdebouncedText(text)
		}, 500);
		return()=>{
			clearTimeout(timerId);
		};
	},[text]);

  useEffect(() => {
  	// When ever we make a request we cant use the 'async' directly inside the 
  	// useeffect param so we can wrap the request inside the other fucntion 
  	const doTranslation = async () => {
  		const {data} = await axios.post(
	      'https://translation.googleapis.com/language/translate/v2',
	      {},
	      {
	        params: {
	          // q: text,
	          q: debouncedText,
	          target: language.value,
	          key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
	        },
	      }
    	);
    	setTranslated(data.data.translations[0].translatedText)
  	}

    doTranslation();
  }, [language, debouncedText]);

  return(
  	<div className='ui header'>
  		<h1>{translated}</h1>
  	</div>
  );
};

export default Convert;
