import Header from "../components/Header"

function SignUp() {
  return (
    <div className="pages">
        <Header/>
        <h2>Create New Account</h2>
        <form>
            <div>
                <div className="label">
                    <img src="./assets/images/Person.svg" alt="" />
                    <label htmlFor="email">Phone Number / Email</label>
                </div>
                <input className="text--input" type="email" id="email" name="email" placeholder="Enter your phone number / email" />
            </div>
            <div>
                <div className="label">
                    <img src="./assets/images/Lock.svg" alt="" />
                    <label htmlFor="password">Password</label>
                </div>
                <input className="text--input" type="password" id="password" name="password" placeholder="Enter your password" />
                <img src="./assets/images/Hide.svg" alt="" className="hide"/>
            </div>
            <button className="sign-up">
                SIGN UP
                <img src="./assets/images/Chevron Right.svg" alt="" className="chevronRight"/>
            </button>
        </form>
        <p className="or">OR</p>
        <button>
            <img src="./assets/images/devicon_google.svg" alt="" className="google"/>
            Continue with Google
        </button>
        <button>
            <img src="./assets/images/logos_facebook.svg" alt="" className="facebook"/>
            Continue with Facebook
        </button>
    </div>
  )
}

export default SignUp