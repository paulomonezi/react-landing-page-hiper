import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';
import Header from './components/header/';
import Banner from './components/banner';
import Main from './components/main';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Main/>
    <GlobalStyle/>
    </>
   
  );
}

export default App;
