import { Link, useNavigate} from 'react-router-dom'


const About = () => {
  const navigate = useNavigate(); 
  navigate('/')

  return (
    <div>
      <h4>This is a react app followed by react course on Youtube. I created 7 components, used hooks like 
        useEffect, useState and useNavigate. Also used fake data api as json Trough this project I 
        learnt about Routes and hooks, combined with already <br/>
        familiar component creation. This project represents my current knowledge with React.
      </h4>
      <button className='btn' onClick={navigate}>Back</button>
    </div>
  )
}

export default About