import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Layout from "components/Layout";


const DashboardPage = () => {
    const { isAuthenticated, user, loading } = useSelector(state => state.user);

    if (!isAuthenticated && !loading && user === null)
        return <Navigate to='/login' />;

    return (
        <Layout title='Alpha Invest | Dashboard' content='Dashboard Page'>
            {loading || user === null ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
					<h1 className='mb-5'>Dashboard</h1>
					<p>User Details</p>
					<ul>
                        <li>Name: {user.first_name}  {user.last_name}</li>
						<li>Email: {user.email}</li>
                    </ul>
                    <p>My Actions</p>
                    <div className="list-group">
                        <a href="#!" className="list-group-item list-group-item-action">PETR4</a>
                        <a href="#!" className="list-group-item list-group-item-action">ITSA4</a>
                        <a href="#!" className="list-group-item list-group-item-action">MGLU3</a>
                    </div>
				</>
            )}
        </Layout>
    );
};

export default DashboardPage;