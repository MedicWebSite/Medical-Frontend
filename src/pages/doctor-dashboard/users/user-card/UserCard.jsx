import { useEffect, useRef, useState } from 'react'
import './UserCard.scss'
import { Button, Divider, Modal, notification, message, Upload, Image } from 'antd'
import { useDeleteUser } from '../../../../service/mutation/useDeleteUser'
import { UpdateUserModal } from '../../../../utils/Utils'
import { useUpdateUser } from '../../../../service/mutation/useUpdateUser'
import { toast } from 'react-toastify'
import { PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { client } from '../../../../service/QueryClient'

const UserCard = ({ userItem }) => {

    const token = localStorage.getItem('token')

    // --- STATE HOOKS ---
    const clickOutside = useRef()
    const [userId, setUserId] = useState('')
    const [imageList, setImageList] = useState([])
    const [openAction, setOpenAction] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [previewImage, setPreviewImage] = useState('')
    const [deleteModal, setDeleteModal] = useState(false)
    const [previewOpen, setPreviewOpen] = useState(false)
    const [updatingBirthday, setUpdatingBirthday] = useState('')
    const [updatingLastname, setUpdatingLastname] = useState('')
    const [updatePhoto, setUpdatePhoto] = useState(null)
    const [photoUrl, setPhotourl] = useState(null)

    const [updateUpdateModal, setUpdateUserModal] = useState(false)
    const [updatingFirstname, setUpdatingFirstname] = useState(currentUser?.firstname)

    console.log(imageList);

    useEffect(() => {
        setUpdatingFirstname(currentUser?.firstname)
        setUpdatingLastname(currentUser?.lastname)
        setUpdatingBirthday(currentUser?.dateOfBirth)
    }, [currentUser])

    // Using Queries
    const { mutate: mutateDelete } = useDeleteUser()
    const { mutate: mutateUpdate } = useUpdateUser()


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


    // --- Delete User Function ---
    const handleDeleteUser = () => {
        mutateDelete(userId, {
            onSuccess: (res) => {
                res.statusCode === 200 && setDeleteModal(false)
                client.invalidateQueries({ queryKey: ['get-users'] })
            }
        })
    }

    useEffect(() => {
        deleteModal || updateUpdateModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [deleteModal, updateUpdateModal])





    const handleUploadPhoto = (e) => {
        const file = e.target.files[0]
        if (file) {
            const fileReader = new FileReader()
            fileReader.onload = (e) => {
                const content = e.target.result
                setUpdatePhoto(content)
                setPhotourl(content)
            }
            fileReader.readAsDataURL(file)
        }
    }

    // --- Update User Function ---
    const handleUpdateUser = (e) => {
        e.preventDefault()
   

        const formData = new FormData();
        formData.append('Id', currentUser?.id);
        formData.append('Firstname', updatingFirstname);
        formData.append('Lastname', updatingLastname);
        formData.append('DateOfBirth', new Date(updatingBirthday && updatingBirthday).toISOString());
        formData.append('ImagePath', updatePhoto || null)

        console.log(formData);

        fetch('http://45.138.158.240:4040/api/users/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

    }

    // ---- Upload Image ----
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    const handleChange = ({ imageList: newFileList }) => setImageList(newFileList);

    const uploadButton = (
        <button style={{ border: 0, background: 'none', }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8, }}  > Upload Photo </div>
        </button>
    );

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
                <form className='update-form'>
                   <div className="form-header">
                    {
                        photoUrl ? <img src={photoUrl } />
                        : <h4 className='user-name'>{currentUser?.firstname[0]}</h4>
                    }
                   </div>
                    <label className='update__form-item' htmlFor="firstname">Firstname
                        <input onChange={(e) => setUpdatingFirstname(e.target.value)} type="text" id='firstname' value={updatingFirstname} />
                    </label>
                    <label className='update__form-item' htmlFor="lastname">Lastname
                        <input onChange={(e) => setUpdatingLastname(e.target.value)} type="text" id='lastname' value={updatingLastname} />
                    </label>
                    <label className='update__form-item' htmlFor="date">Birthday
                        <input onChange={(e) => setUpdatingBirthday(e.target.value)} type="date" id='date' value={updatingBirthday} />
                    </label>
                    <label className='update__form-item' htmlFor="photo">Profile Photo
                        <input onChange={handleUploadPhoto} type="file" id='photo' />
                    </label>

                </form>
            </Modal>

        </>
    )
}

export default UserCard
