import Header from "./Header";

function CheckoutItem({stuff}) {
  const stuff_title = stuff.title;
  const stuff_count = stuff.count;
  const stuff_price = stuff.price;

  return (
    <div className="checkout_stuff">
      <p className="checkout_title">{stuff_title}</p>
      <p className="checkout_count">{stuff_count}</p>
      <p className="checkout_price">${stuff_price}</p>
    </div>
  )
}

function Checkout({cart, itemsList}) {
  let inventory = [];
  let total_price = 0;
  for (const [key, value] of Object.entries(cart)) {
    if (value !== 0) {
      let item = itemsList[key-1];
      total_price = total_price + item.price * value;
      let temp = {id: item.id, count: value, title: item.title, price: item.price * value};
      inventory.push(temp);
    }
  }

  return (
    <>
      <Header cart={cart}></Header>
      <div className="checkout_page">
        <h2>Welcome to the Checkout</h2>
        <div className="checkout_grid_container">
          {inventory.map(stuff => <CheckoutItem stuff={stuff} key={stuff.id}></CheckoutItem>)}
        </div>
        <p className="checkout_total_price">Total: ${total_price}</p>
      </div>
    </>
  )
}

export default Checkout;