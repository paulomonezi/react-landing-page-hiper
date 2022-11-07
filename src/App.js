import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';
import Header from './components/header/';
import Banner from './components/banner';
import Main from './components/main';
import Segments from './components/segments';
import SliderSection from './components/sliderSection';
import SampleSection from './components/sampleSection';
import Plans from './components/planOffer';

function App() {
  return (
    <>
      <div class="table-responsive">
        <Header />
        <Banner />
        <Main />
        <Segments />
        <SliderSection />
        <SampleSection/>
        <Plans/>
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
