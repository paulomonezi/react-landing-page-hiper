import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';
import Header from './components/header/';
import Banner from './components/banner';
import Main from './components/main';
import Segments from './components/segments';

function App() {
  return (
    <>
      <div class="table-responsive">
          <Header />
          <Banner />
          <Main />
          <Segments />
          <GlobalStyle />
      </div>
    </>
  );
}

export default App;
