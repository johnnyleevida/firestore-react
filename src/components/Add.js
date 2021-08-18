import React from "react"
import firebase from "firebase"

const Add = () => {
  const [value, setValue] = React.useState("")
  const db = firebase.firestore()

  const getValue = (e) => setValue(e.target.value)

  const addValue = () => {
    db.collection('values')
      .doc(value)
      .set({ value })
      .then(function() { console.log('Value successfully written!') })
      .catch(function(err) { console.error("Error writing Value: ", err) })
  }

  return (
    <div>
      <input onBlur={getValue} type='text' />
      <button type='button' onClick={addValue}>Add</button>
    </div>
  )
}

export default Add;