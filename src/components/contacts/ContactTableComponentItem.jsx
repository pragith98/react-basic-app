function ContactTableComponentItem(props){
    return(
        <tr className="table-active">
        <td>
          <img
            src={props.photo}
            className="rounded-circle"
          />
        </td>
        <td className="align-middle">{props.name}</td>
        <td className="align-middle">{props.telephone}</td>
        <td className="align-middle">
          <button type="button" className="btn btn-dark">
            Edit
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    )
}

export default ContactTableComponentItem;