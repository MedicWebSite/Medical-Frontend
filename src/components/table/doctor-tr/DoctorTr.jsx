import { useEffect, useState } from 'react';
import './DoctorTr.scss'
import { Modal, Button } from 'antd';
import { useDeleteDoctor } from '../../../service/mutation/useDeleteDoctor';
import { client } from '../../../service/QueryClient';

const DoctorTr = ({ doctorItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorId, setDoctorId] = useState()
  const [doctorName, setDoctorName] = useState('')

  const { mutate } = useDeleteDoctor()
  const handleDelete = (e) => {
    e.preventDefault()
    mutate(doctorId, {
      onSuccess: (res) => {
        client.invalidateQueries('doctors')
        res.statusCode === 200 && setIsModalOpen(false)
      }
    })
  };

  useEffect(() => {
    isModalOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }, [isModalOpen])

  return (
    <tr className='body-row'>
      <td>{doctorItem.firstName}</td>
      <td>{doctorItem.lastName}</td>
      <td>{doctorItem.dateOfBirth?.slice(0, 10)}</td>
      <td>{doctorItem.gender === 0 ? 'Male' : 'Female'}</td>
      <td>{doctorItem.specialization}</td>
      <td>{doctorItem.address}</td>
      <td>{doctorItem.contactNumber}</td>
      <td>{doctorItem.email}</td>
      <td className='row-action'>
        <span className='material-symbols-outlined edit-icon'>edit</span>
        <span onClick={() => { setIsModalOpen(true); setDoctorId(doctorItem.id); setDoctorName(doctorItem.firstName) }} className='material-symbols-outlined delete-icon'>Delete</span>
      </td>
      <Modal className='delete-modal' title={<h5 className='modal-subtitle'>Delete Doctor ?</h5>} open={isModalOpen} onOk={handleDelete} okText={<Button className='delete-btn'>Delete</Button>} okType='none' onCancel={() => setIsModalOpen(false)}>
        <span className='material-symbols-outlined warning-icon'>warning</span>
        <p className='delete-text'>{`Are you sure you want to delete user ${doctorName} `}?</p>

      </Modal>
    </tr>
  )
}

export default DoctorTr
