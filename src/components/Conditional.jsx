import React from 'react'

export default function Conditional({ value }) {
    const collection = [
        {
            id: "123",
            name: "noor",
            email: "faiza@TEST.com"
        },
        {
            id: '456',
            name: "noor",
            email: "umar@TEST.com"
        },
        {
            id: '789',
            name: "noor",
            email: "Esa@TEST.com"
        },
        {
            id: '436',
            name: "noor",
            email: "Muhammad@TEST.com"
        }
    ]
    return (
        <>
            <div className='m-2'>
                {collection.
                    map((c) =>
                    (
                        <span className='inline-flex gap-4 items-center py-3 px-4 m-20 bg-white rounded-lg' key={c.id}>
                            <span>Name is:<strong>{c.name}</strong></span>
                            <span>Email is:<strong>{c.email}</strong></span>
                        </span>
                    ))
                }
            </div>

            {collection
                .filter((e) => e.name === "noor")
                .map((e) => (
                    <p key={e.id}>
                        {e.name} -- {e.email}
                    </p>
                ))}

            {/* Comment here */}
            {collection.some((c) => c.name === "faiza") &&
                <p>Faiza exists in the collection!</p>
            }
            {collection.every((c) => c.name === "noor") &&
                <p>Noor is all over!</p>
            }
        </>
    )
}
