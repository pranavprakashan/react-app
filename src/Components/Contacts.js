import { HiPencil, HiOutlineTrash } from 'react-icons/hi'


const Contacts = ({ contacts , onClick , setData , onDelete , getData}) => {


    return (
        <div>
           
            <table className="ui celled table">
                <thead>
                    <tr><th>First Name</th>
                        <th>Last Name</th>
                        <th>Number</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => {
                        return (
                            <tr key={contact.id}>
                                <td data-label="firstName">{contact.firstName}</td>
                                <td data-label="lastName">{contact.lastName}</td>
                                <td data-label="number">{contact.number}</td>
                                <td> <HiPencil onClick= { () =>{ setData(contact); onClick() } }  ></HiPencil> </td>
                                <td> <HiOutlineTrash onClick= { () =>{ getData(contact); onDelete() } }  > </HiOutlineTrash> </td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>




        </div>
    )
}

export default Contacts
