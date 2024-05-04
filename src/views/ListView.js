import React from 'react';
import Title from '../components/Title';
import ListTools from '../components/ListTools';

function ListView({
  list, onClickItem, onDeleteItem, onSearchList, onResetList, onSortList, isLoading
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

      {(!isLoading && list.length > 0) ? (
        <ul className="list">
          {list.map((item) => (
            <li key={item.domains[0]} className="list-item">
              <button type='button' className='item-btn' onClick={() => onClickItem(item)}>
                <h2>{item.name}</h2>
              </button>

              <div className='delete-btn-container'>
                <button type='button' className='delete-btn' onClick={(e) => handleDelete(e, item.name)} title='Delete'>
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className='no-results-msg'>No results found.<br /> Search or Reset list for more results.</p>
      )}
    </>
  )
}

export default ListView;