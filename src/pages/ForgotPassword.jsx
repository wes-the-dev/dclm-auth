
import DclmLogo from "../components/Global/DclmLogo"
import AuthScreenImg from "../components/Global/AuthScreenImg"
const ForgotPassword = () => {
  return (
    <div className="flex justify-between">
        <div className=" pl-8 pt-8 w-[100%]">
            <DclmLogo />
            <div className="forgot-password-form pt-36 flex justify-center w-[100%]">
                <div>
                    <div className="forgot-password-header mb-8 flex flex-col justify-center text-center">
                        <div className="flex justify-center">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_5_3576)">
                                <rect x="2" y="1" width="56" height="56" rx="12" fill="white"/>
                                <rect x="2.5" y="1.5" width="55" height="55" rx="11.5" stroke="#EAECF0"/>
                                <path d="M35.8333 25.4999C35.8333 24.9028 35.6055 24.3057 35.1499 23.8501C34.6943 23.3945 34.0972 23.1667 33.5 23.1667M33.5 32.5C37.366 32.5 40.5 29.366 40.5 25.5C40.5 21.634 37.366 18.5 33.5 18.5C29.634 18.5 26.5 21.634 26.5 25.5C26.5 25.8193 26.5214 26.1336 26.5628 26.4415C26.6309 26.948 26.6649 27.2013 26.642 27.3615C26.6181 27.5284 26.5877 27.6184 26.5055 27.7655C26.4265 27.9068 26.2873 28.046 26.009 28.3243L20.0467 34.2866C19.845 34.4884 19.7441 34.5893 19.6719 34.707C19.608 34.8114 19.5608 34.9252 19.5322 35.0442C19.5 35.1785 19.5 35.3212 19.5 35.6065V37.6333C19.5 38.2867 19.5 38.6134 19.6272 38.863C19.739 39.0825 19.9175 39.261 20.137 39.3728C20.3866 39.5 20.7133 39.5 21.3667 39.5H24.1667V37.1667H26.5V34.8333H28.8333L30.6757 32.991C30.954 32.7127 31.0932 32.5735 31.2345 32.4945C31.3816 32.4123 31.4716 32.3819 31.6385 32.358C31.7987 32.3351 32.052 32.3691 32.5585 32.4372C32.8664 32.4786 33.1807 32.5 33.5 32.5Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_5_3576" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_3576"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_3576" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        
                        <h2 className=" font-semibold">Forgot password?</h2>
                        <p>No worries, we’ll send you reset instructions</p>
                    </div>

                    <form action="" className="forgot-password-email-input-form mb-8">
                        <div className="forgot-password-email-input mb-6">
                            <h3 className="text-[14px] font-medium">Email Address</h3>
                            <input className="w-[100%] rounded-lg border-[1px] border-[#98A2B3] p-4 " placeholder="Enter Email Address" type="email" />
                        </div>
                        <button className="forgot-password-email-submit w-[100%] text-[#fff] text-center font-semibold rounded-lg bg-[#0D5EBA] py-[10px] mb-8 " type="submit">
                            <span>Reset Password</span>
                        </button>
                    </form>

                    <div className="back-to-login flex justify-center gap-2 items-center">
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3334 6.99996H1.66669M1.66669 6.99996L7.50002 12.8333M1.66669 6.99996L7.50002 1.16663" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>Back to log in</span>

                    </div>
                    

                </div>
            </div>
        </div>

        <AuthScreenImg />
    </div>
  )
}

export default ForgotPassword