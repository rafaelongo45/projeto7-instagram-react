import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Body from "./Body"
import FooterMobile from "./FooterMobile"

function App(){
  return (
    <div>
      <Navbar />
      <Body />
      <FooterMobile />
    </div>
  );
}

const app = App();
const root = document.querySelector('.root');

ReactDOM.render(app, root);
