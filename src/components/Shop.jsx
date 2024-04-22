import Header from "./Header";
import { useEffect, useState } from "react";
import Item from "./Item";

function Shop({itemsList, loading, error, addItem, cart}) {
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header cart={cart}></Header>
      <div className="shop_page">
        <h2>Welcome to the Shop</h2>
        <div className="shop_grid_container">
          {itemsList.map(item => <Item key={item.id} item={item} addItem={addItem} cart={cart}></Item>)}
        </div>
      </div>
    </>
  )
}

export default Shop;