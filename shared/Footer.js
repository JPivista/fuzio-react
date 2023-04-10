
import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='md:flex md:flex-row w-full p-16 bg-[#904d44] stickysm:flex-col sm:flex z-50 border-b-2 border-[#C8A7A2]'>
                    <div className='md:w-1/2 sm:w-full p-6'>
                        <div className='sm:w-full md:w-1/2 p-0s'>
                            <img src="https://fuzhio.org/wp-content/uploads/2021/09/cropped-logo-fuzhio.png" width="80%" height={100} />
                            <p className='text-white'>
                                Fuzhio Health and Business Services Pvt Ltd No. 25,
                                RMV 2nd Stage, AECS Layout,
                                1st Main Road, Ashwathnagar, Bangalore - 560094.
                            </p>
                            <div className='mt-5 text-white'>
                                Phone: <a href='tel:937981 5394'>+91 937981 5394</a>
                            </div>
                            <div className='text-white'>
                                Email: <a href='mailto:info@fuzhio.co'>info@fuzhio.co</a>
                            </div>
                        </div>

                    </div>
                    <div className='md:w-1/2 w-full pt-6  '>
                        <form>
                            <div className='flex flex-row m-0 my-4 w-full'>
                                <div className='w-1/2'>
                                    <input type="text" name='firstName' placeholder='First Name' className='w-full  p-3'></input>
                                </div>
                                <div className='w-1/2 ml-2'>
                                    <input type="text" name='lastName' placeholder='Last Name' className='p-3 w-full'></input>
                                </div>
                            </div>
                            <div className='m-0 my-2 w-full'>
                                <input type="email" name='email' placeholder='Email' className='w-full p-3'></input>
                            </div>
                            <div className='m-0 my-4'>
                                <textarea rows={4} className='w-full p-2 m-0'
                                    label="Write your thoughts"
                                    placeholder="Message"
                                />
                            </div>
                            <button className='text-black font-bold bg-white text-[14px] tracking-[2px] p-3 hover:text-[#904D44] hover:text px-8'> SUBMIT </button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className='text-center bg-[#904d44]'>
                        <h1 className='text-[#C8A7A2] text-[12px] p-8'>Copyright © 2023 Fuzhio Health and Business Services | Powered by Fuzhio Health and Business Services</h1>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
