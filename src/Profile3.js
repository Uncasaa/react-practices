function User (firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function (){
        return `${this.firstName} ${this.lastName}`
    }
}


const profile3 = () => {
    const newUser = new User('Andor', 'Korcsog')
    const newUser2 = new User('Zsolt', 'Farkas')    
    

    return <div>
        {/*<h2>{newUser.firstName}</h2>
        <h3>{newUser.lastName}</h3>*/}
        <h2>{newUser.fullName()}</h2>
        <h2>{newUser2.fullName()}</h2>


    </div>

} 



export default profile3;