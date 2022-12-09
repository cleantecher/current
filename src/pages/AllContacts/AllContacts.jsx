import React from "react";
import contact from "../../components/ContactItem/ContactItem";
// import contacts from "../../../controllers/api/contacts";



export default function allContacts({user}) {
  return (
    <>
      <div>
        List of All
      </div>
      <div>
        <contacts user={user}/>
      </div>
    </>
  );
}