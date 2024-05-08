import './Users.scss'
import{ useState } from 'react'
import { Tooltip, Input, Skeleton } from 'antd';
import UserCard from './user-card/UserCard';
import { useGetUsers } from '../../../service/query/useGetUsers';
const { Search } = Input;


const Users = () => {
  const [searchValue, setSearchValue] = useState('')

  const { data, isLoading } = useGetUsers('/users/get-all')
  const filteredData = data?.filter(item => item.firstname?.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className='users-content'>
      <h3>Users</h3>
      <div className="users__content-header">
        <Search className='search-form'
          placeholder="Search Doctor..."
          allowClear
          enterButton="Search"
          size="medium"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="content__header-action">
          <Tooltip className='action-tooltip' placement='top' title="Users Log history">
            <span className='tooltip-icon material-symbols-outlined'>person_check</span>
          </Tooltip>
          <Tooltip className='action-tooltip' placement='top' title="List view">
            <span className='tooltip-icon material-symbols-outlined'>list</span>
          </Tooltip>
          <Tooltip className='action-tooltip' placement='top' title="Create">
            <span className='tooltip-icon material-symbols-outlined'>add</span>
          </Tooltip>
        </div>
      </div>
      <div className="users__card-wrapper">
        {
          !isLoading ? filteredData?.map(user =>
            <UserCard userItem={user} key={user.id} />
          )
            :
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12].map((_, index) =>
              <div key={index} className='skeleton__card-wrapper'>
                <Skeleton.Node className="card-skeleton">
                  <Skeleton.Avatar active={true} size={'large'} shape='circle' style={{ width: 120, height: 110, marginTop: 50 }} />
                  <Skeleton.Input active={true} size='medium' style={{ width: 120, height: 20 }} />
                </Skeleton.Node>
              </div>
            )
        }
      </div>
    </div>
  )
}

export default Users