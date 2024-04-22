import { Link } from "react-router-dom";

function Header({cart}) {
  const total_count = Object.values(cart).reduce((a, b) => a + b, 0);
  return (
    <div className="header">
      <nav>
        <div className="header_grid">
          <Link to="/">Home</Link>
        </div>
        <div className="header_grid">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="header_grid">
          <Link to="/checkout">Checkout: {total_count}</Link>
        </div>
      </nav>
    </div>
  )
}

export default Header