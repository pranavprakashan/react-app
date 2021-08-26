import Header from "./Components/Header";
import Form from "./Components/Form";
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import Contacts from "./Components/Contacts";
import Update from "./Components/Update";


function App() {

  const [addButton, setaddButton] = useState(false)
  const [APIdata, setAPIdata] = useState([]);
  const [update, setUpdate] = useState(false)

  const updateClicked = () => {
    setUpdate(!update)
  }


  const showForm = () => {
    setaddButton(!addButton)
    console.log("clicked")
  }

  useEffect(() => {
    const getTasks = async () => {
      axios.get(`https://610103911d56e10017394d08.mockapi.io/users`)
        .then((response) => {
          setAPIdata(response.data)
        })
    }
    getTasks()
  }, [])

  const updateData = (data) => {

    let { id, firstName, lastName, number } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('number', number)
  }

  const getDataId = async () => {

  }

  const onDelete = (data) => { }

  return (
    <div className="App">
      <div className="container">
        <Header title={'Phone-book'} buttonStatus={addButton} onClick={showForm} />
        {addButton && <Form />}
        {update && <Update updateData={updateData} />}
        <Contacts contacts={APIdata} onClick={updateClicked} setData={updateData} getData={getDataId} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
