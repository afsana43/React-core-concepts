export default function User({user}){
    const {name, email} = user;
    return(
        <div style={{border: '1px solid red' , marginTop: '25px'}}>
            <h2>Name: {name}</h2> 
            <h4>Email: {email}</h4>
        </div>
    )
}