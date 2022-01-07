import Button from './Button';

const buttonListWithMap = _ => {
    
    const users = ['Richard', 'Flora', 'Aron', 'Betti', 'Johnny'];

    return <div>{users.map((userName,i) => <Button key={i} userName={userName} />)}</div>

}

export default buttonListWithMap;
