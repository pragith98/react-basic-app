import { useEffect, useState } from "react";
import ContactTableComponentItem from "./ContactTableComponentItem";

function ContactsTable() {
    const [loadData, setLoadData] = useState(false);
    const [contactList, setContactList] = useState([]);

  useEffect(()=>{
    fetch("https://www.randomuser.me/api").then(Response =>{
        return Response.json()
    }).then(Response =>{
        setContactList((contactList) => contactList.concat(Response.results));
    })
  },[loadData]);



  const contactListComponentList = contactList.map((item) => {
    return(
        <ContactTableComponentItem
        key={item.phone}
        name={`${item.name.title}. ${item.name.first} ${item.name.last}`}
        telephone={item.phone}
        photo={item.picture.thumbnail}
      />
    )
  });

  

  

  const addNewItem = () =>{
    setLoadData(!loadData);
  }

  return (
    <div>
      <h4>Contacts Table</h4>
        <button type="button" className="btn btn-primary mb-1" onClick={addNewItem}>Add New</button>
      
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Telephone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{contactListComponentList}</tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
