import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

function UserDetail() {
    let param = useParams()
    console.log(param)
    let [user, setUser] = useState(null)

    useEffect(() => {
        async function getData() {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
            let result = await response.json()
            setUser(result)
        }
        getData()
    }, [])
    return user ? (
        <div className='user-detail'>
            <NavLink to='/' className='home-link'>Назад</NavLink>
            <div className='user-detail-wrapper'>
                <h1>{user.name}</h1>
                <h2>Username: {user.username}</h2>
                <p><b>E-mail: </b><span>{user.email}</span></p>
                <p><b>Location: </b><span>{user.address?.city}</span></p>
                <p><b>Phone: </b><span>{user.phone}</span></p>
                <p><b>Website: </b><span>{user.website}</span></p>
                <p><b>Company: </b><span>{user.company.name}</span></p>
            </div>
        </div>
    ) : ""
}

export default UserDetail