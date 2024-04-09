import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins600=Poppins({subsets:["latin"],weight:"100"})

export default function Banner() {

 
  return (
    <>
    <header>
      <div className="wrapper">
        <div className="header_content flex justify-between py-6">
          <h1 className={`sm:text-[16px] text-[30px] font-semibold leading-[42px] ${poppins600.className}`}>planmytaxes</h1>
          <button className="download_btn">Download 1Finance App</button> 
        </div>
      </div>
    </header>
    <section className="banner_section">
      <div className="banner_section_wrapper">
        <span className='circle_red'></span>
        <span className='solution_pill'>All in one solution</span>
        <h2 className='banner_header'>Simplifying income tax for you in india</h2>
        <p className='banner_content'>Welcome to Planmytaxes.ai, your trusted guide in navigating the complexities of income tax in India</p>
        <p className='banner_content'>We aim to simplify tax planning and filing makre it accessible and understandable for everyone</p>
        <div className="banner_image_container">
          <Image
          src ='/asset/images/banner_image.png' alt='Logo' width={500} height={500} className='banner_image' />
        </div>

      </div>
    </section>
    </>
  )
}
