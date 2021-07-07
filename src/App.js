import './App.css';
import Header from "./components/header/Header";
import {Route} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
        <Header />
        <Route path={'/users'} component={Users} />
        <Route path={'/posts'} component={Posts} />
        <Route path={'/comments'} component={Comments} />
    </div>
  );
}

export default App;
