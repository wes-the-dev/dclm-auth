import profileAvatar from '../../assets/img/profile-avatar-mini.png'


const SearchBar = () => {
  return (
    <div className="searchbar-notif  px-9 mb-6 flex justify-between items-center">
        <div className="search-input w-[80%] relative">
            <input className="py-[10px] px-3 w-[100%] rounded-lg bg-[#F9FAFB]" type="search" name="searchbar" id="searchbar" placeholder="Search here..."  />
        </div>
        <div className="profile-notification flex gap-3 ">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="20" fill="#F0F2F5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M20.8336 12.5C20.8336 12.0397 20.4605 11.6666 20.0003 11.6666C19.54 11.6666 19.1669 12.0397 19.1669 12.5V12.9757C16.3402 13.3799 14.1669 15.8102 14.1669 18.749L14.1669 22.0827C14.1669 22.0827 14.167 22.0826 14.1669 22.0827C14.1669 22.0843 14.1663 22.0955 14.1627 22.1173C14.1583 22.1436 14.1506 22.1793 14.1379 22.2252C14.1122 22.3183 14.0711 22.4342 14.0138 22.5712C13.899 22.8459 13.737 23.1622 13.5579 23.4813C13.2211 24.0812 13.0513 24.7961 13.1788 25.476C13.3132 26.193 13.7747 26.8182 14.5628 27.1183C15.2669 27.3864 16.2041 27.6315 17.4418 27.7775C17.4713 27.803 17.5061 27.8322 17.5461 27.8642C17.6714 27.9644 17.8503 28.0943 18.0764 28.2235C18.5252 28.48 19.1888 28.75 20.0003 28.75C20.8118 28.75 21.4753 28.48 21.9241 28.2235C22.1503 28.0943 22.3292 27.9644 22.4545 27.8642C22.4945 27.8322 22.5293 27.803 22.5587 27.7775C23.7964 27.6315 24.7336 27.3864 25.4377 27.1183C26.2259 26.8182 26.6874 26.193 26.8218 25.476C26.9493 24.7961 26.7795 24.0812 26.4427 23.4813C26.2636 23.1622 26.1016 22.8459 25.9867 22.5712C25.9294 22.4342 25.8884 22.3183 25.8626 22.2252C25.8499 22.1793 25.8422 22.1436 25.8379 22.1173C25.8343 22.0955 25.8337 22.0845 25.8336 22.0829C25.8336 22.0828 25.8336 22.0829 25.8336 22.0829L25.8336 22.0759V18.7494C25.8336 15.8106 23.6604 13.38 20.8336 12.9757V12.5ZM15.8336 18.749C15.8336 16.4481 17.6989 14.5833 20.0003 14.5833C22.3016 14.5833 24.1669 16.4484 24.1669 18.7494V22.0833C24.1669 22.4691 24.3115 22.8852 24.4491 23.2142C24.5986 23.5717 24.7945 23.95 24.9894 24.2971C25.1789 24.6347 25.224 24.9536 25.1837 25.1689C25.1503 25.3471 25.0612 25.4783 24.8447 25.5607C23.9489 25.9018 22.4369 26.25 20.0003 26.25C17.5637 26.25 16.0516 25.9018 15.1559 25.5607C14.9394 25.4783 14.8503 25.3471 14.8169 25.1689C14.7765 24.9536 14.8217 24.6347 15.0112 24.2971C15.2061 23.95 15.402 23.5717 15.5515 23.2142C15.6891 22.8852 15.8336 22.4691 15.8336 22.0833V18.749Z" fill="#344054"/>
            </svg>
            <img src={profileAvatar} alt="" />
        </div>
    </div>
  )
}

export default SearchBar