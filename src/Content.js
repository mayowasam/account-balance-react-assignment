import React, { Component } from 'react'
import { connect } from 'react-redux'




export class Content extends Component {
    render() {
        
        return (
            <div>
                <h1>hello {this.props.userName}</h1>
                <h1>balance is {this.props.accountBalance}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userName: state.userName,
    accountBalance: state.accountBalance
  
  })
  
 

export default connect(mapStateToProps,null)(Content)
