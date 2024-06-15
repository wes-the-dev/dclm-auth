import DashSidebar from "../components/Dashboard/DashSidebar"
import SearchBar from "../components/Dashboard/SearchBar"

const DashAccounts = () => {
  return (
    <div className="flex gap-0">
        <DashSidebar />
        <div className="w-[100%] px-6 pt-3">
            <SearchBar />
            <div className="dash-accounts-main-header mb-8 flex justify-between">
                <span className="font-semibold text-[28px] text-[#101928]">Accounts</span>
                <div className="flex gap-2 px-3 py-2 text-white bg-[#0D5EBA] items-center rounded-lg">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.83332 6.50008C9.83332 6.03984 9.46023 5.66675 8.99999 5.66675C8.53975 5.66675 8.16666 6.03984 8.16666 6.50008V8.16675H6.49999C6.03975 8.16675 5.66666 8.53984 5.66666 9.00008C5.66666 9.46032 6.03975 9.83341 6.49999 9.83341H8.16666V11.5001C8.16666 11.9603 8.53975 12.3334 8.99999 12.3334C9.46023 12.3334 9.83332 11.9603 9.83332 11.5001V9.83341H11.5C11.9602 9.83341 12.3333 9.46032 12.3333 9.00008C12.3333 8.53984 11.9602 8.16675 11.5 8.16675H9.83332V6.50008Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.99999 0.666748C4.39762 0.666748 0.666656 4.39771 0.666656 9.00008C0.666656 13.6025 4.39762 17.3334 8.99999 17.3334C13.6024 17.3334 17.3333 13.6025 17.3333 9.00008C17.3333 4.39771 13.6024 0.666748 8.99999 0.666748ZM2.33332 9.00008C2.33332 5.31818 5.31809 2.33341 8.99999 2.33341C12.6819 2.33341 15.6667 5.31818 15.6667 9.00008C15.6667 12.682 12.6819 15.6667 8.99999 15.6667C5.31809 15.6667 2.33332 12.682 2.33332 9.00008Z" fill="white"/>
                    </svg>
                    <span>Create User Account</span>

                </div>
            </div>
            <div className="dash-accounts-table-wrap border-[1px] border-[#E4E7EC] py-6 rounded-[10px]">
                <div className="dash-accounts-table-header mb-4 flex justify-between px-4">
                    <div className="user-count text-[16px]">
                        <span className="font-semibold">Total: </span><span>42</span>
                    </div>
                    <div className="sort-btn px-3 py-2 border-[1px] border-[#D0D5DD] flex gap-2 rounded-lg relative">
                        <select name="sort-accounts-by" id="sort-accounts-by">
                            <option value="sort-by-name">Name</option>
                            <option value="sort-by-name">Name</option>
                            <option value="sort-by-name">Name</option>
                            <option value="sort-by-name">Name</option>
                        </select>
                        <span className="text-[14px] text-[#344054] font-semibold">Sort by</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.34554 7.27342L8.85774 13.4025C9.49949 14.0065 10.5005 14.0065 11.1423 13.4025L17.6545 7.27342C17.9896 6.95799 18.0056 6.4306 17.6902 6.09545C17.3747 5.76031 16.8474 5.74433 16.5122 6.05976L10 12.1889L3.48782 6.05975C3.15267 5.74432 2.62528 5.76031 2.30985 6.09545C1.99442 6.4306 2.0104 6.95799 2.34554 7.27342Z" fill="#344054"/>
                        </svg>

                    </div>
                </div>
                <table className="w-[100%]">
                    <th className="bg-[#E4E7EC] font-medium w-[100%]">
                        <td>Username</td>
                        <td>Memberhip ID</td>
                        <td>Email Address</td>
                        <td>Type</td>
                        <td>Sub-type</td>
                        <td>Access to</td>
                    </th>
                </table>
            </div>
        </div>

    </div>
  )
}

export default DashAccounts