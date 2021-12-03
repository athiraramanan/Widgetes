import React, {useState, useEffect, useRef} from 'react';
const Dropdown = ({options, selection, onSelectionChange, labelVal}) =>{
  const [open, setOpen]=useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick= (event) =>
      {
        if (ref.current.contains(event.target))
        {
          return;
        }
        setOpen(false);
      }
      document.body.addEventListener("click", onBodyClick,{ capture: true });
    return() => {
      document.body.removeEventListener('click', onBodyClick, { capture: true});
    };

  }, []);

	const renderdOptions= options.map((option)=>{
    if(option.value===selection.value) {
      return null;
    }
		return(
      <div 
        key={option.value} 
        className='item'
        onClick={()=>{
          onSelectionChange(option);
          }
        }
      >
				{option.label}
			</div>
		);
	})

	return (
    <div ref={ref}className="ui form">
      <div  className="field">
        <label className="label">{labelVal}</label>
        <div 
          onClick={()=>{
            setOpen(!open)}
            } 
          className={`ui selection dropdown ${open? 'visible active' : ''}`}  
          style={{width: '300px'}}>
          <i className="dropdown icon"></i>
          <div className="text">{selection.label}</div>
          <div className={`menu ${open? 'visible transition' : ''}`}>{renderdOptions}</div>
        </div>
      </div>
    </div>
  );
}
export default Dropdown;