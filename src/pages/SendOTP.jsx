import DclmLogo from "../components/Global/DclmLogo"
import AuthScreenImg from "../components/Global/AuthScreenImg"

const SendOTP = () => {
  return (
    <div className="flex justify-between">
        <div className=" pl-8 pt-8 w-[100%]">
            <DclmLogo />
            <div className="forgot-password-form pt-36 flex justify-center w-[100%]">
                <div>
                    <div className="forgot-password-header mb-8 flex flex-col justify-center text-center">
                        <div className="flex justify-center">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_5_3622)">
                                <rect x="2" y="1" width="56" height="56" rx="12" fill="white"/>
                                <rect x="2.5" y="1.5" width="55" height="55" rx="11.5" stroke="#EAECF0"/>
                                <path d="M18.3333 23.1666L27.859 29.8346C28.6304 30.3746 29.016 30.6446 29.4356 30.7492C29.8061 30.8415 30.1937 30.8415 30.5643 30.7492C30.9838 30.6446 31.3695 30.3746 32.1408 29.8346L41.6666 23.1666M23.9333 38.3333H36.0666C38.0268 38.3333 39.0069 38.3333 39.7556 37.9518C40.4141 37.6163 40.9496 37.0808 41.2851 36.4223C41.6666 35.6736 41.6666 34.6935 41.6666 32.7333V25.2666C41.6666 23.3064 41.6666 22.3264 41.2851 21.5777C40.9496 20.9191 40.4141 20.3837 39.7556 20.0481C39.0069 19.6666 38.0268 19.6666 36.0666 19.6666H23.9333C21.9731 19.6666 20.993 19.6666 20.2443 20.0481C19.5857 20.3837 19.0503 20.9191 18.7147 21.5777C18.3333 22.3264 18.3333 23.3064 18.3333 25.2666V32.7333C18.3333 34.6935 18.3333 35.6736 18.7147 36.4223C19.0503 37.0808 19.5857 37.6163 20.2443 37.9518C20.993 38.3333 21.9731 38.3333 23.9333 38.3333Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_5_3622" x="0" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="1"/>
                                <feGaussianBlur stdDeviation="1"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5_3622"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5_3622" result="shape"/>
                                </filter>
                                </defs>
                            </svg>

                        </div>
                        
                        <h2 className=" font-semibold">OTP verification</h2>
                        <p>Please enter the 5-digit code we sent to olukitibi******@gmail.com</p>
                    </div>

                    <form action="" className="forgot-password-email-input-form mb-8">
                        <div className="forgot-password-email-input mb-6 flex justify-center gap-4">
                            <input className="w-[56px] h-[56px] rounded-lg border-[1px] border-[#98A2B3] p-2 " type="number" />
                            <input className="w-[56px] h-[56px] rounded-lg border-[1px] border-[#98A2B3] p-2 " type="number" />
                            <input className="w-[56px] h-[56px] rounded-lg border-[1px] border-[#98A2B3] p-2 " type="number" />
                            <input className="w-[56px] h-[56px] rounded-lg border-[1px] border-[#98A2B3] p-2 " type="number" />
                            <input className="w-[56px] h-[56px] rounded-lg border-[1px] border-[#98A2B3] p-2 " type="number" />
                        </div>
                        <button className="forgot-password-email-submit w-[100%] text-[#fff] text-center font-semibold rounded-lg bg-[#0D5EBA] py-[10px] mb-8 " type="submit">
                            <span>Verify OTP</span>
                        </button>
                        <div className="sign-up-link text-center">
                            <span>Didn’t receive the email? </span>
                            <span className="text-[#0D5EBA] font-semibold">Click to resend</span>
                        </div>
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

export default SendOTP