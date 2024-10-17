
function Register ()
{
    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" className="form-control" placeholder="Name"/>
            <br />
            <input type="text" className="form-control" placeholder="Email"/>
            <br />
            <input type="text" className="form-control" placeholder="Password"/>
            <br />
            <button className="btn btn-dark">Register</button>
            
        </div>
        
    )
}

export default Register