import { Helmet } from 'react-helmet';
import Navbar from 'components/Navbar';


const Layout = ({ title, children }) => (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name='description' content='{content}' />
        </Helmet>
        <Navbar />
        <div className="container mt-5">
            {children}
        </div>
    </>
);

export default Layout;