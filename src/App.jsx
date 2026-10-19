import Counter from './components/Counter';
import Input from './components/input';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { themeContext } from './components/ThemeContext';
import Conditional from './components/Conditional';
import Query from './components/Query'
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import Redux from './components/Redux';

export default function App() {
  const data = {
    name: "Faiza",
    designation: "ASE"
  };
  return (
    <themeContext.Provider value='light'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter value={data} />} />
          <Route path="/form" element={<Input />} />
          <Route path="/conditional" element={<Conditional/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/query' element={<Query/>}/>
          <Route path='createuser' element={<CreateUser/>}/>
          <Route path='store' element={<Redux/>}/>
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>

  )
}
