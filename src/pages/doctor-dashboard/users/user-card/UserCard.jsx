import './UserCard.scss'

const UserCard = ({ userItem }) => {
    return (
        <div className='user-card'>
            <p className='user-role'>{userItem.userRole === '0' ? 'Staff' : 'Client'}</p>
            <img src={'https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png'} alt={userItem.firstname} />
            <h3 className='user-name'>{userItem.firstname}</h3>
            <p className='user-email'>{userItem.email}</p>
        </div>
    )
}

export default UserCard
