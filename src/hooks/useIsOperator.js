import { useSelector } from 'react-redux'; 

const useIsOperator = () => {
    const {user} = useSelector(state => state.auth);
    return user.is_operator
}

export default useIsOperator