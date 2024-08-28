import HandIcon from './HandIcon';

// function HandButton({value, onClick}){
//    const handleClick = function(){return onClick(value)}
/*return <button onClick={handleClick}>
         <HandIcon value={value} />
         </button> }*/

// export default HandButton;

function HandButton({ value, onClick }) {
    const handleClick = () => onClick(value);
    return (
      <button onClick={handleClick}>
        <HandIcon value={value} />
      </button>
    );
  }
  
  export default HandButton;