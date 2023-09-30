
'use client'
import Image from 'next/image'
import {useEffect} from 'react'
import {AiFillCheckCircle ,AiFillRightCircle} from 'react-icons/ai';
import AOS from 'aos' ;
import 'aos/dist/aos.css'


import Logo from '../../public/image/logo.abc0bf27.svg'


import hero from '../../public/image/hero-img-1-min.jpg'
import women from '../../public/image/women.svg'
import icon1 from '../../public/image/icon-1.svg'
import icon2 from '../../public/image/icon-2.svg'
import icon3 from '../../public/image/icon-3.svg'
import icon4 from '../../public/image/icon-4.svg'
import icon5 from '../../public/image/icon-5.svg'
import icon6 from '../../public/image/icon-6.svg'



import personne1 from '../../public/image/person-1-min.png'
import personne2 from '../../public/image/person-2-min.png'
import personne3 from '../../public/image/person-3-min.png'



import post1 from '../../public/image/post-1-min.png'
import post2 from '../../public/image/post-2-min.png'
import post3 from '../../public/image/post-3-min.png'


import soulution1 from '../../public/image/solution-img-1-min (1).png'
import soulution2 from '../../public/image/solution-img-2-min.png'
import soulution3 from '../../public/image/solution-img-3-min.png'

//  data for services

const services = [
  {
    id : 1 , 
    icon  :icon1,
    title : 'Child Safety Solutions',
    dispcription : 'Childproofing services and safety education to keep your children secure and protected at home and in public spaces.'

  },
  {
    id : 2 , 
    icon  :icon2,
    title : 'Elderly Care Monitoring',
    dispcription : 'Childproofing services and safety education to keep your children secure and protected at home and in public spaces .'

  },
  {
    id : 3 , 
    icon  :icon3,
    title : 'Home Fire Safety',
    dispcription : 'Childproofing services and safety education to keep your children secure and protected at home and in public spaces.'

  },
  {
    id : 4 , 
    icon  :icon4,
    title : 'Financial Planning',
    dispcription : 'Expert financial advice to help you build a strong financial foundation and plan for your familys long-term security.'

  },
  {
    id : 5 , 
    icon  :icon5,
    title : 'Personal Safety Devices',
    dispcription : 'Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go.'

  },
  {
    id : 6 , 
    icon  :icon6,
    title : 'Insurance Coverage',
    dispcription : 'Tailored insurance policies to protect your familys financial future, including life insurance, health insurance, and property insurance.'

  }
]





