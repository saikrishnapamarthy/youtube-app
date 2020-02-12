import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="m-3">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h3 className="ui header">
              <i className="video icon violet"></i>
              <div className="content">
                Video Explorer
                <div className="sub header">Explore the World of Videos</div>
              </div>
            </h3>
            <div className="ui fluid icon input">
              <input
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
