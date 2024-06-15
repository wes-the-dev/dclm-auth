import DashSidebar from "../components/Dashboard/DashSidebar"
import SearchBar from "../components/Dashboard/SearchBar"

const DashCreateModule = () => {
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
                    <span className="text-[#0D5EBA]">Module</span>
                    <span className="text-[#667185]"> / </span>
                    <span className=" text-[#667185]">Create New</span>
                </div>
            </div>

            <div className="create-module-wrap border-[1px] border-[#F0F2F5] rounded-[10px] pl-8 pt-8 pr-6 pb-9">
                <div className="create-module-form-header mb-11">
                    <h3 className="font-semibold text-[18px] text-[#101828]">Module</h3>
                    <p className="text-[14px] text-[#475467]">Please fill in all details correctly.</p>
                </div>

                <form action="" className="create-module-form-main">
                    <div className="new-module-name-input mb-5">
                        <label className="font-medium text-[#101928] text-[14px]" htmlFor="new-module-name">Module Name</label><br />
                        <input className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[70%]" placeholder="Enter name" type="text" name="new-module-name" id="new-module-name" />
                    </div>

                    <div className="new-module-alias-input mb-5">
                        <label className="font-medium text-[#101928] text-[14px]" htmlFor="new-module-alias">Module Alias</label><br />
                        <input className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[70%]" placeholder="Enter alias" type="text" name="new-module-alias" id="new-module-alias" />
                    </div>

                    <div className="new-module-url-input mb-5">
                        <label className="font-medium text-[#101928] text-[14px]" htmlFor="new-module-alias">Module Url</label><br />
                        <input className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[70%]" placeholder="Enter url" type="url" name="new-module-url" id="new-module-url" />
                    </div>

                    <div className="new-module-description mb-7">
                        <label className="font-medium text-[#101928] text-[14px]" htmlFor="new-module-description">Module description</label><br />
                        <textarea className="px-4 py-[18px] border-[1px] border-[#98A2B3] rounded-lg w-[70%]" name="new-module-description" id="new-module-description" cols="30" rows="10"
                        placeholder="Enter module description"></textarea>
                        <textarea name="" id=""></textarea>
                    </div>

                    <div className=" w-[70%] submit-create-module-form flex justify-end gap-2">
                        <div className="cancel-create-module-form px-4 py-[10px] rounded-lg font-semibold border-[1px] border-[#D0D5DD]">Cancel</div>
                        <button className="px-4 py-[10px] rounded-lg font-semibold border-[1px] text-white bg-[#0D5EBA]" type="submit">Create New</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default DashCreateModule