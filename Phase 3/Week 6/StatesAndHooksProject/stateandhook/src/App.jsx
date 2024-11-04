import { useState } from 'react'


import './App.css'
import MyCounter from './Commponents/MyCounter'
import IncreaseDecreaseCount from './Commponents/IncreaseDecreaseCount'
import UseEffectForTitle from './Commponents/UseEffectForTitle'
//import List from './Commponents/List'
import UseReducer from './Commponents/UseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="all">
        {/* <List/> */}
        <MyCounter />
        <IncreaseDecreaseCount />
        <UseEffectForTitle />
        {/* <UseReducer/> */}
        {/* <UseReducer.Provider value="dark">
          <UseContext/>
        </UseReducer.Provider> */}
        {/* <UseContext.Provider value="dark"> */}
          {/* <UseContext /> */}
          
        {/* </ThemeContext.Provider> */}
        
      </div>
    </>
  );
}

export default App
