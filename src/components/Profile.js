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
          {
            /* Since we want to send profileId and profileNumber to Netflify,
          we need to place them in the DOM, which is why we're styling them hidden 
          instead of supressing rendering altogether. */
          }
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
