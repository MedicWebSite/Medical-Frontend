import Container from '../utils/Utils'
import'./Statistics.scss'
import CountUp from 'react-countup'

const Statistics = () => {
  return (
    <div className='statistics'>
      <Container>
        <div className="staistic-wrapper">
          <div className='tatistic-card'>
            <span className='material-symbols-outlined card-icon'>groups</span>
            <CountUp className='count-number' end={1010 } duration={7}/>
            <h3 className='card-subtitle'>Happy People</h3>
          </div>
          <div className='tatistic-card'>
            <span className='material-symbols-outlined card-icon'>group</span>
            <CountUp className='count-number' end={350} duration={7}/>
            <h3 className='card-subtitle'>Our Member</h3>
          </div>
          <div className='tatistic-card'>
            <span className='material-symbols-outlined card-icon'>trophy</span>
            <CountUp className='count-number' end={126} duration={7}/>
            <h3 className='card-subtitle'>Award Win</h3>
          </div>
          <div className='tatistic-card'>
            <span className='material-symbols-outlined card-icon'>thumb_up</span>
            <CountUp className='count-number' end={957} duration={7}/>
            <h3 className='card-subtitle'> Treatment</h3>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Statistics
