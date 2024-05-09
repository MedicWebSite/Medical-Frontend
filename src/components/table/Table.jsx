import './Table.scss'
import DoctorTr from './doctor-tr/DoctorTr'

const Table = ({objectKeys, columnsData, AllDoctorsList}) => {
    return (
        <table>
            <thead>
                <tr>
                    {
                        objectKeys?.slice(1, 9).map((column_item, index) =>

                        <th key={index}>{column_item}</th>
                        )
                    }
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    AllDoctorsList?.map((doctorItem, index) =>
                        <DoctorTr doctorItem={doctorItem} key={index}   />
                    
                    )
                }
            </tbody>
        </table>
    )
}

export default Table
