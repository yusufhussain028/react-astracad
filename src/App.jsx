import { React, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomizedTables from './components/Table/Table';
import CustomizedTables2 from './components/ProjectCreationTable/Table2';
import ResponsiveDrawer from './components/DrawerComponent/Drawer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomizedTables />} />
          <Route path="/createdProjects" element={<CustomizedTables2 />} />
          <Route path="/drawer" element={<ResponsiveDrawer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
