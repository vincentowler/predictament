import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/lib/Table";

function Profile({ profile }) {
  return (
    <Table condensed hover>
      <tbody>
        {Object.keys(profile).map(key => {
          {
            /* This only exists for customizing the button label on some profiles 
            so don't display as part of profile. */
          }
          if (key === "saveWagerButtonLabel") return null;
          return (
            <tr
              key={key}
              className={
                key === "profileId" || key === "profileNumber" ? "hidden" : ""
              }
            >
              <td>{key}</td>
              <td>{profile[key]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Profile;
