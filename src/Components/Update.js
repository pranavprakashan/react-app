import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Update = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')

    const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setNumber(localStorage.getItem('number'))
}, []);

const updateData =(e) => {
   
    axios.put(`https://610103911d56e10017394d08.mockapi.io/users/${id}`, {
        firstName,
         lastName,
        number
	})
}

    return (
        <div className="formDiv">
            <form className="addForm"  onSubmit={updateData}>

                <div className="form-control">
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />

                </div>
                <div className="form-control">
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />

                </div>
                <div className="form-control">
                    <input type="text" name="number" id="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />

                </div>
                <div className="form-control">
                    <input type="submit" value="Update" className="btn" />

                </div>

            </form>
        </div>
    )
}

export default Update
