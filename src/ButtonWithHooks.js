import React, {useState} from 'react'


function ButtonWithHooks() {
    
    const [greeting, setGreeting] = useState({key1:'Hello2', key2:'Ciao'}); 
    const [title, setTitle] = useState('2013') 
    
    return (
        <div>
            <h2>{title}</h2>
            <p>{greeting.key1}</p>
            <p>{greeting.key2}</p>
            <button onClick={() => setGreeting({key1:"bye2", key2:"ciao2"})}>Click ME!</button>
            <button onClick={() => setTitle("2008")}>Click ME!</button>
        </div>
    )
}

export default ButtonWithHooks
