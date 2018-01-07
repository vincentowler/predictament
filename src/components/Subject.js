import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/lib/Table";

function Subject({ attributes }) {
  return (
    <Table condensed hover>
      <tbody>
        {Object.keys(attributes).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{attributes[key]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

Subject.propTypes = {
  attributes: PropTypes.object.isRequired
};

export default Subject;
