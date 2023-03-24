import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Authorization({children}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('serviceproviderToken')) {
            navigate('/serviceprovider/home');
        }
        else{
            navigate('/serviceprovider'); 
        }
    },[navigate])
    return children
}

export default Authorization