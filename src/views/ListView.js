import React from 'react';
import Title from '../components/Title';

function ListView({ list, onClickItem, onDeleteItem }) {
  return (
    <>
      <Title text={"Universities List"} />
      <ul className="list">
        {
          list.map((item) => (
            <li key={item.domains[0]} className="list-item">
              <button type='button' className='item-btn' onClick={() => onClickItem(item)}>
                <h2>{item.name}</h2>
              </button>

              <button type='button' className='delete-btn' onClick={() => onDeleteItem(item.name)} title='Delete'>
                X
              </button>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default ListView;