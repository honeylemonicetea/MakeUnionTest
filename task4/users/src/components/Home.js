import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        async function getData() {
            let response = await fetch("https://jsonplaceholder.typicode.com/users")
            let result = await response.json()
            setUsers(result)
        }
        getData()
    }, [])
    return (

        <div className="api__wrapper">
            <ul className="api__user-list">
                {users.map(item => <li><NavLink to={`user/${item.id}`}>{item.name}</NavLink></li>)}
            </ul>
        </div>


    )
}

export default Home