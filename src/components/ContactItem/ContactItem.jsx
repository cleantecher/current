import React, { useEffect, useRef, useState , Component} from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import axios from "axios";



export default function ContactList() {
	const [contacts, setContacts] = useState([]);

	useEffect(function () {
		async function getContacts() {
			try {
				const response = await axios.get("/api/contacts");
				setContacts(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getContacts();
	}, []);

// aman thought the delete axios request would go here but isnt sure how to do it
  return (
    <div className="container">
      <h2>
        Contacts - List View
        <p>
          <Link to="/contacts/new" className="btn btn-primary">
            Contact Lists
          </Link>
        </p>
      </h2>
      <hr />

      {contacts.map((contact) => {
        return (
          <div
            className="card mb-3"
            style={{ maxWidth: "800px" }}
            key={contact._id}
          >
            <div className="row g-0">
              <div className="col-md-4 pl-5 ">
                {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
              </div>
              <div className="col-md-8">
                <div class="card-header">
                  <h5 className="card-title">
                    <Link to={`/contact/${contact._id}`} className="link-line">
                      Contact Name: {contact.firstName} {contact.lastName}
                    </Link>
                  </h5>
                </div>
                <div className="card-body ">
                  <h6 className="d-flex align-items-center">

                  </h6>
                  <p className="card-text limit-char">Company: {contact.company}</p>
                  <p className="card-text  d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-warning"></i>
                    <small className="text-muted one-liner">
                      Position: {contact.role}
                    </small>
                  </p>

                {/* Aman tried to create edit and delete buttons but didnt remember how to 
                add event handler */}
                  <button>Edit</button>
                  <Link to={`/contact/${contact._id}`} className="link-line">
                    <button>Delete</button>
                  </Link>
                  

                  

                  {/* <div class="card-footer">
                    <Link
                      to={`/cruds/${crud._id}/edit`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <span>
                      <small>
                        <Link to={`/cruds/${crud._id}`} className="link-line">
                          Read More...
                        </Link>
                      </small>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

  // return (
  //   <Container>
  //     <Row>
  //       {this.contact ((contact, idx) => (
  //         <>
  //           <div>{contact.firstname}</div>
  //           <div>{contact.lastname}</div>
  //         </>
  //       ))}
  //     </Row>
  //   </Container>
  // );
