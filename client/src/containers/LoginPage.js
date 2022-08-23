import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetRegistered } from "features/user_auth";
import Layout from "components/Layout";


const LoginPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetRegistered());
    }, []);

    return (
        <Layout title='Alpha Invest | Login' content='Login Page'>
            <h1>Login</h1>
        </Layout>
    )
}

export default LoginPage;