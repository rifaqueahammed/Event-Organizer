import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Authorization({children}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('userToken')) {
            navigate('/user');
        }
        else{
            navigate('/'); 
        }
    },[navigate])
    return children
}

export default Authorization