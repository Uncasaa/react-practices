import Button from './Button';


const buttonListWithFor = () =>{
    const tenButton = [];

    for (let i = 0; i < 10; i++) {
        tenButton.push(<Button key={i} />)
    }

    return <div>{tenButton}</div>;

}



export default buttonListWithFor;




//button komponenst ide, 10x 
//10x jelenjen meg kompononens, 10felekeppen