export default function Home() {

  useEffect(()=>{
    AOS.init({
      duration:700,
      easeing:"slide",
      once:true
    })
  })




  return (
<>

<section id='home' >
<div className="container py-20 px-20  flex  flex-col lg:flex-row  lg:justify-between ">
    <div className="container  gap-6 grid  w-5/12">
      <h4 className='text-md  text-black font-bold'  data-aos='fade-up' data-aos-delay="100">Wecome to FamSec</h4>

      <h1 className=' text-6xl w-auto lg:text-5xl  font-bold'  data-aos='fade-up' data-aos-delay="100">Protecting Families , <br /> Securing Futures</h1>

      <p className='opacity-7 w-[400px]   font-semibold text-gray-500'  data-aos='fade-up' data-aos-delay="100">
      We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones.
      </p>

      <div className=" flex justify-center lg:justify-start items-center gap-2"  data-aos='fade-in' data-aos-delay="100">
        

      <button className="lg:inline-block bg-cyan-950 px-5 py-2 text-white rounded-lg">Get started</button>
      <button className="lg:inline-block px-5 py-2 bg-cyan-500  text-white rounded-lg">How it Works?</button>
      </div>

    </div>
    <div className=" mt-20 lg:w-5/12 container px-12" data-aos='fade-in' data-aos-delay="100">
      <Image src={hero} className='rounded-lg'/>
      
    </div>
</div>
</section>

<section id='work' >
  <div className="container flex lg:flex-row flex-col  justify-center items-center px-8">

    <div className="w-12/12 lg:w-5/12 flex justify-between gap-8 lg:gap-0 ">
     <div>
      <h2 className='text-5xl font-black text-cyan-950  my-2'  data-aos='fade-down' data-aos-delay="100">99.9%</h2>
      <span className='text-gray-500 font-medium'   data-aos='fade-down' data-aos-delay="100">Child Sefety Solutions</span>
     </div>
     <div>
      <h2 className='text-5xl font-black text-cyan-950  my-2'  data-aos='fade-down' data-aos-delay="100">3,912</h2>
      <span className='text-gray-500 font-medium'  data-aos='fade-down' data-aos-delay="100">Happy Customers</span>
     </div>
     <div>
      <h2 className='text-5xl font-black text-cyan-950  my-2'  data-aos='fade-down' data-aos-delay="100">4.8</h2>
      <span className='text-gray-500 font-medium'  data-aos='fade-down' data-aos-delay="100">Rating Reviews</span>
     </div>

    </div>
    <div className="w-4/12  mb-10 " data-aos='fade-left' data-aos-delay="100">

      <div className=' w-96  lg:w-[600px] p-10 m-2  lg:mx-auto  translate-x-[-200px] lg:translate-x-6  ml-12 rounded-lg bg-slate-100 h-60 flex justify-between '> 
        <div>
        <h1 className='text-xl font-medium my-4'>Get started with our services ?</h1>
        <p className='text-gray-500 font-medium  mb-4'>We understand that protecting your loved ones is of utmost importance.</p>
        <span className='mt-5   text-xl font-medium'>Learn more <span className=' bg-cyan-950 text-white rounded-full px-2 py-1 cursor-pointer'>></span> </span>
        </div>
        <div className=''>
          
          <Image  src={women} width={120} />
        </div>
      </div>
      
    </div>
   

  </div>
</section>
<section id='mission'>
  <div className="container w p-2 lg:p-5 mb-20 bg-slate-100">
    <div className='p-20'>
      <h2 className='text-center text-lg font-medium mb-7'>Our Awesome Services</h2>
      <h1 className='text-center text-5xl mb-4 font-extrabold text-cyan-950'>Our Services</h1>
      <p className='text-center lg:px-80 text-gray-500 font-medium  mb-4'> We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.</p>
    </div>

    <div className=' grid grid-cols-1 lg:grid-cols-3  '>
      {
        services.map(serves => (
          <div key={serves.id} className='p-10 flex justify-between gap-3 '  data-aos='zoom-in-up' data-aos-delay="100">
            <div className='bg-white shadow-xl p-3 rounded-xl items-center justify-center' >
              <Image src={serves.icon} width={140}  />
            </div>
            <div>
              <h1 className='text-xl font-medium text-cyan-950'>{serves.title}</h1> 
              <p className=' text-gray-500 font-medium'>{serves.dispcription}</p>
            </div>
          </div>
        ))
      }
    </div>
  </div>
</section>


<section className='about'>
  <div className="container p-5 flex lg:flex-row flex-col ">
      <div className="w-5/12 grid lg:py-7 " >
        
        <div  >
          <Image src={soulution1} className='rounded-xl w-80 ' data-aos='zoom-in-up' data-aos-delay="100" />
        </div>
        <div>
          <Image src={soulution2} className='rounded-xl w-80 lg:translate-x-[330px] translate-y-[20px] lg:translate-y-[-250px]'   />
        </div>
        <div>
          <Image src={soulution3} className='rounded-xl translate-x-[220px]  lg:translate-x-[160px] translate-y-[-320px]  lg:translate-y-[-327px] w-40'  />
        </div>


      </div>

      <div className="lg:w-6/12 lg:pl-40   "  data-aos='zoom-in-up' data-aos-delay="100">
      <h2 className='text-lg font-medium mb-7'>Our Solutions</h2>
      <h1 className=' text-3xl font-extrabold text-cyan-950 mb-20'>From safeguarding your home with state-of-the-art alarm systems</h1>
      <p className='  text-gray-500 font-medium  mb-20'>From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.</p>


        <div className='grid grid-cols-2 gap-3 mb-20'>
          <span className=' flex gap-4  items-center'>
          <i className='text-4xl  text-cyan-950'><AiFillCheckCircle /> </i>
          <p className='  text-gray-500 font-medium'>Home Fire Safety</p>
          </span>
          <span className='flex gap-4  items-center'>
          <i className='text-4xl  text-cyan-950'><AiFillCheckCircle /> </i>
          <p className='  text-gray-500 font-medium'>Cybersecurity Solutions</p>
          </span>
          <span className='flex gap-4  items-center'>
          <i className='text-4xl  text-cyan-950'><AiFillCheckCircle /> </i>
          <p className='  text-gray-500 font-medium'>Emergency Preparedness</p>
          </span>
          <span className='flex gap-4 items-center'>
          <i className='text-4xl  text-cyan-950'><AiFillCheckCircle /> </i>
          <p className='  text-gray-500 font-medium'>Identity Theft Protection</p>
          </span>

        </div>


        <div className=" flex items-center gap-2">
        

      <button className="lg:inline-block bg-cyan-950 px-5 py-2 text-white rounded-lg">Get started</button>
      <button className="lg:inline-block px-5 py-2 bg-cyan-500  text-white rounded-lg">How it Works?</button>
      </div>



      </div>
      

  </div>
</section>

<section>
  <div className="container  px-10 py-10 flex lg:flex-row  flex-col bg-slate-100">
    <div className="md:w-4/12 w-12/12 px-7 py-20">
    <h1 className=' text-3xl mb-4 font-extrabold text-cyan-950' data-aos='fade-down' data-aos-delay="100">Hear What Our Customers Say</h1>
      <p className='  text-gray-500 font-medium  mb-14' data-aos='fade-down' data-aos-delay="100">From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with.</p>
      <button className="lg:inline-block bg-cyan-950 px-5 py-2 text-white rounded-lg" data-aos='fade-in' data-aos-delay="100">Get started</button>

    </div>

    <div className='w-6/12   '>

      <div className='gid  '>
        <div className='w-[480px] rounded-xl shadow-xl  text-white  bg-white p-8'>
          <div  className='flex gap-4 mb-7'>
            <Image src={personne1} width={50} height={40} className='rounded-full'/>
           <div>
           <span className='text-black' >Jane Cooper</span>
            <p className='text-gray-500 font-medium ' >Customer - Dallas,TX</p>
           </div>
          </div>
          <div>
            <p className='text-black font-xl'>“With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!”</p>
          </div>

        </div>
        <div className='w-[480px] rounded-xl shadow-xl translate-x-[490px]  translate-y-[-100px] text-white  bg-white p-8'>
          <div  className='flex gap-4 mb-7'>
            <Image src={personne2} width={50} height={40} className='rounded-full'/>
           <div>
           <span className='text-black'>Alisa Richardson</span>
            <p className='text-gray-500 font-medium '>Customer - Miami, FL</p>
           </div>
          </div>
          <div>
            <p className='text-black font-xl'>
            “Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.”       
            </p>
          </div>

        </div>
        <div className='w-[480px] rounded-xl shadow-xl translate-y-[-210px]  text-white  bg-white p-8'>
          <div  className='flex gap-4 mb-7'>
            <Image src={personne3} width={50} height={40} className='rounded-full'/>
           <div>
           <span className='text-black'>Davon McKenny</span>
            <p className='text-gray-500 font-medium '>Customer - Seattle, WA</p>
           </div>
          </div>
          <div>
            <p className='text-black font-xl'>
            “After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.”              </p>
          </div>

        </div>
       
      </div>

    </div>
  </div>
</section>

<section id='contact'>
  <div className="container px-8 bg-slate-100  lg:py-10">
    <div className='md:w-5/12 w-12/12 mb-32'>
    <h2 className='text-lg font-bold mb-7'>Our Writeups</h2>
    <h1 className='font-bold text-4xl mb-7 text-cyan-950'>Our Latest Articles</h1>
    <p className='text-gray-500 font-medium text-md'>
    We are dedicated to staying at the forefront of our industry and keeping our valued community informed about the latest trends, insights, and innovations.
    </p>
    </div>

    <div className='flex lg:flex-row flex-col justify-between gap-20 lg:gap-1 mb-20 '>

      <div className="w-[450px]  rounded-xl p-3 bg-white" data-aos='fade-up' data-aos-delay="100">
        <Image src={post1} className='w-[100%] rounded-xl mb-2 translate-y-[-80px]'   />

        <h1 className='text-lg font-bold mb-6'>10 Essential Tips for Protecting Your from Burglaries</h1>
        <p className='text-gray-700 text-md mb-4'>
          Learn the best practices and simple steps to safeguard your home and loves ones from potential break-ins and theft .
        </p>

        
        <div className='w-[430px] justify-center items-center rounded-xl shadow-lg  text-white  bg-slate-100 p-8'>
          <div  className='flex gap-4 '>
            <Image src={personne1} width={50} height={40} className='rounded-full'/>
           <div>
           <span className='text-black  ' >Jane Cooper</span>
           </div>
          </div>
          

        </div>
      </div>
      <div className="w-[450px] rounded-xl p-3 bg-white" data-aos='fade-up' data-aos-delay="100">
        <Image src={post2} className='w-[100%] rounded-xl mb-2 translate-y-[-80px]'   />

        <h1 className='text-lg font-bold mb-6'>10 Essential Tips for Protecting Your from Burglaries</h1>
        <p className='text-gray-700 text-md mb-4'>
          Learn the best practices and simple steps to safeguard your home and loves ones from potential break-ins and theft .
        </p>

        
        <div className='w-[430px] justify-center items-center rounded-xl shadow-lg  text-white  bg-slate-100 p-8'>
          <div  className='flex gap-4 '>
            <Image src={personne2} width={50} height={40} className='rounded-full'/>
           <div>
           <span className='text-black  ' >Jane Cooper</span>
           </div>
          </div>
          

        </div>
      </div>
      <div className="w-[450px] rounded-xl p-3 bg-white" data-aos='fade-up' data-aos-delay="100">
        <Image src={post3} className='w-[100%] rounded-xl mb-2 translate-y-[-80px]'   />

        <h1 className='text-lg font-bold mb-6'>10 Essential Tips for Protecting Your from Burglaries</h1>
        <p className='text-gray-700 text-md mb-4'>
          Learn the best practices and simple steps to safeguard your home and loves ones from potential break-ins and theft .
        </p>

        
        <div className='w-[430px] justify-center items-center rounded-xl shadow-lg  text-white  bg-slate-100 p-8'>
          <div  className='flex gap-4 '>
            <Image src={personne3} width={50} height={40} className='rounded-full'/>
           <div>
           <span className='text-black  ' >Jane Cooper</span>
           </div>
          </div>
          

        </div>
      </div>
    </div>

    <div className=' flex justify-around items-center cursor-pointer hover:border- border-solid border-2 text-center mx-auto border-cyan-800 w-80 p-2 rounded-full'>
      
        <p>To view all posts <span className='font-bold'>click here</span> |    </p>
       <span className='text-4xl text-cyan-950 '> <AiFillRightCircle /></span>
    </div>
  </div>
</section>

<footer className='container flex lg:flex-row flex-col gap-10 p-6'>
  <div className='lg:w-4/12 w-12/12 p-10'>
    <Image src={Logo} className='mb-10' />

    <p className='text-gray-500 font-medium mb-10'>From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with</p>
    <span className='mt-5  text-xl font-medium mb-10'>Learn more <span className=' bg-cyan-950 text-white rounded-full px-2 py-1 cursor-pointer'>></span> </span>


  </div>
  <div className="lg:8/12 w-12/12 lg:px-20 py-10">
    <table className='px-10  text-left'>
      <tr>
        <th className='py-2 px-8 '>Company</th>
        <th className='py-2 px-8 '>Resources</th>
        <th className='py-2 px-8 '>Contact</th>  
      </tr>
      <tr>
        <td className='py-2 px-8 '>Home</td>
        <td className='py-2 px-8 '>Blog</td>
        <td className='py-2 px-8 ' rowSpan='2'>Please feel free to reach  out to us with any<br /> inquiries, questions, or assistance you may need.</td>
      </tr>
      <tr>
        <td className='py-2 px-8'>How We Work</td>
        <td className='py-2 px-8'>Support</td>
      </tr>
      <tr>
        <td className='py-2 px-8'>Our mission</td>
        <td className='py-2 px-8'>Terms and condition</td>
        <td className='py-2 px-8'> 23 Main Street, Cityville, State,Zip Code</td>
      </tr>
      <tr>
        <td className='py-2 px-8'>About</td>
        <td className='py-2 px-8'>Privacy Policy</td>
        <td className='py-2 px-8'>(555) 123-456</td>
      </tr> 
      <tr>
        <td className='py-2 px-8'>Careers</td>
        <td className='py-2 px-8'></td>
        <td className='py-2 px-8'>Https://mounircodes.com</td>
      </tr>
      <tr>
        <td className='py-2 px-8'>Contact</td>
      </tr>
    </table>


  </div>

  
</footer>

<hr />

<p className='text-gray-500 font-medium mb-10 text-center my-20'>Copyright 2023. Designed with  by joefreycodes.com All rights reserved.</p>



</>
  )
}
