import Header from '../components/Header';
import "../styles/global.scss"

const Layout = props => (
  <div>
    <Header />
    <section className="body">
    {props.children}
    </section>
  </div>
);

export default Layout;