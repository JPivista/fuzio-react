import React from 'react';
import Slider from 'react-slick';

const agriculture = () => {
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
            <div>
                <img src='https://fuzhio.org/wp-content/uploads/2022/01/WhatsApp-Image-2021-10-26-at-12.53.39-PM.jpg'></img>
            </div>
            <div className='px-5 py-6 lg:px-40 lg:py-24 bg-[#F4D5C5]'>
                <div className='border-b-2 pb-8'>

                    <p>At Fuzhio, our focus is on creating sustainable opportunities for farmers to improve their market realizations. We lead efforts that improve supply chains and their accompanying infrastructure, and in turn, generate opportunities for smallholders to link their production to sales. Right from improvements in technology, promotion of gender equality, and implementing sustainable farming practices, we help producers reap benefits by creating a plethora of market opportunities. </p>
                    <br />
                    <h1>Things we do:</h1>
                    <br />
                    <ul>
                        <li> - We create forward and backward linkages for farmers through producer companies and help them prosper financially.</li>
                        <li> - We create an intangible benefit for farmers through price benchmarking and assured buying.</li>
                        <li> - We create linkages to sell impact inputs to farmers, which in turn improves soil health, water and air quality.</li>
                        <li> - We enable producer companies to buy the right type of inputs at the right price.</li>
                        <li> - We put safe food on the plates of consumers.</li>
                    </ul>
                    <br />
                    <p>We believe that constant support for an agri-business model like this can integrate many more smallholder farmers into the value chain, and ensure food and income security for them.</p>
                </div>
            </div>

            <div className='px-5 py-6 lg:px-40 lg:py-24 flex flex-col lg:flex-row lg:gap-x-10'>
                <div className='text-center'>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/cer.png' className='hover:scale-110 ease-in'></img>
                    <h1 className='mt-6 text-[26px]'>Cereals</h1>
                </div>
                <div className='text-center'>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/pulses.png' className='hover:scale-110 ease-in'></img>
                    <h1 className='mt-6 text-[26px]'>Pulses</h1>
                </div>
                <div className='text-center'>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/veg.png' className='hover:scale-110 ease-in'></img>
                    <h1 className='mt-6 text-[26px]'>Vegetables</h1>
                </div>
                <div className='text-center'>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/bio.png' className='hover:scale-110 ease-in'></img>
                    <h1 className='mt-6 text-[26px]'>Bio Inputs</h1>
                </div>
            </div>


            <div className='px-5 pt-0 lg:px-0 lg:pt-0 flex flex-col lg:flex-row'>
                <div>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/IMG_20200613_155919-2048x967.jpg'></img>
                </div>
                <div>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/IMG_20200711_143835-2048x967.jpg'></img>
                </div>
                <div>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/IMG_20200711_143901-2048x967.jpg'></img>
                </div>
            </div>
            <div className='px-5 pb-0 lg:pb-0 lg:px-0 flex flex-col lg:flex-row'>
                <div>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/IMG_20201014_133157-1536x2048.jpg'></img>
                </div>
                <div>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/IMG_20201014_133331-1536x2048.jpg'></img>
                </div>
                <div>
                    <img src='https://fuzhio.org/wp-content/uploads/2021/09/IMG_20201014_133546-1536x2048.jpg'></img>
                </div>
            </div>

            <div className='md:p-16'>
                <div className=' text-center'>
                    <h1 className='md:text-6xl text-4xl font-light md:p-10 p-6 text-center border-b-2 border-[#54985f] w-auto inline-block'>Partners</h1>
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
                        <div>
                            <img src='https://fuzhio.org/wp-content/uploads/2021/09/5-1.png'></img>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default agriculture
