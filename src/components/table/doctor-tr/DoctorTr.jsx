import './DoctorTr.scss'

const DoctorTr = ({doctorItem}) => {
    console.log(doctorItem);
  return (
   <tr className='body-row'>
        <td>{doctorItem.firstName}</td>
        <td>{doctorItem.lastName}</td>
        <td>{doctorItem.dateOfBirth?.slice(0,10)}</td>
        <td>{doctorItem.gender === 0 ? 'Male' : 'Female'}</td>
        <td>{doctorItem.specialization}</td>
        <td>{doctorItem.address}</td>
        <td>{doctorItem.contactNumber}</td>
        <td>{doctorItem.email}</td>
        <td className='row-action'>
            <span className='material-symbols-outlined edit-icon'>edit</span> 
            <span className='material-symbols-outlined delete-icon'>Delete</span>
        </td>
   </tr>
  )
}

export default DoctorTr
