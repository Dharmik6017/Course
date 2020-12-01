import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  formSubmit = (event) => {
    console.log("this.props");
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    console.log("this.props", this.props);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.formSubmit}>
          <label className="field">Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
