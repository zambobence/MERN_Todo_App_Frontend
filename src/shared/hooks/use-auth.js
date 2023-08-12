import React, { useCallback, useState, useEffect } from 'react'


export default function useAuth() {
    const [token, setToken] = useState(null)
    const [userData, setUserData] = useState(null)
    // const [isLoggedIn, setIsLoggedIn] = useState(null)

    const login = useCallback((user, token) => {
        setToken(token)
        setUserData(user)
    //    setIsLoggedIn(true)
        localStorage.setItem(
            'authUser',
            JSON.stringify({
                token: token,
                userData: user,
            })
        )
    },[])

    const logout = useCallback(() => {
        setToken(null)
        setUserData(null)
        localStorage.removeItem('authUser')
    },[])


    useEffect(() => {
        let storedUser
        storedUser = JSON.parse(localStorage.getItem('authUser'))
        if(storedUser && storedUser.user){
            const user = storedUser?.userData
                login(user?.userData, user?.token)
        }
    },[login])

    return {login, logout, token, userData}

}

