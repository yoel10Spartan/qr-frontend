import { useSelector } from 'react-redux'; 

const useIsAdmin = () => {
    const {user} = useSelector(state => state.auth);
    return user.is_staff
}

export default useIsAdmin