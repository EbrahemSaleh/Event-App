import React  from 'react';
import {connect} from 'react-redux';
import  { Component } from 'react';
import { incrementCounter, decrementCounter} from './testActions';
import {Button} from 'semantic-ui-react'

const mapState = (state) => ({
  data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter
}

class  TestArea extends Component {

  render(){ 
    const {data , incrementCounter , decrementCounter} = this.props
  return (
    <div>
      <h1> test area </h1>
      <h2> this answaer  : {data}</h2>
      <Button onClick={incrementCounter} positive content='increment' />
      <Button onClick={decrementCounter} negative content='decrement' />
    </div>
  )
  }
    
}

export  default connect(mapState , actions)(TestArea);