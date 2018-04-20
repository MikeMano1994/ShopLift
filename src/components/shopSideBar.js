import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Shop       from './Shop';


// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

export default class ShopSideBar extends Component{
  constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
          <div>
          {this.props.children}
              <Router>
    <div style={{ display: "flex", color: '#7b9178', fontFamily: 'Montserrat'}}>
      <div
        style={{
          padding: "0px",
          width: "0%",
          background: "#white"
        }}
      >
        <ul className = "sidebar" style={{ listStyleType: "initial", fontSize: "18px"}}>
          
            <h2 className = "shop">Shop</h2>
    
              <li>
                <Link to="/shop/all">All</Link>
              </li>
             
              <li>
                <Link to="/shop/beverage">Beverage</Link>
              </li>
              
              <li>
                <Link to="/shop/dairy">Dairy</Link>
              </li>
              
              <li>
                <Link to="/shop/frozen">Frozen</Link>
              </li>

              <li>
                <Link to="/shop/fruit">Fruit</Link>
              </li>
              
              <li>
                <Link to="/shop/meat">Meat</Link>
              </li>
          
              <li>
                <Link to="/shop/vegetables">Vegetables</Link>
              </li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>
    

      <div style={{ flex: 1, padding: "0px"}}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
          </div>
        );
    }
}
 const routes = [
  {
    path: "/shop/all",
    exact: true,
    main: () => <h2>All</h2>
  },
  {
    path: "/shop/vegetables",
    main: () => <h2>Vegetables</h2>
  },
  {
    path: "/shop/beverage",
    main: () => <h2>Beverage</h2>
  },
    {
    path: "/shop/dairy",
    main: () => <h2>Dairy</h2>
  },
   {
    path: "/shop/fruit",
    main: () => <h2>Fruit</h2>
  },
   {
    path: "/shop/meat",
    main: () => <h2>Meat</h2>
  },
   {
    path: "/shop/frozen",
    main: () => <h2>Frozen</h2>
  },
];