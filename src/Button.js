const buttonClick = ()=> {
    document.querySelectorAll(".App").insertAdjacentHTML('beforeend', '<div>Click!</div>');
}

const Button = props => {
    
    return <button onClick={buttonClick} >Click here to vote for {props.userName}</button>;
    
    
    //const {buttonText}= props;
    //<button onClick={clickEvent}>Click button</button>

    
}
//const Button = (props) => <button onClick={buttonClick}>{props.text}</button>

export default Button;