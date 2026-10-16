import Counter from './components/Counter';
import Input from './components/input';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { themeContext } from './components/ThemeContext';
import Conditional from './components/Conditional';
import Users from './components/Users';
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
        </Routes>
      </BrowserRouter>
    </themeContext.Provider>

  )
}
