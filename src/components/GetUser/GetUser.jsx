import React from 'react'
import useUser from '../../query-hooks/useUsers';

export default function GetUser() {

  const user = useUser(5);

  return (
    <div>
      {user.isError && <p>Could not load user...</p>}
      {user.isSuccess && <p>{user.data.name}</p>}
    </div>
  );
};
