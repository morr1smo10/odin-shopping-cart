import { useState } from "react";

function Item({item, addItem, cart}) {
  const id = item.id;
  const title = item.title;
  const price = item.price;
  const image = item.image;
  let initial_count = 0;
  if (cart[id]) {
    initial_count = cart[id];
  }
  const [itemCount, setItemCount] = useState(initial_count);

  function handleMinus() {
    if (itemCount !== 0) {
      setItemCount(prevCount => prevCount - 1)
      addItem(id, -1)
    }
  }

  function handlePlus() {
    setItemCount(prevCount => prevCount + 1)
    addItem(id, 1)
  }

  function handleInput(e) {
    let newCount = parseInt(e.target.value, 10);
    if (isNaN(newCount)) {
      newCount = 0;
    }
    const diff = newCount - itemCount;
    setItemCount(newCount);
    addItem(id, diff);
  }

  return (
    <div className="item_grid">
      <img src={image} alt={title} className="item_image"/>
      <p className="item_title">{title}</p>
      <p className="item_price">$ {price}</p>
      <div className="select_quantity">
        <button className="minus_btn" onClick={() => handleMinus()}>-</button>
        <input type="number" name="amount" id="amount" value={itemCount} onChange={(e) => handleInput(e)}/>
        <button className="plus_btn" onClick={() => handlePlus()}>+</button>
      </div>
    </div>
  )
}

export default Item;