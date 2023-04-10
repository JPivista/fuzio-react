import React from 'react';
import Slider from 'react-slick';
import { global } from 'styled-jsx/css';

const AboutUs = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <div className='containter w-full h-full'>
                <div className='h-1/2'>
                    <img src='https://fuzhio.org/wp-content/uploads/2022/02/pexels-pixabay-315998.jpg' width="100%" max-height="100px"></img>
                </div>
            </div>

            {/* Section 2 */}
            <div className='px-5 py-6 lg:px-40 lg:py-24 bg-[#F4D5C6]'>
                <div>
                    <p className='leading-8 font-semibold text-[#53504E] lato-regular'>Fuzhio is an eco-social venture that aims to enhance value-chain efficiencies of products that resolve socio-economic and environmental issues. Founded in 2006 by IRMA graduates, Fuzhio is built upon the legacy and expertise of <a className='text-[#b34738]' href="https://catalysts.global/" target="_blank">Catalyst Group</a> , a 27-year-old social enterprise platform that seeks to enhance the health and wealth of vulnerable communities. Our market-led activities unlock business opportunities for vulnerable communities, by offering services that help them receive maximum value of their products for the least cost. In the agricultural domain, our efforts are geared not just towards unlocking business opportunities for marginalised farmers, but also connecting them to bio-inputs that ensure good farming practices that improve the health of the environment. Additionally, our circular economy initiatives through our project ‘Noble Plastic’ drive the effective repurposing of plastic waste in order to clean up the environment, provide employment through the sorting process, and create value-added products for all our stakeholders. Through our initiatives, we are aligned with the UN’s Sustainable Development Goals (SDG) of inclusive, safe, and sustainable cities and communities, ensuring good use of resources, improving energy efficiency, creating green and decent jobs, and ensuring a better quality of life for all. We work with organisations and CSR brands who have mapped their business goals to these SDGs. We also partner with sustainable apparel brands to enhance social and environmental value, while also increasing the competitiveness of their value chain. Our on-ground operations arm forms the crux of our initiatives, and includes recyclers, pyrolysis experts, aggregators, and tech deployers. Additionally, we engage with policy shapers to leverage their bodies of knowledge and create a relevant market for eco-social ventures like ours. In doing all of this, Fuzhio’s mission is to improve the livelihoods of marginalised communities, preserve and promote sustainable environmental practices, and provide consumers with safe and responsible products.</p>
                </div>
            </div>

            {/* Section 3 - Our Team */}
            <div className='px-5 py-6 lg:px-40 lg:py-24 bg-[#884138]'>
                <div className='text-center'>
                    <h1 className='md:text-6xl text-4xl font-light md:p-10 p-6 text-center border-b-2 border-white w-auto inline-block text-white'>Our Team</h1>
                </div>
                {/* col 1 */}
                <div className='flex flex-col md:flex-row lg:gap-x-14 gap-y-12 lg:gap-y-3 mt-20 justify-center '>
                    <div className='text-center self-center'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/01/2-1-modified.png' width="330px"></img>
                        <h1 className='text-[28px] font-bold pt-3 text-white'> Krishnamoorthy</h1>
                        <h6 className='text-white font-light'>Director</h6>
                    </div>
                    <div className='text-center self-center'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/01/IMG20210803102722_Bokeh-scaled-modified.png' width="330px"></img>
                        <h3 className='text-[28px] font-bold pt-3 text-white'> CP Chandrashekarappa</h3>
                        <h6 className='text-white font-light'>Director</h6>
                    </div>
                    <div className='text-center self-center'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/01/22-modified.png' width="330px"></img>
                        <h3 className='text-[28px] font-bold pt-3 text-white'> Shiv Kumar</h3>
                        <h6 className='text-white font-light'>Founder/Mentor</h6>
                    </div>
                </div>
                {/* col 2 */}
                <div className='flex flex-col md:flex-row lg:gap-x-14 gap-y-12 lg:gap-y-3 mt-20 justify-center '>
                    <div className='text-center self-center'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/01/6-modified.png' width="330px"></img>
                        <h1 className='text-[28px] font-bold pt-3 text-white'> Raghunathan</h1>
                        <h6 className='text-white font-light'>Founder/Mentor</h6>
                    </div>
                    <div className='text-center self-center'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/01/Shaonli-modified.png' width="330px"></img>
                        <h3 className='text-[28px] font-bold pt-3 text-white'>Shaonli Chakraborty</h3>
                        <h6 className='text-white font-light'>Advisor/Mentor</h6>
                    </div>
                    <div className='text-center self-center'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/02/834A1157-modified.png' width="330px"></img>
                        <h3 className='text-[28px] font-bold pt-3 text-white'>Vishrut Shivkumar</h3>
                        <h6 className='text-white font-light'>Operations Lead, Noble Plastic</h6>
                    </div>
                </div>
                {/* col 3 */}
                <div className='flex flex-col md:flex-row gap-x-14 gap-y-3 mt-20 justify-center '>
                    <div className='text-center self-center'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/02/Image-modified.png' width="330px"></img>
                        <h1 className='text-[28px] font-bold pt-3 text-white'>Rakesh BH</h1>
                        <h6 className='text-white font-light'>Finance Lead</h6>
                    </div>
                </div>
            </div>

            {/* Section 4 */}
            <div className='px-5 py-6 lg:px-40 lg:py-24 bg-white max-w-full'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='w-full'>
                        <img src='https://fuzhio.org/wp-content/uploads/2021/09/123-1.jpg'></img>
                    </div>
                    <div className='w-full'>
                        <img src='https://fuzhio.org/wp-content/uploads/2022/01/WhatsApp-Image-2021-10-26-at-12.53.41-PM-1-e1642655919657.jpeg'></img>
                    </div>
                    <div className='w-full'>
                        <img src='https://fuzhio.org/wp-content/uploads/2021/09/IMG_20210211_130231-1-e1642655825328.jpg'></img>
                    </div>
                </div>
            </div>

            <div className='md:p-16'>
                <div className='text-center'>
                    <h1 className='md:text-6xl text-4xl font-light md:p-10 p-6 text-center border-b-2 border-black w-auto inline-block text-black'>Partners</h1>
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
                    </Slider>
                </div>
            </div>

        </>
    )

}
export default AboutUs