import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/lib/Table";

function Subject({ profile }) {
  return (
    <Table condensed hover>
      <tbody>
        {Object.keys(profile).map(key => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{profile[key]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

Subject.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Subject;
