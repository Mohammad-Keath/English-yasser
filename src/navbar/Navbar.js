import './Navbar.css'
import logo from '../assets/english.png'
function Navbar (){
    return(
       
         <div id='navbarOption'>
            <img alt='logo' id='logo' src={logo}/>
        <a href='https://englishlanguarium.wixsite.com/my-site/about-1'>HOME</a>
        <a href='https://englishlanguarium.wixsite.com/my-site/about-1'>COURSES</a>
        <a href='https://englishlanguarium.wixsite.com/my-site/about-1'>ABOUT</a>
        <a id='contact' href='https://englishlanguarium.wixsite.com/my-site/about-1'>CONTACT</a>
        </div>
      
    )
}
export default Navbar