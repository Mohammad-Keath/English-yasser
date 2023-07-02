import './Footer.css'
import Facebook from '../assets/social/facebook.png'
import Whatsapp from '../assets/social/WhatsApp.png'
function Footer(){
    return(
        <div id='footer'>
            {/* <p className='footerP'>CONTACT US</p>  */}
            <p>Tel: +905310137740</p>
            <p>englishlanguarium@gmail.com</p>
            <div>
            <a href='https://englishlanguarium.wixsite.com/my-site/about-1'> <img className='icons' alt="facebook" src={Facebook}/> </a> 
            <a href='https://englishlanguarium.wixsite.com/my-site/about-1'><img className='icons' alt='whatsapp' src={Whatsapp}/></a>
            </div>
            <p>© 2023 </p>
        
                
        </div>
    )
}
export default Footer