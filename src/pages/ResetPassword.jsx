import DclmLogo from "../components/Global/DclmLogo"
import AuthScreenImg from "../components/Global/AuthScreenImg"

const ResetPassword = () => {
  return (
    <div className="flex justify-between">
        <div className=" pl-8 pt-8 w-[100%]">
            <DclmLogo />
            <div className="reset-password-form pt-36 flex justify-center w-[100%]">
                <div>
                    <div className="reset-password-header mb-8 flex flex-col justify-center text-center">
                        <div className="flex justify-center">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_5_3676)">
                                <rect x="2" y="1" width="56" height="56" rx="12" fill="white"/>
                                <rect x="2.5" y="1.5" width="55" height="55" rx="11.5" stroke="#EAECF0"/>
                                <path d="M35.8334 26.6667V24.3333C35.8334 21.1117 33.2217 18.5 30.0001 18.5C26.7784 18.5 24.1667 21.1117 24.1667 24.3333V26.6667M30.0001 31.9167V34.25M26.2667 39.5H33.7334C35.6936 39.5 36.6737 39.5 37.4224 39.1185C38.081 38.783 38.6164 38.2475 38.9519 37.589C39.3334 36.8403 39.3334 35.8602 39.3334 33.9V32.2667C39.3334 30.3065 39.3334 29.3264 38.9519 28.5777C38.6164 27.9191 38.081 27.3837 37.4224 27.0481C36.6737 26.6667 35.6936 26.6667 33.7334 26.6667H26.2667C24.3066 26.6667 23.3265 26.6667 22.5778 27.0481C21.9192 27.3837 21.3838 27.9191 21.0482 28.5777C20.6667 29.3264 20.6667 30.3065 20.6667 32.2667V33.9C20.6667 35.8602 20.6667 36.8403 21.0482 37.589C21.3838 38.2475 21.9192 38.783 22.5778 39.1185C23.3265 39.5 24.3066 39.5 26.2667 39.5Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_5_3676" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_3676"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_3676" result="shape"/>
                                </filter>
                                </defs>
                            </svg>

                        </div>
                        
                        <h2 className=" font-semibold">Set new password</h2>
                        <p>Your new password must be different from previously used passwords.</p>
                    </div>

                    <form action="" className="reset-password-input-form mb-8">
                        <div className="reset-password-first-input mb-6">
                            <h3 className="text-[14px] font-medium">Password</h3>
                            <input className="w-[100%] rounded-lg border-[1px] border-[#98A2B3] p-4 " placeholder="Enter new password" type="password" />
                        </div>
                        <div className="reset-password-confirm-input mb-6">
                            <h3 className="text-[14px] font-medium">Confirm Password</h3>
                            <input className="w-[100%] rounded-lg border-[1px] border-[#98A2B3] p-4 " placeholder="Confirm new password" type="password" />
                        </div>

                        <div className="password-criteria">
                            <div className="password-criteria-one flex gap-2 mb-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" rx="10" fill="#D0D5DD"/>
                                    <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Must be at least 8 characters</span>
                            </div>

                            <div className="password-criteria-one flex gap-2 mb-6">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" rx="10" fill="#D0D5DD"/>
                                    <path d="M6.25 10L8.75 12.5L13.75 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Must contain one special character</span>
                            </div>
                        </div>
                        <button className="new-password-submit w-[100%] text-[#fff] text-center font-semibold rounded-lg bg-[#0D5EBA] py-[10px] mb-8 " type="submit">
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

export default ResetPassword