import React, { useState } from 'react';
import Options from './component/Options';


function App() {
  const [healthy, setHealthy] = useState(false)
  return (
  <div className='App'>
    <Options healthy = {healthy} setHealthy = {setHealthy} />
  </div>
  )
}

export default App;
