import React from "react";
import Button from "react-bootstrap/lib/Button";
import Modal from "react-bootstrap/lib/Modal";

class TournamentInstructions extends React.Component {
  state = {
    showBonusCalc: false
  };

  toggleBonusCalc = e => {
    e.preventDefault();
    this.setState(state => {
      return { showBonusCalc: !state.showBonusCalc };
    });
  };

  render() {
    const { showPage } = this.props;
    return (
      <div>
        <h2>Prediction Tournament Instructions</h2>
        Thanks for letting us know a bit about yourself. We’ll now ask you to
        make some predictions about people. We’ll display profile information
        and based on this information, ask you to:
        <ol>
          <li>Make an informed "best guess".</li>
          <li>Place wagers across possible values of a given outcome.</li>
        </ol>
        Still curious?{" "}
        <a href="#bonus-calc" onClick={this.toggleBonusCalc}>
          Here's how the bonus is calculated
        </a>.
        <div className="static-modal">
          <Modal show={this.state.showBonusCalc}>
            <Modal.Header>
              <Modal.Title>Bonus Calculation Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                You will receive bonus points based on how close your best guess
                is to the actual value of the outcome for the profile you are making 
                predictions about, where you receive less and less the further your
                guess is from the truth, where the bonus is equal to the following
                “squared loss” formula:
                <img src="/equation.png" alt="Bonus equation" />
              </p>{" "}
            </Modal.Body>

            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.toggleBonusCalc}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Button
          className="btn btn-primary center-block"
          bsSize="lg"
          type="submit"
          onClick={() => showPage("tournament")}
        >
          Begin
        </Button>
      </div>
    );
  }
}

export default TournamentInstructions;
