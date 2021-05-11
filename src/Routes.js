import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import App from "./App";
import { ChatList } from "./components/ChatList";

const Profile = ({ routerProp }) => {
  console.log(routerProp);
  return <div>This is profile page</div>;
};

export const Routes = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact>
          <ChatList />
        </Route>
        <Route path="/chats/:chatId">
          <App />
        </Route>
        <Route
          path="/profile"
          render={(obj) => <Profile routerProp={obj} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

const Button = (props) => {
  return <div style={{ border: "1px solid red" }}>{props.children}</div>;
};

export const Example = () => {
  return (
    <>
      <Button>
        <div>smth</div>
      </Button>
      <Button>
        <span style={{ fontWeight: "bold" }}>Hello</span>
        <span style={{ fontWeight: "bold" }}>Hello</span>
        <span style={{ fontWeight: "bold" }}>Hello</span>
      </Button>
      <Button>simple text</Button>
    </>
  );
};
