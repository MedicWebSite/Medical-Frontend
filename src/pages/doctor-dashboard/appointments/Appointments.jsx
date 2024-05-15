import { useGetBooking } from '../../../service/query/useGetBooking';
import './Appointments.scss'
import { Space, Table, Tag } from 'antd';


const columns = [
    {
        title: 'Patient Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Doctor Name',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Start Time',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'End Time',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Status',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
   
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher', ],
    },
];

const Appointments = () => {

    const {data: bookingsAll} = useGetBooking()
    console.log(bookingsAll.data);


    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Appointments