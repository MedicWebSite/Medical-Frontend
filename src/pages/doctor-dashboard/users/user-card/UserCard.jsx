import { useEffect, useRef, useState } from 'react'
import './UserCard.scss'
import { Button, Divider, Modal,notification, Space } from 'antd'
import { useDeleteUser } from '../../../../service/mutation/useDeleteUser'
import { UpdateUserModal } from '../../../../utils/Utils'
import { useUpdateUser } from '../../../../service/mutation/useUpdateUser'
import { toast } from 'react-toastify'

const UserCard = ({ userItem }) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [openAction, setOpenAction] = useState(false)
    const [updateUpdateModal, setUpdateUserModal] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [updatingFirstname, setUpdatingFirstname] = useState(currentUser?.firstname)
    const [updatingBirthday, setUpdatingBirthday] = useState('')
    const [updatingLastname, setUpdatingLastname] = useState('')
    const [userId, setUserId] = useState('')

    const [success, successContext] = notification.useNotification()


    const openSuccessNotification = (placement) => {
        success.info({
            message: 'User updated successfully'
        })
    }

    useEffect(() => {
        setUpdatingFirstname(currentUser?.firstname)
        setUpdatingLastname(currentUser?.lastname)
        setUpdatingBirthday(currentUser?.dateOfBirth)
    }, [currentUser])

    console.log(updatingFirstname);


    const { mutate: mutateDelete } = useDeleteUser()
    const {mutate: mutateUpdate} = useUpdateUser()
   
    

    const clickOutside = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clickOutside.current && !clickOutside.current.contains(event.target)) {
                setOpenAction(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    const handleDeleteUser = () => {
        mutateDelete(userId, {
            onSuccess: (res) => {
                res.statusCode === 200 && setDeleteModal(false)
            }
        })
    }


    useEffect(() => {
        deleteModal || updateUpdateModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [deleteModal, updateUpdateModal])


    const handleUpdateUser = (e) => {
        e.preventDefault()
        const updatedUser = {
            id: currentUser?.id,
            firstname: updatingFirstname,
            lastname: updatingLastname,
            dateOfBirth: new Date(updatingBirthday).toISOString()
        }
        mutateUpdate(updatedUser, {
            onSuccess:(res) =>{
                if(res.status === 200){
                     setUpdateUserModal(false)
                    toast.success('User updated successfully',{
                        position: 'top-right',
                        autoClose: 3000,
                        // progress: 'undefined'
                    })
                } 
                    console.log(res);
            }
        })
    }

    return (
        <>
            <div ref={clickOutside} onClick={() => setOpenAction(true)} className='user-card'>
                <p className='user-role'>{userItem.userRole === '0' ? 'Staff' : 'Client'}</p>
                <span onClick={() => setOpenAction(true)} className='material-symbols-outlined user__action-btn'>more_vert</span>
                <img src={'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png'} alt={userItem.firstname} />
                <h3 className='user-name'>{userItem.firstname}</h3>
                <p className='user-email'>{userItem.email}</p>

                <div style={openAction ? { display: 'block' } : { display: 'none' }} className="action-card">
                    <div onClick={() => { setUpdateUserModal(true); setCurrentUser(userItem) }} className="action-item">
                        <span className='item-icon material-symbols-outlined'>edit</span>
                        <strong className='item-text'>Edit</strong>
                    </div>
                    <div onClick={() => { setDeleteModal(true); setUserId(userItem.id) }} className="action-item">
                        <span className='item-icon material-symbols-outlined'>delete</span>
                        <strong className='item-text'>Delete</strong>
                    </div>
                    <div className="action-item">
                        <span className='item-icon material-symbols-outlined'>discover_tune</span>
                        <strong className='item-text'>Reset Password</strong>
                    </div>
                </div>
                <Modal className='delete__user-modal' open={deleteModal} okText={<Button onClick={handleDeleteUser} className='delete-btn'>Delete</Button>} okType='none' onOk={() => setDeleteModal(true)} onCancel={() => setDeleteModal(false)}>
                    <span className='modal-icon material-symbols-outlined'>warning</span>
                    <h5 className='modal-subtitle'>Delete User ?</h5>
                    <p className='modal-text'>This action can not bu undone. Do you want to continue ?</p>
                </Modal>
            </div>
            <Modal open={updateUpdateModal} title={<h5 className='update-subtitle'>Update</h5>} onCancel={() => setUpdateUserModal(false)} okType='none' okText={<Button className='update-btn' onClick={handleUpdateUser}>Update</Button>} className='update__user-modal'>
                <Divider />
                <form  className='update-form'>
                    <label className='update__form-item' htmlFor="firstname">Firstname
                        <input onChange={(e) => setUpdatingFirstname(e.target.value)} type="text" id='firstname' value={updatingFirstname} />
                    </label>
                    <label className='update__form-item' htmlFor="lastname">Lastname
                        <input onChange={(e) => setUpdatingLastname(e.target.value)} type="text" id='lastname' value={updatingLastname} />
                    </label>
                    <label className='update__form-item' htmlFor="date">Birthday
                        <input onChange={(e) => setUpdatingBirthday(e.target.value)} type="date" id='date' value={updatingBirthday} />
                    </label>
                </form>
            </Modal>

        </>
    )
}

export default UserCard
