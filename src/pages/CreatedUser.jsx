import DashSidebar from "../components/Dashboard/DashSidebar"
import SearchBar from "../components/Dashboard/SearchBar"
import profilePic from '../assets/img/account-profile-avatar.png'


const CreatedUser = () => {
  return (
    <div className="flex gap-0">
        <DashSidebar />
        <div className="px-6 pt-3 w-[100%]">
            <SearchBar />
            <div className=" border-y-[1px] border-y-[#E4E7EC] -mx-6 mb-6 pl-9 py-3 flex items-center gap-6">
                <div className=" flex items-center gap-2 pr-6 border-r-[1px] border-r-[#E4E7EC]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.59735 11.1422C5.99335 10.5004 5.99335 9.4994 6.59735 8.85765L12.7265 2.34545C13.0419 2.01031 13.5693 1.99432 13.9044 2.30975C14.2396 2.62518 14.2556 3.15258 13.9401 3.48773L7.81101 9.99992L13.9401 16.5121C14.2556 16.8473 14.2396 17.3747 13.9044 17.6901C13.5693 18.0055 13.0419 17.9895 12.7265 17.6544L6.59735 11.1422Z" fill="#667185"/>
                    </svg>
                    <span className="font-semibold text-[16px] text-[#667185]">Back</span>
                </div>
                <div className="dash-routes-display text-[14px] font-medium">
                    <span className="text-[#0D5EBA]">Accounts</span>
                    <span className="text-[#667185]"> / </span>
                    <span className=" text-[#667185]">User Profile</span>
                </div>
            </div>

            <div className="account-profile-wrap border-[1px] relative border-[#F0F2F5] rounded-[10px] pl-8 pt-8 pr-6 pb-9">
                <div className="account-profile-header mb-11 ">
                  <div className="profile-picure-display rounded-[50%] flex w-[100px] h-[100px] relative">
                        <img src={profilePic} alt="account-profile-picture" />
                  </div>
                  <div className="account-profile-name-position mb-8">
                    <h3 className="font-medium text-[14px] text-[#101928]">Mrs Adebimpe Abigail Esupofo</h3>
                    <p className="text-[14px] text-[#475367]">Legal Practitioner</p>
                  </div>

                  <span className="text-[14px] text-[#344054] font-medium">Other Information</span>
                  <div className="h-[1px] w-[100%] left-0 right-0 bg-[#E4E7EC] my-4 absolute"></div>
                </div>
                <div className="account-profile-info mb-1">
                    <div className="account-profile-user-type-info mb-6">
                      <h3 className="font-medium text-[14px] text-[#101928]">User Type</h3>
                      <p className="text-[#475367] text-[14px]">Info goes here</p>
                    </div>

                    <div className="account-profile-user-subtype-info mb-6">
                      <h3 className="font-medium text-[14px] text-[#101928]">User Sub-Type</h3>
                      <p className="text-[#475367] text-[14px]">Info goes here</p>
                    </div>

                    <div className="account-profile-membershipid-info mb-6">
                      <h3 className="font-medium text-[14px] text-[#101928]">Membership ID</h3>
                      <p className="text-[#475367] text-[14px]">Info goes here</p>
                    </div>

                    <div className="account-profile-username-info mb-6">
                      <h3 className="font-medium text-[14px] text-[#101928]">Username</h3>
                      <p className="text-[#475367] text-[14px]">Info goes here</p>
                    </div>

                    <div className="account-profile-email-info mb-6">
                      <h3 className="font-medium text-[14px] text-[#101928]">Email address</h3>
                      <p className="text-[#475367] text-[14px]">adebimpeabigail@gmail.com</p>
                    </div>

                    <div className="account-profile-access-info mb-6">
                      <h3 className="font-medium text-[14px] text-[#101928]">Access</h3>
                      <p className="text-[#475367] text-[14px]">Leadership Strategic Congress Module</p>
                      <p className="text-[#475367] text-[14px]">Staff Portal Module</p>
                      <p className="text-[#475367] text-[14px]">Membership Module</p>
                      <p className="text-[#475367] text-[14px]">HCF Module</p>
                      <p className="text-[#475367] text-[14px]">Attendance Module</p>
                      <p className="text-[#475367] text-[14px]">Marriage Committee Module</p>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default CreatedUser