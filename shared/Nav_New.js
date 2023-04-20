import React from 'react'

export const Nav_New = () => {
    return (
        <nav class="px-2 lg:px-40 bg-transparent border-gray-200 dark:border-gray-700 absolute z-10 w-[1280px] ">
            <div class=" flex flex-wrap items-center justify-between mx-auto py-5 w-[1200px]">
                <a href="/" class="flex items-center">
                    <img src="https://fuzhio.org/wp-content/uploads/2021/09/cropped-logo-fuzhio.png" className=" mr-3 w-[100%] h-16 " alt="Fuzhio Logo" />
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
        </nav>
    )
}
