import './App.css';
import styled from 'styled-components'
import { AiOutlineClose } from "react-icons/ai";
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Root>
     <div className='header'>
    <Header />
     </div>
     <div className='main'>
       <Main />
     </div>
    </Root>
  );
}




const Root = styled.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: auto;
height: 100%;
gap: 10px;

.header {
  grid-column:  1/ -1;
}
.main {
  grid-column: 1/ -1;
  flex: 1;
}
`

export default App;
