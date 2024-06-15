import DashSidebar from "../components/Dashboard/DashSidebar"
import SearchBar from "../components/Dashboard/SearchBar"


const WelcomeDash = () => {

   

  return (
    <div className='flex gap-0'>
        <DashSidebar />
        <div className="dashMain w-[100%] px-6 pt-3">
            <SearchBar />
            <div className="welcome-back-message mb-[22px] flex justify-between">
                <div className="welcome-message">
                    <h2 className="text-[24px] font-semibold">Welcome back, David</h2>
                    <p className="text-[#475367] text-[16px]">Track and manage all information of user accounts</p>
                </div>
                <div className="welcome-date flex gap-3 px-5 py-4 border-[1px] rounded-xl border-[#E4E7EC]">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="20" fill="#F0F2F5"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 10.8333C17.1269 10.8333 17.5 11.2063 17.5 11.6666V12.4999H22.5V11.6666C22.5 11.2063 22.8731 10.8333 23.3333 10.8333C23.7936 10.8333 24.1667 11.2063 24.1667 11.6666V12.4999H25C26.8409 12.4999 28.3333 13.9923 28.3333 15.8333V24.9999C28.3333 26.8409 26.8409 28.3333 25 28.3333H15C13.159 28.3333 11.6667 26.8409 11.6667 24.9999V15.8333C11.6667 13.9923 13.159 12.4999 15 12.4999H15.8333V11.6666C15.8333 11.2063 16.2064 10.8333 16.6667 10.8333ZM22.5 14.1666C22.5 14.6268 22.8731 14.9999 23.3333 14.9999C23.7936 14.9999 24.1667 14.6268 24.1667 14.1666H25C25.9205 14.1666 26.6667 14.9128 26.6667 15.8333V16.2499H13.3333V15.8333C13.3333 14.9128 14.0795 14.1666 15 14.1666H15.8333C15.8333 14.6268 16.2064 14.9999 16.6667 14.9999C17.1269 14.9999 17.5 14.6268 17.5 14.1666H22.5ZM26.6667 17.9166H13.3333V24.9999C13.3333 25.9204 14.0795 26.6666 15 26.6666H25C25.9205 26.6666 26.6667 25.9204 26.6667 24.9999V17.9166Z" fill="#344054"/>
                    </svg>
                    <div className="main-date">
                        <p className="text-[#475367] ">Today’s Date</p>
                        <p className="text-[#344054] font-semibold">
                            1st April, 2024
                        </p>
                    </div>

                </div>
            </div>

            <div className="user-leader-admin-count mb-6 flex justify-between">
                <div className="user-count p-4 border-[1px] border-[#E4E7EC] rounded-xl flex items-center gap-28 max-[1320px]:gap-10">
                    <div className="">
                        <span className="text-[#475367] text-[14px]">Total Number of Users</span>
                        <p className="font-semibold text-[20px]">420</p>
                    </div> 
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.662762" y="0.854442" width="40.291" height="40.291" rx="20.1455" fill="white"/>
                        <rect x="0.662762" y="0.854442" width="40.291" height="40.291" rx="20.1455" stroke="#E4E7EC" strokeWidth="1.0331"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8083 14.9736C18.9064 14.9736 17.3646 16.5154 17.3646 18.4173C17.3646 20.3192 18.9064 21.861 20.8083 21.861C22.7102 21.861 24.252 20.3192 24.252 18.4173C24.252 16.5154 22.7102 14.9736 20.8083 14.9736ZM19.0865 18.4173C19.0865 17.4664 19.8573 16.6955 20.8083 16.6955C21.7592 16.6955 22.5301 17.4664 22.5301 18.4173C22.5301 19.3683 21.7592 20.1392 20.8083 20.1392C19.8573 20.1392 19.0865 19.3683 19.0865 18.4173Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8083 29.6093C19.8295 29.6093 18.4183 29.3779 17.3473 28.8858C16.8219 28.6443 16.2582 28.2862 15.9257 27.7505C15.7501 27.4676 15.6392 27.1342 15.6429 26.7631C15.6465 26.3956 15.7617 26.047 15.9505 25.7276C16.8135 24.267 18.6039 22.7219 20.8083 22.7219C23.0126 22.7219 24.8031 24.267 25.6661 25.7276C25.8549 26.047 25.9701 26.3956 25.9737 26.7631C25.9773 27.1342 25.8664 27.4676 25.6909 27.7505C25.3584 28.2862 24.7947 28.6443 24.2693 28.8858C23.1983 29.3779 21.7871 29.6093 20.8083 29.6093ZM17.4328 26.6036C17.3669 26.7151 17.3647 26.7705 17.3646 26.78C17.3645 26.7862 17.3643 26.8033 17.3886 26.8425C17.457 26.9526 17.6555 27.1325 18.0662 27.3212C18.8674 27.6894 20.0238 27.8874 20.8083 27.8874C21.5927 27.8874 22.7491 27.6894 23.5503 27.3212C23.9611 27.1325 24.1596 26.9526 24.2279 26.8425C24.2523 26.8033 24.252 26.7866 24.252 26.7804C24.2519 26.771 24.2497 26.7151 24.1837 26.6036C23.5146 25.4712 22.206 24.4438 20.8083 24.4438C19.4106 24.4438 18.102 25.4712 17.4328 26.6036Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.6296 21.0001C12.6296 19.5737 13.7859 18.4173 15.2123 18.4173C16.6387 18.4173 17.7951 19.5737 17.7951 21.0001C17.7951 22.4265 16.6387 23.5828 15.2123 23.5828C13.7859 23.5828 12.6296 22.4265 12.6296 21.0001ZM15.2123 20.1392C14.7368 20.1392 14.3514 20.5246 14.3514 21.0001C14.3514 21.4755 14.7368 21.861 15.2123 21.861C15.6878 21.861 16.0732 21.4755 16.0732 21.0001C16.0732 20.5246 15.6878 20.1392 15.2123 20.1392Z" fill="black"/>
                        <path d="M12.9702 27.4093C12.7589 27.8352 12.2422 28.0091 11.8163 27.7977C11.3904 27.5863 11.2165 27.0696 11.4279 26.6438C11.7442 26.0065 12.223 25.3667 12.8252 24.8772C13.4277 24.3874 14.1997 24.0133 15.0807 24.0133C15.5562 24.0133 15.9417 24.3987 15.9417 24.8742C15.9417 25.3497 15.5562 25.7351 15.0807 25.7351C14.7011 25.7351 14.3004 25.8969 13.9113 26.2133C13.5219 26.5297 13.1902 26.9661 12.9702 27.4093Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.0884 21.0001C24.0884 19.5737 25.2448 18.4173 26.6712 18.4173C28.0976 18.4173 29.254 19.5737 29.254 21.0001C29.254 22.4265 28.0976 23.5828 26.6712 23.5828C25.2448 23.5828 24.0884 22.4265 24.0884 21.0001ZM26.6712 20.1392C26.1957 20.1392 25.8103 20.5246 25.8103 21.0001C25.8103 21.4755 26.1957 21.861 26.6712 21.861C27.1467 21.861 27.5321 21.4755 27.5321 21.0001C27.5321 20.5246 27.1467 20.1392 26.6712 20.1392Z" fill="black"/>
                        <path d="M30.1924 26.6438C30.4038 27.0696 30.2299 27.5863 29.804 27.7977C29.3781 28.0091 28.8615 27.8352 28.6501 27.4093C28.4302 26.9661 28.0984 26.5297 27.7091 26.2133C27.32 25.8969 26.9193 25.7351 26.5396 25.7351C26.0642 25.7351 25.6787 25.3497 25.6787 24.8742C25.6787 24.3987 26.0642 24.0133 26.5396 24.0133C27.4207 24.0133 28.1927 24.3874 28.7952 24.8772C29.3974 25.3667 29.8761 26.0065 30.1924 26.6438Z" fill="black"/>
                    </svg>

                    
                </div>
                <div className="leader-count p-4 border-[1px] border-[#E4E7EC] rounded-xl flex items-center gap-28 max-[1320px]:gap-10">
                    <div className="">
                        <span className="text-[#475367] text-[14px]">Total Number of Leaders</span>
                        <p className="font-semibold text-[20px]">150</p>
                    </div> 
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.662762" y="0.854442" width="40.291" height="40.291" rx="20.1455" fill="white"/>
                        <rect x="0.662762" y="0.854442" width="40.291" height="40.291" rx="20.1455" stroke="#E4E7EC" strokeWidth="1.0331"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8083 12.3909C18.4309 12.3909 16.5037 14.3181 16.5037 16.6955C16.5037 19.0728 18.4309 21.0001 20.8083 21.0001C23.1856 21.0001 25.1129 19.0728 25.1129 16.6955C25.1129 14.3181 23.1856 12.3909 20.8083 12.3909ZM18.2255 16.6955C18.2255 15.269 19.3819 14.1127 20.8083 14.1127C22.2347 14.1127 23.391 15.269 23.391 16.6955C23.391 18.1219 22.2347 19.2782 20.8083 19.2782C19.3819 19.2782 18.2255 18.1219 18.2255 16.6955Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8083 30.4702C19.482 30.4702 17.5625 30.169 16.1209 29.5381C15.4133 29.2284 14.6936 28.7851 14.2754 28.1435C14.0555 27.806 13.9165 27.4085 13.921 26.9647C13.9255 26.525 14.0702 26.1037 14.3134 25.7117C15.4924 23.8115 17.9042 21.861 20.8083 21.861C23.7123 21.861 26.1242 23.8115 27.3031 25.7117C27.5463 26.1037 27.691 26.525 27.6955 26.9647C27.7001 27.4085 27.5611 27.806 27.3412 28.1435C26.923 28.7851 26.2033 29.2284 25.4956 29.5381C24.0541 30.169 22.1345 30.4702 20.8083 30.4702ZM15.7765 26.6195C15.6632 26.8022 15.6434 26.9195 15.6428 26.9824C15.6422 27.0412 15.6573 27.1103 15.718 27.2034C15.861 27.4229 16.2084 27.6969 16.8113 27.9608C17.9909 28.477 19.666 28.7483 20.8083 28.7483C21.9505 28.7483 23.6257 28.477 24.8052 27.9608C25.4081 27.6969 25.7555 27.4229 25.8986 27.2034C25.9593 27.1103 25.9744 27.0412 25.9738 26.9824C25.9731 26.9195 25.9534 26.8022 25.84 26.6195C24.8739 25.0624 22.9471 23.5828 20.8083 23.5828C18.6695 23.5828 16.7426 25.0624 15.7765 26.6195Z" fill="black"/>
                    </svg>

                </div>
                <div className="admin-count p-4 border-[1px] border-[#E4E7EC] rounded-xl flex items-center gap-28 max-[1320px]:gap-10">
                    <div className="">
                        <span className="text-[#475367] text-[14px]">Total Number of Admins</span>
                        <p className="font-semibold text-[20px]">150</p>
                    </div> 
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.662762" y="0.854442" width="40.291" height="40.291" rx="20.1455" fill="white"/>
                        <rect x="0.662762" y="0.854442" width="40.291" height="40.291" rx="20.1455" stroke="#E4E7EC" strokeWidth="1.0331"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8083 12.3909C18.4309 12.3909 16.5037 14.3181 16.5037 16.6955C16.5037 19.0728 18.4309 21.0001 20.8083 21.0001C23.1856 21.0001 25.1129 19.0728 25.1129 16.6955C25.1129 14.3181 23.1856 12.3909 20.8083 12.3909ZM18.2255 16.6955C18.2255 15.269 19.3819 14.1127 20.8083 14.1127C22.2347 14.1127 23.391 15.269 23.391 16.6955C23.391 18.1219 22.2347 19.2782 20.8083 19.2782C19.3819 19.2782 18.2255 18.1219 18.2255 16.6955Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.8083 30.4702C19.482 30.4702 17.5625 30.169 16.1209 29.5381C15.4133 29.2284 14.6936 28.7851 14.2754 28.1435C14.0555 27.806 13.9165 27.4085 13.921 26.9647C13.9255 26.525 14.0702 26.1037 14.3134 25.7117C15.4924 23.8115 17.9042 21.861 20.8083 21.861C23.7123 21.861 26.1242 23.8115 27.3031 25.7117C27.5463 26.1037 27.691 26.525 27.6955 26.9647C27.7001 27.4085 27.5611 27.806 27.3412 28.1435C26.923 28.7851 26.2033 29.2284 25.4956 29.5381C24.0541 30.169 22.1345 30.4702 20.8083 30.4702ZM15.7765 26.6195C15.6632 26.8022 15.6434 26.9195 15.6428 26.9824C15.6422 27.0412 15.6573 27.1103 15.718 27.2034C15.861 27.4229 16.2084 27.6969 16.8113 27.9608C17.9909 28.477 19.666 28.7483 20.8083 28.7483C21.9505 28.7483 23.6257 28.477 24.8052 27.9608C25.4081 27.6969 25.7555 27.4229 25.8986 27.2034C25.9593 27.1103 25.9744 27.0412 25.9738 26.9824C25.9731 26.9195 25.9534 26.8022 25.84 26.6195C24.8739 25.0624 22.9471 23.5828 20.8083 23.5828C18.6695 23.5828 16.7426 25.0624 15.7765 26.6195Z" fill="black"/>
                    </svg>

                </div>
            </div>

            <div className="leadership-congress-module px-4 pt-2 pb-5 mb-4 border-[1px] border-[#E4E7EC] rounded-[10px]">
                <h3 className="text-[#475367] text-[16px] font-semibold">Leadership Strategic Congress</h3>
                <div className="number-count-wrap flex justify-between">
                    <div className="users-number-lsc">
                        <span className="text-[14px]">Number of Users</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="leaders-number-lsc px-20 border-x-[1px] border-x-[#F0F2F5]">
                        <span className="text-[14px]">Number of Leaders</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="admins-number-lsc">
                        <span className="text-[14px]">Number of Admins</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>
                </div>
                
            </div>

            <div className="membership-module px-4 pt-2 pb-5 mb-4 border-[1px]  border-[#E4E7EC] rounded-[10px]">
                <h3 className="text-[#475367] text-[16px] font-semibold">Membership Module</h3>
                <div className="number-count-wrap flex justify-between">
                    <div className="users-number-lsc">
                        <span className="text-[14px]">Number of Users</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="leaders-number-lsc px-20 border-x-[1px] border-x-[#F0F2F5]">
                        <span className="text-[14px]">Number of Leaders</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="admins-number-lsc">
                        <span className="text-[14px]">Number of Admins</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>
                </div>
                
            </div>

            <div className="hcf-module px-4 pt-2 pb-5 mb-4 border-[1px] border-[#E4E7EC] rounded-[10px]">
                <h3 className="text-[#475367] text-[16px] font-semibold">HCF Module</h3>
                <div className="number-count-wrap flex justify-between">
                    <div className="users-number-lsc">
                        <span className="text-[14px]">Number of Users</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="leaders-number-lsc px-20 border-x-[1px] border-x-[#F0F2F5]">
                        <span className="text-[14px]">Number of Leaders</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="admins-number-lsc">
                        <span className="text-[14px]">Number of Admins</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>
                </div>
                
            </div>

            <div className="attendance-module px-4 pt-2 pb-5 mb-4 border-[1px] border-[#E4E7EC] rounded-[10px]">
                <h3 className="text-[#475367] text-[16px] font-semibold">Attendance Module</h3>
                <div className="number-count-wrap flex justify-between">
                    <div className="users-number-lsc">
                        <span className="text-[14px]">Number of Users</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="leaders-number-lsc px-20 border-x-[1px] border-x-[#F0F2F5]">
                        <span className="text-[14px]">Number of Leaders</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="admins-number-lsc">
                        <span className="text-[14px]">Number of Admins</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>
                </div>
                
            </div>

            <div className="marriage-committee px-4 pt-2 pb-5 mb-4 border-[1px] border-[#E4E7EC] rounded-[10px]">
                <h3 className="text-[#475367] text-[16px] font-semibold">Marriage Committee</h3>
                <div className="number-count-wrap flex justify-between">
                    <div className="users-number-lsc">
                        <span className="text-[14px]">Number of Users</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="leaders-number-lsc px-20 border-x-[1px] border-x-[#F0F2F5]">
                        <span className="text-[14px]">Number of Leaders</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>

                    <div className="admins-number-lsc">
                        <span className="text-[14px]">Number of Admins</span>
                        <p className="text-[20px] font-semibold">420</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WelcomeDash