function ContactsTable() {
  return (
    <div>
      <h4>Contacts Table</h4>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th scope="col">Photo</th>
            <th scope="col">Name</th>
            <th scope="col">Telephone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-active">
            <th>Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-active">
            <th>Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-active">
            <th>Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
          <tr className="table-active">
            <th>Active</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
