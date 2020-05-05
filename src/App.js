import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Counter from './Counter';

class App extends Component{
  constructor(props){
    // The constructor method is called before the component is mounted to the DOM.
    // State and bind event handlers methods within the constructor method are initialized.
    console.log('Initial Phase_Constructor');
    super(props);
    this.state = {
      score : 10,
      tscore : 50,
      teamsList : ['Hyderabad','Bangalore','Chennai'],
      timerOn : true
    };
    this.stopTimer = this.stopTimer.bind(this);
  }
  
  addTeams = () => {
    this.setState (prevState => ({ 
      teamsList: [...prevState.teamsList,'Kolkata','Mumbai']
    }) 
  )
  }
  
  deleteTeams = () => {
    this.setState(prevState =>({
      teamsList: [prevState.teamsList.splice()]
    }))
  }

  stopTimer(){
    this.setState({timerOn : false })
  }
  
  // this method is called before the component is mounted to the DOM. 
  // By returning an object, we update the state of the component before it is even rendered.

  static getDerivedStateFromProps(){
    console.log('Mounting Phase_getDerivedStateFromProps')
      return {
        score : 1000
      }
  }
  // This function is invoked immediately after the component is mounted to the DOM.

  componentDidMount() {
    this.handletScore();
    console.log('Mounting phase_componentDidMount')
  }

  // when you don’t want a component to re-render if the state and props don’t changes
  // renders when method returns true
  shouldComponentUpdate(){
    console.log('Updating Phase_shouldComponentUpdate');
    return true;
  }
  
  render(){
    // render is called, the component is mounted to the DOM
    console.log('render')

  return (
    <div className="App">
      <h2>Score : {this.state.score}</h2>
      <button onClick={
        this.handletScore = ()=> {
          this.setState({ tscore : 500 }) 
          }
        }>
          Team 1 Score : {this.state.tscore}</button>
        <div>
          <ul> List of Teams: 
          {this.state.teamsList.map(team =>(
            <li>{team}</li>
          ))
          }
        <button onClick = {this.addTeams}>Add more teams</button>
        </ul>
        <button onClick = {this.deleteTeams}>Remove teams</button>
        </div> 
        
        {this.state.timerOn ? 
            <div>
                <Counter />
                <button onClick = {this.stopTimer}>Stop Timer</button>
            </div>: 
            <p>Timer has been stopped</p>
        }
        
    </div>
  );
}
  getSnapshotBeforeUpdate(prevProps,prevState){
    if(this.state.teamsList > prevState.teamsList){
    const len = this.state.teamsList.length
    console.log('Updating Phase_getSnapshotBeforeUpdate',len)
    return {
      len
    }
    }
    return null
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    if(snapshot!== null){
      console.log('Updating phase_componentDidUpdate')
    }
  }
}
export default App;
ReactDOM.render(<App />, document.getElementById("root"));