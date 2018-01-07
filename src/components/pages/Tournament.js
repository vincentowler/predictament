import React from "react";
import Subject from "../Subject";
import ItemList from "../ItemList";
import Button from "react-bootstrap/lib/Button";
import TextInput from "../TextInput";

class Tournament extends React.Component {
  state = {
    attributes: {
      Age: 42,
      Weight: "200 pounds",
      Race: "White",
      Industry: "Software",
      Education: "Masters"
    },
    xAxis: "Income",
    data: [
      { id: 1, label: "$50,000", tokens: 0 },
      { id: 2, label: "$75,000", tokens: 0 },
      { id: 3, label: "$100,000", tokens: 0 },
      { id: 4, label: "$150,000", tokens: 0 },
      { id: 5, label: "$200,000", tokens: 0 }
    ],
    wagerSubmitted: false,
    bonusQuestion: {
      label: "For an additional bonus, guess this person's exact income.",
      value: ""
    }
  };

  MAX_TOKENS = 3;

  componentDidMount() {
    this.setState({ wagerSubmitted: false });
  }

  getTokensLeft() {
    return (
      this.MAX_TOKENS -
      this.state.data.map(obj => obj.tokens).reduce((acc, curr) => acc + curr)
    );
  }

  handleAddClick = (item, event) => {
    event.preventDefault();
    item.tokens++;
    // Use map to return a new array, but with the item passed item replaced
    const data = this.state.data.map(d => (d.id === item.id ? item : d));
    this.setState({ data });
  };

  handleRemoveClick = (item, event) => {
    event.preventDefault();
    item.tokens--;
    // Use map to return a new array, but with the item passed item replaced
    this.setState(state => {
      const data = state.data.map(d => (d.id === item.id ? item : d));
      return { data };
    });
  };

  handleWagerSubmit = e => {
    e.preventDefault();
    this.setState({ wagerSubmitted: true });
  };

  handleBonusSubmit = e => {
    e.preventDefault();
    this.props.showPage(5);
  };

  handleBonusChange = e => {
    this.setState({ bonusQuestion: e.target.value });
  };

  render() {
    const tokensLeft = this.getTokensLeft();
    const {
      xAxis,
      attributes,
      data,
      bonusQuestion,
      wagerSubmitted
    } = this.state;
    return (
      <div>
        <h2>What is this person's income?</h2>
        <p>
          Click the -/+ signs below to place wagers on this person's income.
        </p>
        <p>You have {this.MAX_TOKENS} tokens to assign.</p>
        <div className="token-wrapper">
          <form onSubmit={this.handleWagerSubmit}>
            <h3>Profile</h3>
            <Subject attributes={attributes} />
            <ItemList
              xAxis={xAxis}
              data={data}
              tokensLeft={tokensLeft}
              onAddClick={this.handleAddClick}
              onRemoveClick={this.handleRemoveClick}
            />
            <p>You have {tokensLeft} tokens left.</p>

            {!wagerSubmitted && (
              <Button
                className="btn btn-primary center-block"
                bsSize="lg"
                type="submit"
                disabled={this.getTokensLeft() > 0}
                title={`You must assign all ${
                  this.MAX_TOKENS
                } tokens to continue.`}
              >
                Continue
              </Button>
            )}
          </form>

          {wagerSubmitted && (
            <form onSubmit={this.handleBonusSubmit}>
              <TextInput
                id="bonusQuestion"
                name="bonusQuestion"
                onChange={this.handleBonusChange}
                label={bonusQuestion.label}
                value={bonusQuestion.value}
              />
              <Button
                className="btn btn-primary center-block"
                bsSize="lg"
                type="submit"
              >
                Save Wager
              </Button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Tournament;
