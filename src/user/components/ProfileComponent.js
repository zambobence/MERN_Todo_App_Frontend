import React, { useContext } from 'react'
import AuthContext from '../../shared/context/auth-context'
import Button from '../../shared/components/Button'
import './ProfileComponent'

export default function ProfileComponent(props) {
    const {userData} = useContext(AuthContext)
  return (
    <div>
        <h2>Profile</h2>
        <p>Email: {userData?.email}</p>
        <p>UserID: {userData?.id}</p>
        <Button className={"center"} onClick={props.handleDelete} style={{marginTop: "2rem"}}>Delete User</Button>
    </div>
  )
}
