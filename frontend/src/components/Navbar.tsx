import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar({authorName}: {authorName: string}) {
  return (
    <div>
        <div className='flex items-center justify-between lg:px-16 px-6 mt-3'>
           <Link to='/blogs'>
           <h1 className="font-bold text-xl">medium</h1>
           </Link>
            <div>
                <Link to='/publish'>
                <button className="text-white font-medium bg-green-500 py-2 px-4 rounded-3xl mr-4 cursor-pointer">Publish</button>
                </Link>
                <Avatar name={authorName}/>
            </div>
        </div>
        <div className='h-[1px] mt-2 bg-slate-200'></div>
    </div>
  )
}

export default Navbar

interface AvatarType{
    name: string
}
function Avatar({ name }: AvatarType) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [logoutconfirm, setLogoutConfirm] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        localStorage.clear()
        navigate('/signin')
    }

    return (
        <>
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm text-center inline-flex items-center"
                type="button"
            >
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-500 rounded-full">
                    <span className="font-medium text-white">{name[0]}</span>
                </div>
                <svg
                    className="w-2.5 h-2.5 ml-3 hidden"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {dropdownVisible && (
                <>
                <div
                    id="dropdown"
                    className="z-10 border-2 border-green-500 divide-y divide-gray-900 rounded-lg shadow fixed lg:w-44 w-[150px] mt-1.5"
                >
                    <ul className="py-2 text-sm font-semibold bg-gray-500 text-white" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <Link className="block px-4 py-2 " to='/myblogs'>
                                My Blogs
                            </Link>
                        </li>
                        <li>
                            <button className="block px-4 py-2 " onClick={() => setLogoutConfirm(true)}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
                {logoutconfirm && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-5 rounded shadow-lg text-center">
                            <p className="text-lg font-semibold mb-5">Are you sure you want to logout?</p>
                            <div>
                                <button className="bg-black text-white py-2 px-4 rounded mr-2" onClick={() => handleLogout()}>Yes</button>
                                <button className="bg-gray-300 py-2 px-4 rounded" onClick={() => setLogoutConfirm(false)}>No</button>
                            </div>
                        </div>
                    </div>
                )}
                </>
            )}
        </>
    );
}
