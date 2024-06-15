import DashSidebar from "../components/Dashboard/DashSidebar"
import SearchBar from "../components/Dashboard/SearchBar"
import createProfilePic from '../assets/img/create-account-profile-pic.png'

const DashCreateAccount = () => {
  return (
    <div className="flex gap-0">
        <DashSidebar/>
        <div className="px-6 pt-3 w-[100%]">
            <SearchBar />
            <div className="dash-create-account-main-header border-y-[1px] border-y-[#E4E7EC] -mx-6 mb-6 pl-9 py-3 flex items-center gap-6">
                <div className="dash-create-account-backBtn flex items-center gap-2 pr-6 border-r-[1px] border-r-[#E4E7EC]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.59735 11.1422C5.99335 10.5004 5.99335 9.4994 6.59735 8.85765L12.7265 2.34545C13.0419 2.01031 13.5693 1.99432 13.9044 2.30975C14.2396 2.62518 14.2556 3.15258 13.9401 3.48773L7.81101 9.99992L13.9401 16.5121C14.2556 16.8473 14.2396 17.3747 13.9044 17.6901C13.5693 18.0055 13.0419 17.9895 12.7265 17.6544L6.59735 11.1422Z" fill="#667185"/>
                    </svg>
                    <span className="font-semibold text-[16px] text-[#667185]">Back</span>
                </div>
                <div className="dash-routes-display text-[14px] font-medium">
                    <span className="text-[#0D5EBA]">Accounts</span>
                    <span className="text-[#667185]"> / </span>
                    <span className=" text-[#667185]">Create Account</span>
                </div>
            </div>

            <div className="create-account-wrap border-[1px] border-[#F0F2F5] rounded-[10px] pl-8 pt-8 pr-6 pb-9">
                
                <div className="profile-picture-setting-wrap flex gap-14 mb-14">
                    <div className="profile-picure-select-display rounded-[50%] w-[100px] h-[100px] relative">
                        <img src={createProfilePic} alt="account-profile-picture" />
                        <svg className="absolute bottom-0 right-[-10px] w-[38px] h-[38px]" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19" cy="19" r="18.75" fill="#1671D9"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M27.1869 14.5708C27.5884 14.1915 27.6065 13.5586 27.2272 13.1571C26.848 12.7556 26.2151 12.7375 25.8136 13.1168L15.5815 22.7807L12.1869 19.5745C11.7854 19.1953 11.1525 19.2134 10.7732 19.6149C10.394 20.0164 10.4121 20.6493 10.8136 21.0285L14.8949 24.8833C15.2803 25.2473 15.8828 25.2473 16.2682 24.8833L27.1869 14.5708Z" fill="white"/>
                        </svg>

                    </div>
                    <div className="profile-picture-select">
                        <h3 className="text-[#101928] font-semibold text-[16px]">Profile photo</h3>
                        <p className="text-[14px] text-[#667185] mb-4">This image will be displayed on your profile</p>

                        <div className="set-profile-picture flex gap-2 px-3 py-2 border-[#0D5EBA] border-[2px] rounded-lg w-fit">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.50004 5.83333C2.50004 4.91286 3.24623 4.16667 4.16671 4.16667H13.3334C13.7936 4.16667 14.1667 3.79357 14.1667 3.33333C14.1667 2.8731 13.7936 2.5 13.3334 2.5H4.16671C2.32576 2.5 0.833374 3.99238 0.833374 5.83333V15C0.833374 16.841 2.32576 18.3333 4.16671 18.3333H15.8334C17.6743 18.3333 19.1667 16.841 19.1667 15V8.33333C19.1667 7.8731 18.7936 7.5 18.3334 7.5C17.8731 7.5 17.5 7.8731 17.5 8.33333V12.2077L14.4532 8.39918C13.0439 6.63752 10.3283 6.75537 9.07684 8.63249L8.12715 10.057C6.99178 9.43387 5.55938 9.78186 4.83964 10.8714L2.50004 14.413V5.83333ZM13.1518 9.44033L17.5 14.8757V15C17.5 15.9205 16.7538 16.6667 15.8334 16.6667H7.2809C6.61532 16.6667 6.21833 15.9249 6.58753 15.3711L10.4636 9.55699C11.0893 8.61843 12.4471 8.55951 13.1518 9.44033ZM5.20078 14.4466C4.72772 15.1562 4.67396 15.9686 4.9232 16.6667H4.58337C4.12314 16.6667 3.75004 16.2936 3.75004 15.8333V15.7949C3.75004 15.6316 3.79803 15.4719 3.88806 15.3356L6.23027 11.79C6.44258 11.4686 6.84094 11.3408 7.19208 11.4596L5.20078 14.4466Z" fill="#0D5EBA"/>
                                <path d="M4.31921 7.3319C4.72011 7.46553 5.0347 7.78012 5.16833 8.18102C5.30434 8.58903 5.88145 8.58903 6.01746 8.18102C6.15109 7.78012 6.46568 7.46553 6.86658 7.3319C7.27459 7.19589 7.27459 6.61878 6.86658 6.48277C6.46568 6.34914 6.15109 6.03455 6.01746 5.63365C5.88145 5.22564 5.30434 5.22564 5.16833 5.63365C5.0347 6.03455 4.72011 6.34914 4.31921 6.48277C3.9112 6.61878 3.9112 7.19589 4.31921 7.3319Z" fill="#0D5EBA"/>
                                <path d="M17.5 3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5C16.2065 2.5 15.8334 2.8731 15.8334 3.33333V4.16667H15C14.5398 4.16667 14.1667 4.53976 14.1667 5C14.1667 5.46024 14.5398 5.83333 15 5.83333H15.8334V6.66667C15.8334 7.1269 16.2065 7.5 16.6667 7.5C17.1269 7.5 17.5 7.1269 17.5 6.66667V5.83333H18.3334C18.7936 5.83333 19.1667 5.46024 19.1667 5C19.1667 4.53976 18.7936 4.16667 18.3334 4.16667H17.5V3.33333Z" fill="#0D5EBA"/>
                            </svg>
                            <span>Set Profile Photo</span>

                        </div>
                    </div>

                </div>

                <form action="" className="create-account-form">
                    <div className="create-account-form-wrap flex justify-between">
                        <div className="account-user-details w-[50%]">
                            <div className="account-user-type mb-5">
                                <label htmlFor="user-type-select" className="font-medium text-[#101928] text-[14px]">User Type</label> <br />
                                <select className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[80%]" name="user-type-select " id="user-type-select">
                                    <option className="text-[#98A2B3] text-[14px] " disabled selected value="select-country">Select
                                    </option>
                                    <option value="admin-user">Admin</option>
                                    <option value="leader-user">Leader</option>
                                </select>

                            </div>  

                            <div className="account-user-subtype mb-5">
                                <label htmlFor="user-subtype-select" className="font-medium text-[#101928] text-[14px]">User Sub-Type</label> <br />
                                <select className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[80%]" name="user-subtype-select " id="user-subtype-select">
                                    <option className="text-[#98A2B3] text-[14px] " disabled selected value="select-country">Select
                                    </option>
                                    <option value="admin-user">Super Admin</option>
                                    <option value="leader-user">Admin</option>
                                    <option value="leader-user">HCF Leader</option>
                                    <option value="leader-user">District Pastor</option>
                                    <option value="leader-user">Group Pastor</option>
                                    <option value="leader-user">Region Pastor</option>
                                    <option value="leader-user">State Pastor</option>
                                    <option value="leader-user">Zonal Pastor</option>
                                </select>
                            </div>

                            <div className="account-user-access mb-5">
                                <span className="font-medium text-[#101928] text-[14px]">Access to:</span><br />
                                 <input type="checkbox" name="leadership-congress-access" id="leadership-congress-access" /> <label htmlFor="leadership-congress-access">Leadership Strategic Congress</label><br />

                                 <input type="checkbox" name="dclm-staff-portal" id="dclm-staff-portal" /> <label htmlFor="dclm-staff-portal">DCLM Staff Portal</label><br />

                                 <input type="checkbox" name="membership-module" id="membership-module" /> <label htmlFor="membership-module">Membership Module</label><br />

                                 <input type="checkbox" name="hcf-module" id="hcf-module" /> <label htmlFor="hcf-module">HCF Module</label><br />

                                 <input type="checkbox" name="attendance-module" id="attendance-module" /> <label htmlFor="attendance-module">Attendance Module</label><br />

                                 <input type="checkbox" name="marriage-committee-module" id="marriage-committee-module" /> <label htmlFor="marriage-committee-module">Marriage Committee Module</label><br />

                            </div>

                            <div className="account-user-membershipid mb-5">
                                <label className="font-medium text-[#101928] text-[14px]" htmlFor="membership-id">Membership ID</label><br />
                                <input className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[80%]" placeholder="Enter membership ID" type="text" name="membership-id" id="membership-id" />
                            </div>

                            <div className="account-user-username mb-5">
                                <label className="font-medium text-[#101928] text-[14px]" htmlFor="account-username">Username</label><br />
                                <input className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[80%]" placeholder="Enter username" type="text" name="account-username" id="account-username" />
                            </div>

                            <div className="account-user-email mb-5">
                                <label className="font-medium text-[#101928] text-[14px]" htmlFor="account-user-email">User email address</label><br />
                                <input className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[80%]" placeholder="Enter Email Address" type="email" name="account-user-email" id="account-user-email" />
                            </div>
                        </div>
                        <div className="account-user-password w-[50%]">
                            <label className="font-medium text-[#101928] text-[14px]" htmlFor="account-user-password">Password</label><br />
                            <input className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[80%]" placeholder="Enter Password" type="password" name="account-user-password" id="account-user-password" />
                        </div>
                    </div>
                </form>
                
                
            </div>
        </div>
    </div>
  )
}

export default DashCreateAccount