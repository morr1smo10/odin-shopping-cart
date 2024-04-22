import Header from "./Header";
import ReactLogo from "../assets/react.svg";

function Home({cart}) {
  return (
    <>
      <Header cart={cart}></Header>
      <div className="home_page">
        <img src={ReactLogo} alt="React Logo" />
        <h2>Welcome to the home page</h2>
        <p>Please visit the Shop page to do some shopping</p>
      </div>
    </>
  )
}

export default Home;