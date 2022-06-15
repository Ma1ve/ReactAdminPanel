import './employees-list.css';
import EmployersListItem from '../employees-list-item/employees-list-item';

const EmployersList = ({ data, onDelete, onToggleProp }) => {
  // onToggleIncrease, onToggleRise
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <EmployersListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    );
  });

  return (
    <ul className="app-list list-group">
      {/* <EmployersListItem name="Kim" salary={10} />
      <EmployersListItem name="Jim" salary={20} />
      <EmployersListItem name="Him" salary={30} /> */}

      {elements}
    </ul>
  );
};

export default EmployersList;
