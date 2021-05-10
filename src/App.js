
import './App.css';

import MainContainer from './components/MainContainer.js';

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
  return (    <div className="App">
<BrowserRouter>
    <Provider store={store}>


<MainContainer/>

    
    </Provider>

    </BrowserRouter>
        </div>
  );
}

export default App;
