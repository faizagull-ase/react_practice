import React, { useEffect, useState } from 'react'

export default function Users() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        async function fetchusers() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

            const data = await response.json();
            setUser(data);
        }
        fetchusers();
    },
        []
    );
    return (
        <>
            {user.map(
                (i) =>
                    <div>
                        Name : {i.name} , email : {i.email}
                    </div>
            )}
        </>
    )
}
