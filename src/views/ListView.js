import React from 'react';
import Title from '../components/Title';
import ListTools from '../components/ListTools';

function ListView({
  list, onClickItem, onDeleteItem, onSearchList, onResetList, onSortList
}) {

  const handleDelete = (e, name) => {
    const container = e.currentTarget.closest("li");
    setTimeout(() => { onDeleteItem(name) }, 400);
    container.style.transition = "transform 0.3s";
    container.style.transform = "scale(0)";
  }

  return (
    <>
      <Title text={"Universities List"} />

      <ListTools onSearch={onSearchList} onSort={onSortList} onReset={onResetList} />

      <ul className="list">
        {
          list.map((item) => (
            <li key={item.domains[0]} className="list-item">
              <button type='button' className='item-btn' onClick={() => onClickItem(item)}>
                <h2>{item.name}</h2>
              </button>

              <button type='button' className='delete-btn' onClick={(e) => handleDelete(e, item.name)} title='Delete'>
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