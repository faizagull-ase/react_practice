import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../api/users'
export default function Query() {
    const { data:users, isPending, isError, error } = useQuery({
        queryKey: ["users"],
        queryFn : getUsers
    }
    )
    if (isPending){
        return <div>Pending ...</div>
    }
    if(isError){
        return <div>Error fetching data {error.message}</div>
    }
    return (
        <>
        {users.map(
            (user)=>
                <div key={user.id}>
                    Name is {user.name}
                </div>
        )}
        </>
    )
}
