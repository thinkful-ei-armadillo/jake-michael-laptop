import React, { Component } from 'react';




function Summary (props) {


const summary = Object.keys(this.state.selected)
.map(key => <div className="summary__option" key={key}>
  <div className="summary__option__label">{key}  </div>
  <div className="summary__option__value">{this.state.selected[key].name}</div>
  <div className="summary__option__cost">
    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(this.state.selected[key].cost) }
  </div>
</div>)

const total = Object.keys(this.state.selected)
.reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    
}

export default Summary;

