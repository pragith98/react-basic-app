import { useState } from "react";
import ContactTableComponentItem from "./ContactTableComponentItem";

function ContactsTable() {
    const [contactList, setContactList] = useState([
        {
          name: {
            title: "Miss",
            first: "Jennie",
            last: "Nichols",
          },
          phone: "(272) 790-0888",
          picture: {
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
        },
        {
          name: {
            title: "Miss",
            first: "zzzzz",
            last: "Nichols",
          },
          phone: "(272) 790-0828",
          picture: {
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
        },
        {
          name: {
            title: "Miss",
            first: "Jennie",
            last: "Nichols",
          },
          phone: "(272) 790-0188",
          picture: {
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          },
        },
      ]);

  

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

  return (
    <div>
      <h4>Contacts Table</h4>
        <button type="button" class="btn btn-primary mb-1">Add New</button>
      
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
