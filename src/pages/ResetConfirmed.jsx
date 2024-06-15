import DclmLogo from "../components/Global/DclmLogo"
import AuthScreenImg from "../components/Global/AuthScreenImg"

const ResetConfirmed = () => {
  return (
    <div className="flex justify-between">
        <div className=" pl-8 pt-8 w-[100%]">
            <DclmLogo />
            <div className="password-reset-confirmed pt-36 flex justify-center w-[100%]">
                <div>
                    <div className="password-reset-confirmed mb-8 flex flex-col justify-center text-center">
                        <div className="flex justify-center">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_5_3741)">
                                <rect x="2" y="1" width="56" height="56" rx="12" fill="white"/>
                                <rect x="2.5" y="1.5" width="55" height="55" rx="11.5" stroke="#EAECF0"/>
                                <path d="M24.7502 29L28.2502 32.5L35.2502 25.5M41.6668 29C41.6668 35.4434 36.4435 40.6667 30.0002 40.6667C23.5568 40.6667 18.3335 35.4434 18.3335 29C18.3335 22.5567 23.5568 17.3334 30.0002 17.3334C36.4435 17.3334 41.6668 22.5567 41.6668 29Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_5_3741" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_3741"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_3741" result="shape"/>
                                </filter>
                                </defs>
                            </svg>


                        </div>
                        
                        <h2 className=" font-semibold">Password reset</h2>
                        <p>Your password has been successfully reset. Click below to log in automatically.</p>
                    </div>

                        <button className="redirect-login w-[100%] text-[#fff] text-center font-semibold rounded-lg bg-[#0D5EBA] py-[10px] mb-8 " type="submit">
                            <span>Continue</span>
                        </button>

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

export default ResetConfirmed