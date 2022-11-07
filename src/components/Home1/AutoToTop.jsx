import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './Home1.css'

export default function AutoToTop() {
  let {pathname} = useLocation()
  
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])


    return null;
}
