import React from 'react'
import useCreateUser from '../../query-hooks/useCreateUser';

export default function SetUser() {

  const mutation = useCreateUser();

  return (
    <div>
      <button type="button" onClick={() => mutation.mutate({ name: 'John Doe', age: 50 })}>Mutate</button>

      {mutation.isError && <p>Could not create user...</p>}
      {mutation.isSuccess && <p>{mutation.data.name}</p>}
    </div>
  )
}
