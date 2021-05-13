export default function Login () {

    return (
        <div className="login-container">
            <div className="form-container">
            <form action="submit">
                <label htmlFor="" className="username">Username</label>
                <input type="text" />
                <label htmlFor="" className="password">Password</label>
                <input type="text" />
                <button>Submit</button>
            </form>
            </div>
        </div>
    )
}