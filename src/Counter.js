import React, { Component } from 'react'

class Counter extends Component {
   componentDidMount(){
       this.timer = window.setInterval(() => {
           console.log('timer is on')
       }, 2000)
   }
    
  componentWillUnmount() {
      window.clearInterval(this.timer)
      console.log('Component will Unmount')
  }
    render(){
        return (
            <div>
                <p>Timer is running</p>
            </div>
        )
    }
}
export default Counter;