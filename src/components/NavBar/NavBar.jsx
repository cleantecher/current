import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./Navbar.css";

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav id="navbar">
      &nbsp; | &nbsp;
      Welcome, {user.name} 
      &nbsp;  &nbsp;
     
      <Link to='/strategy'>Current strategy</Link>
      &nbsp; | &nbsp;
      <Link to='/strategy/new'>NewStrategy</Link>
      &nbsp; | &nbsp;
      <Link to='/contacts/new'>NewContact</Link>
      &nbsp; | &nbsp;
      <Link to='/contacts'>All contacts</Link>
          &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

//Have to add links to All pages, the New Contacts, All contacts, NewStrategy, ImplementedStreegy