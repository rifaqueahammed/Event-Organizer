
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Authorization({children}) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('adminToken')) {
            navigate('/admin')
        }
    })
    return children
}

export default Authorization
