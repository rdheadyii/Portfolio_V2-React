// import Outlet from react router dom and import header/footer components
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
// return Header, Outlet to conditionally render page selected, and Footer
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
