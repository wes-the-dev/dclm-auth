
import DclmLogo from "../components/Global/DclmLogo"
import AuthScreenImg from "../components/Global/AuthScreenImg"

const Login = () => {
  return (
    <div className="flex justify-between">
        <div className="pl-8 pt-8 w-[100%]">

            <DclmLogo />

            <div className="login-form pt-36 flex justify-center w-[100%]">

                <div>

                    <div className="form-header mb-8">
                        <h2 className="text-[30px] font-semibold">Log in</h2>
                        <p>Welcome back! Please enter your credentials.</p>
                    </div>

                    <form className="main-form">
                        <div className="username_email_membid mb-5">
                            <h3 className="font-medium">Username/Email/Membership ID</h3>
                            <input className="w-[100%] rounded-lg border-[1px] border-[#98A2B3] p-4 " placeholder="Enter username/email/membership ID" type="text" />
                        </div>

                        <div className="user-password mb-6">
                            <h3 className="font-medium">Password</h3>
                            <input className="w-[100%] rounded-lg border-[1px] border-[#98A2B3] p-4 " placeholder="Enter Password" type="password" />
                        </div>

                        <div className="remember-me-forgot-pass flex justify-between mb-8">
                            <div className="remember-me flex gap-[2px]">
                                <input type="checkbox" name="remember-me" id="remember-me" />
                                <span className="font-medium">Remember for 30 days</span>
                            </div>
                            <div>
                                <span className="text-[#0D5EBA] font-semibold">Forgot Password?</span>
                            </div>
                        </div>
                        <div className="login-auth-form-submit text-[#fff] text-center font-semibold rounded-lg bg-[#0D5EBA] py-[10px] mb-8">
                            <span>Sign In</span>
                        </div>

                        <div className="sign-up-link text-center">
                            <span>Don’t have an account? </span>
                            <span className="text-[#0D5EBA] font-semibold">Sign Up</span>
                        </div>
                    </form>
                </div>
                  
            </div>

        </div>
        <AuthScreenImg />
    </div>
  )
}

export default Login