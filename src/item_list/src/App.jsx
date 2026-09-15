import { useState } from 'react';
import AddItem from './AddItem.jsx';
import PackingList from './PackingList.jsx';

let nextId = 3;
const initialItems = [
  { id: 0, title: 'Warm socks', packed: true },
  { id: 1, title: 'Travel journal', packed: false },
  { id: 2, title: 'Watercolors', packed: false },
];


export default function TravelPlan() {
  const [items, setItems] = useState(initialItems);
  //se eliminan estos estados redundantes

  //const [total, setTotal] = useState(3);
  //const [packed, setPacked] = useState(1);

  /**y se remplaza por un calculo manual del valor, esto se ebe hacer siempre que se pueda
   * ayudate con la ia para saber que estados son redundantes, cuales se pueden calcular a partir
   * de otros
   */
  const total = items.length;
  const packed = items
    .filter(item => item.packed)
    .length;


  function handleAddItem(title) {
    //setTotal(total + 1);
    setItems([
      ...items,
      {
        id: nextId++,
        title: title,
        packed: false
      }
    ]);
  }

  function handleChangeItem(nextItem) {
    //console.log(nextItem);
    setItems(items.map(item => {
      if (item.id === nextItem.id) {
        return nextItem;
      } else {
        return item;
      }
    }));
  }

  function handleDeleteItem(itemId) {
    //setTotal(total - 1);
    setItems(
      items.filter(item => item.id !== itemId)
    );
    //esto es para debuguear
    let estados = {items, total, packed};
    
    //setPacked(packed - 1);
    console.log(estados);
  }

  return (
    <>
      <AddItem
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onChangeItem={handleChangeItem}
        onDeleteItem={handleDeleteItem}
      />
      <hr />
      <b>{packed} out of {total} packed!</b>
    </>
  );
}
