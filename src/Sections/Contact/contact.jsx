import React ,{useEffect}from 'react'
import './contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function Contact() {

  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <div id='contact'>
        <h1 data-aos="fade-up">Contact( )</h1>
        <div className="underline" data-aos="fade-up"></div>
        <div className="details">

          <div className="col-1" data-aos="fade-up" >
            <form action="">
              <span>
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='Email'/>
              </span>

              <input type="text" placeholder='Subject'/>
              <input type="text" placeholder='Your Message'/>
              <button>Submit</button>
            </form>
          </div>

          <div className="col-2" data-aos="fade-up">
            <div className='options'>
              <div className="option-1">
                <i class="fa-solid fa-phone"></i>
                <h5>+91 8547635528</h5>
              </div>
              <div className="option-1">
                <i class="fa-solid fa-envelope"></i>
                <h5>fuhadsanin500@gmail.com</h5>
              </div>
              <div className="option-1">
                <i class="fa-brands fa-linkedin-in"></i>
                <h5>Fuhad Sanin</h5>
              </div>
            </div>

          </div>

        </div>

    </div>
)
}
export default Contact
