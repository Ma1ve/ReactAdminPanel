// import { Component } from 'react';

import './employees-list-item.css'

const EmployersListItem = (props) => {

  const {name, salary, onDelete, onToggleProp, increase, rise} = props;
  // onToggleIncrease, onToggleRise

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase){
    classNames += ' increase';
    
  }
  if (rise){
    classNames += ' like'
  }
  

  return (
    <li className={classNames}>                         
      <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise" >{name}</span> {/* onToggleRise */}
      <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
      <div className='d-flex justify-content-center align-items-center'>
          <button type="button"
              className="btn-cookie btn-sm "
              onClick={onToggleProp}  /* onToggleIncrease */
              data-toggle="increase" >
              <i className="fas fa-cookie"></i>
          </button>

          <button type="button"
                  className="btn-trash btn-sm "
                  onClick={onDelete}>
              <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
      </div>
    </li>
  );
  
}

export default EmployersListItem;




// class EmployersListItem extends Component{ нужно еще } <----
// constructor(props) {

//     super(props);
//     this.state = { // создаем состояния
//       increase: false,
//       like: false
//     }

//   }


//   onIncrease = () => {
//     this.setState(({increase}) => ({
//       increase: !increase
//     }))
//   }

//   person = () => {
//     this.setState(({like}) => ({
//       like: !like
//     }))
//   }