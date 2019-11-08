import React from 'react'
import Button from '@material-ui/core/Button';

/**
 * logout user
 */
function logout(){
    window.localStorage.removeItem('loggedIn');
    window.location.href='./';
}

const Navbar = () => {

        return (
            <nav className="navbar bg-primary"> 
                <img src="/logo.png" alt="Scratch pay logo" />
                <Button variant="contained" onClick={logout} color="primary" className="logout">
                    Logout
                </Button>
            </nav>
        )
}




export default Navbar
 