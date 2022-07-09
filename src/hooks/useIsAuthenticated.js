import { useSelector } from 'react-redux'; 

const useIsAuthenticated = () => {
    const token = localStorage.getItem('token');
    const refresh = localStorage.getItem('refresh');

    const {user} = useSelector(state => state.auth);
    return !!user.id && !!token && !!refresh
}

export default useIsAuthenticated