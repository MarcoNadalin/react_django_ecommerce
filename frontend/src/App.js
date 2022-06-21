import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1> welcome </h1>
        </Container>        
      </main>
      <Footer />
    </div>
  );
}

export default App;
