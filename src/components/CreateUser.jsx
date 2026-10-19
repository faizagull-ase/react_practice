import React from 'react'
import { useMutation } from '@tanstack/react-query'
import {createUser} from '../api/createUser'
export default function CreateUser() {
    const addUserMutation = useMutation({
        mutationFn : createUser
    }
    )
  return (
    <button className='create-user' onClick={()=>{
        addUserMutation.mutate({
            name:"Faiza Gull",
            email:"faiza@test.com"
        })
    }}>
        {addUserMutation.isPending?'Creating user':'Created'}
    </button>
  )
}
