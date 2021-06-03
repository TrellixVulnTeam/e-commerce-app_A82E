import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss'

//const HomePage = ({ history }) => { // pass history prop down
const HomePage = () => {
  return (
    <div className='homepage'>
      <Directory/>
    </div>
  )
}

export default HomePage;