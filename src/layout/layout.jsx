import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className='wrapper'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;