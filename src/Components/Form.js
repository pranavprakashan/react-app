import axios from "axios"
import { useState } from "react"

const Form = ({dataPost , onSubmit}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')

    const addData = (e) => {

e.preventDefault()
  
        axios.post(`https://610103911d56e10017394d08.mockapi.io/users`, {
                  firstName,
                  lastName,
                  number
      })

      setFirstName('')
      setLastName('')
      setNumber('')

      }


    return (
        <div className="formDiv">
            <form className="addForm" onSubmit={addData}>
            
            <div className="form-control">
                <input type="text" name="firstName" id="firstName" value={firstName} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
               
                </div>
                <div className="form-control">
                <input type="text" name="lastName" id="lastName" value={lastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                
                </div>
            <div className="form-control">
                <input type="text" name="number" id="number" value={number} placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
               
                </div>
 <div className="form-control">
<input type="submit" value="submit" className="btn"/>

                </div>

            </form>
        </div>
    )
}

export default Form
