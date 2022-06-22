import './App.css';
import SearchBar from "./components/SearchBar/SearchBar";
import Container from "./components/Container/Container";
import { HeaderContainer, Header } from './components/Header/Header.styled';
import Title from './components/Header/Header';
import { ToastContainer, toast } from "react-toastify";
import DataTable from "./components/DataTable/DataTable"
import "react-toastify/dist/ReactToastify.css";


function App() {
  
  
  return (
    <Container>
      <HeaderContainer>
      <Title/>
    <SearchBar/>
    </HeaderContainer>
    <DataTable/>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default App;
