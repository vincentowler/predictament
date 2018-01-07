import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/lib/Table";
import Badge from "react-bootstrap/lib/Badge";

const ItemList = ({ xAxis, tokensLeft, data, onRemoveClick, onAddClick }) => (
  <div>
    <Table condensed hover>
      <thead>
        <tr>
          <th>{xAxis}</th>
          <th>Tokens</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          return (
            <tr key={item.label}>
              <td>{item.label}</td>
              <td>
                <Badge>{item.tokens}</Badge>
              </td>
              <td className="text-left">
                <button
                  className="btn btn-primary"
                  disabled={item.tokens < 1}
                  title="Remove token"
                  onClick={e => onRemoveClick(item, e)}
                >
                  -
                </button>{" "}
                <button
                  className="btn btn-primary"
                  disabled={tokensLeft === 0}
                  title="Add Token"
                  onClick={e => onAddClick(item, e)}
                >
                  +
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </div>
);

ItemList.propTypes = {
  xAxis: PropTypes.string.isRequired,
  tokensLeft: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  onAddClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default ItemList;
