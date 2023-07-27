import React, { useEffect } from "react";
import { Table } from "reactstrap";
const Contactus = () => {
  useEffect(() => {
    document.title = "Contact us";
  }, []);
  return (
    <div>
      <h3 className="text-center my-3" color="pink">
        For Any Query Connect With Us
      </h3>
      <Table bordered>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Conact No</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <th scope="row">1</th>
            <td>Saurabh</td>
            <td>Wathare</td>
            <td>9423865420</td>
            <td>saurabh@wathare.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Contactus;
