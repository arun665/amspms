import logo from './logo.svg';
import './App.css';
import BookContainer from './components/BookContainer.js';
import GetPassCat from './components/GetPassCat.js';
import Header from './components/Header.js';

import SignupContainer from './components/SignupContainer.js';
import MainContainer from './components/mainContainer.js';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from './redux/Store.js';
import { Container,Row,Col } from 'react-bootstrap';


/*    <Header/>
    <Container>
   <Row> <Col><BookContainer/></Col> 

<Col>
   <GetPassCat/> </Col> </Row>
</Container>*/


function App() {
  return (
<BrowserRouter>
    <Provider store={store}>
    <div className="App">

<MainContainer/>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
