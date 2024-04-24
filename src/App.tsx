import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from 'sonner';
import './App.css';
import FindNearestComponent from './app/modules/find/pages/find-nearest.component';
import NavbarComponent from './app/shared/components/navbar.component';



function App() {

  return (
    <main>
      <Toaster richColors closeButton />

      <Router>
        <section>
          <NavbarComponent />
        </section>

        <div style={{ padding: '2em' }}>
          <Routes>
            <Route path="/" element={<FindNearestComponent />} />
          </Routes>
        </div>
      </Router>

    </main>
  )
}

export default App
