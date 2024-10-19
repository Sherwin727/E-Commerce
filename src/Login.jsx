
function Login ()
{
    return(
        <div>
          
            <div className="col-sm-6 offset-sm-3">
            <h1>Login Page</h1>
            <input type="text" className="form-control" placeholder="Email"/>
            <br />
            <input type="text" className="form-control" placeholder="Password"/>
            <br />
            <button className="btn btn-dark">Login</button>
            </div>
        </div>
    )
}

export default Login