import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const PrivateProvider = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (loading) {
        return (
            <div className="min-h-screen py-10 px-5 flex items-center justify-center">
                <progress className="progress w-56"></progress>
            </div>
        )
    }

    if (user?.email) {
        return children;
    }
    return <Navigate to={'/signin'} replace></Navigate>
};

export default PrivateProvider;