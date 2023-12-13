
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
const {user,loading} =useContext(AuthContext);

if(loading)
{
    return <span className="loading loading-spinner loading-lg"></span>
}
if(user)
    {
        
    return children;
    } 
    
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;