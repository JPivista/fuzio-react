import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";

const FuzhioHome = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <div className='containter w-full h-[100vh] bg-[url("https://fuzhio.org/wp-content/uploads/2021/09/4293117.jpg")] bg-no-repeat bg-cover flex flex-wrap justify-center content-center px-5 py-6 lg:px-40 lg:py-24 bg-blend-overlay'>
                {/* <div className='absolute'>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/4293117.jpg' width="100%" height="100vh"></img>
                </div> */}
                <div className='w-[1440px]'>
                    <h5 className='lg:text-[80px] text-white font-light font-dosis'>Making markets work for vulnerable communities</h5>
                </div>

            </div>


            {/* Section 2 */}
            <div className='w-full  bg-[#A0665F] p-16'>
                <div className='md:flex md:flex-row sm:flex sm:flex-col'>
                    <div className='md:w-1/2 md:px-24 flex flex-col align-middle justify-center'>
                        <h1 className='text-white text-6xl border-b-2 pb-6 border-white font-extralight font-lato' >Who Are We</h1>
                        <h5 className='text-white pt-5  text-xl pb-9 lato-regular text-[26px'>Fuzhio promotes Impact Products</h5>
                        <p className='leading-loose text-[#DFCAC7] font-extralight text-[20px] text-xl'>Fuzhio strives to improve value chains and make them equitable and sustainable. Our market-led activities unlock business opportunities for vulnerable communities, and enhance socio-economic and environmental value for all stakeholders. Our environmentally-aligned initiatives create mutual synergies for stakeholders, value-added products for farmers and partners, and profits for all involved.</p>
                        <Link href="#" className='text-white my-7 mt-16 tracking-[2px] text-[14px]  font-bold'>READ MORE</Link>
                    </div>
                    <div className='md:w-1/2'>
                        <img src='https://fuzhio.org/wp-content/uploads/2021/09/Vijayalakshmi-e1643711021990.jpg'></img>
                    </div>
                </div>
            </div>


            {/* Section 3 */}
            <div className='bg-[#F0D7CB] w-auto h-auto p-10 md:p-40'>
                <img src='https://fuzhio.org/wp-content/uploads/2022/01/map.png' height="auto"></img>
            </div>


            {/* Section 4 */}
            <div className='bg-[#FFFFFF] lg:p-16 lg:pb-0 p-4 pb-0 w-full shadow-xl'>
                <div className='w-full text-center'>
                    <h1 className='md:text-6xl text-4xl font-light md:p-10 p-6 text-center border-b-2 border-gray-600 w-auto inline-block'>Our Differentiators</h1>
                </div>
                <div className='mt-6 flex lg:flex-row flex-col'>
                    <div className='flex flex-wrap flex-col justify-between bg-[#C7594A] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-80 font-extralight'>The products in the value chains that we enhance ensure positive social and environmental impact</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#B24738] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>We make the markets work for the poor. Our workforce is comprised of smallholder farmers, women, and members of various marginalised communities</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#9F3728] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>Returns from our initiatives flow directly to our community stakeholders, thus making our system equitable</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#923021] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>We not only improve market linkages, but also integrate our stakeholders into unique business opportunities</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#6E170C] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>We enable traceability and transparency, and promise quality assurance of all our products</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                </div>
            </div>


            {/* Section 5 */}
            <div className='bg-[#FFFFFF] lg:p-16 lg:pt-0 pt-0 p-4 w-full'>
                <div className=' flex lg:flex-row flex-col'>
                    <div className='flex flex-wrap flex-col justify-between bg-[#C7594A] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-80 font-extralight'>The products in the value chains that we enhance ensure positive social and environmental impact</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#B24738] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>We make the markets work for the poor. Our workforce is comprised of smallholder farmers, women, and members of various marginalised communities</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#9F3728] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>Returns from our initiatives flow directly to our community stakeholders, thus making our system equitable</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#923021] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>We not only improve market linkages, but also integrate our stakeholders into unique business opportunities</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                    <div className='flex flex-wrap flex-col justify-between bg-[#6E170C] lg:w-[20%] w-full p-14 text-white lg:min-h-96 sm:h-auto leading-8'>
                        <p className='lg:h-96 font-extralight'>We enable traceability and transparency, and promise quality assurance of all our products</p>
                        <div className='p-1 w-[30%] bg-white invisible lg:visible'></div>
                    </div>
                </div>
            </div>


            {/* Section 6 */}
            <div className='text-center'>
                <h1 className='text-5xl'> Design Pending</h1>
            </div>



            {/* Section 7 */}
            <div className='md:p-16 p-4'>
                <div className='flex md:flex-row flex-col'>
                    <div>
                        <img src='https://fuzhio.org/wp-content/uploads/2021/09/1-1.jpg'></img>
                    </div>
                    <div>
                        <img src="https://fuzhio.org/wp-content/uploads/2021/09/2-1.jpg"></img>
                    </div>
                    <div>
                        <img src='https://fuzhio.org/wp-content/uploads/2021/09/3-1.jpg'></img>
                    </div>
                </div>
            </div>

            {/* Section 8 */}
            <div className='md:p-16'>
                <div className='w-full text-center'>
                    <h1 className='md:text-6xl text-4xl text-[#923021] font-light md:p-10 p-6 text-center border-b-2 border-[#923021] w-auto inline-block '>Partners</h1>
                </div>
                <div className='md:p-16'>
                    <Slider {...settings}>
                        <div>
                            <img src='https://fuzhio.org/wp-content/uploads/2021/09/5-1.png'></img>
                        </div>
                        <div>
                            <img src='https://fuzhio.org/wp-content/uploads/2021/09/6-1.png'></img>
                        </div>
                        <div>
                            <img src='https://fuzhio.org/wp-content/uploads/2021/09/1-1.png'></img>
                        </div>
                        <div>
                            <img src='https://fuzhio.org/wp-content/uploads/2021/09/3-1.png'></img>
                        </div>
                        {/* <div>
                            <img src='https://fuzhio.org/wp-content/uploads/2021/09/5-1.png'></img>
                        </div> */}
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default FuzhioHome
