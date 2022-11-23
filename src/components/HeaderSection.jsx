import logo from '../assets/logo.svg';

const Header = () => {
    return ( 
        <>
            <nav className='navigation '>
                <img src={logo} alt="logo" className='logo_image'/>
            </nav>
        </>
     );
}
 
export default Header;