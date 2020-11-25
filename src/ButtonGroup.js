import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withdrawMoney } from './actions/test'


export class ButtonGroup extends Component {
    render() {
        const {dispatchBtn}=this.props
        return (
            <div>
                <button data-amount="10000" onClick={dispatchBtn}>WITHDRAW $10000</button>
                <button data-amount="5000" onClick={dispatchBtn}>WITHDRAW $5000</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    dispatchBtn: (e) => { dispatch(withdrawMoney(e.target.dataset.amount)) }
  })
export default connect(null,mapDispatchToProps)(ButtonGroup)
