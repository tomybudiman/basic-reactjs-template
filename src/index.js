import React,{Component} from 'react';
import {render} from 'react-dom';

import App from './components/App';

class Index extends Component {
  render(){
    return(
      <App/>
    )
  }
}

render(<Index/>,document.getElementById('root'));
