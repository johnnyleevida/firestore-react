import { useState } from 'react'
import firebase from 'firebase'

const Update = ({ doc }) => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [title, setTitle] = React.useState('')

  return (
    <>
      <input onClick={getValue} type='text' />
      <button onClick={updateValue}>Update</button>
    </>
  );
}

export default Update