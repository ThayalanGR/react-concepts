import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    items: [],
    loading: true,
    todoItem: ""
  };

  componentDidMount() {
    fetch("http://192.168.15.210:4000/api/items")
      .then(res => res.json())
      .then(items => {
        console.log(items);
        this.setState({
          items: items.data,
          loading: false
        });
      });
  }

  addItem = e => {
    e.preventDefault();
    fetch("http://192.168.15.210:4000/api/items", {
      method: "POST",
      body: JSON.stringify({
        item: this.state.todoItem
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(items => {
        console.log(items);
        this.setState({
          items: items.data
        });
      });
  };

  deleteItem = itemId => {
    fetch("http://192.168.15.210:4000/api/items", {
      method: "DELETE",
      body: JSON.stringify({
        id: itemId
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(items => {
        this.setState({
          items: items.data
        });
      });
  };
  render() {
    return (
      <div className="App container-fluid text-center">
        <nav className="navbar navbar-light bg-light row">
          <div className="navbar-brand mb-0 h1 col text-center">
            <img src={logo} className="App-logo " alt="logo" />
            Todo List{" "}
          </div>{" "}
        </nav>{" "}
        <div className="px-3 py-2">
          <form className="form-inline my-3" onSubmit={this.addItem}>
            <input
              type="text"
              className="form-control col-10"
              placeholder="What do you need to do?"
              value={this.state.todoItem}
              onChange={e =>
                this.setState({
                  todoItem: e.target.value
                })
              }
            />

            <input
              type="submit"
              className="btn btn-primary mb-2 col-2 col-sm-2"
              value="Add"
            />
          </form>
          {this.state.loading && <p> Loading... </p>}
          {!this.state.loading && this.state.items.length === 0 && (
            <div className="alert alert-secondary">No items - all done!</div>
          )}
          {!this.state.loading && this.state.items && (
            <table className="table table-striped">
              <tbody>
                {" "}
                {this.state.items.map((item, i) => {
                  return (
                    <tr key={item._id} className="row">
                      <td className="col-1"> {i + 1} </td>{" "}
                      <td className="col-10"> {item.item} </td>{" "}
                      <td className="col-1">
                        <button
                          type="button"
                          className="close"
                          aria-label="Close"
                          onClick={() => this.deleteItem(item._id)}
                        >
                          <span aria-hidden="true"> & times; </span>{" "}
                        </button>{" "}
                      </td>{" "}
                    </tr>
                  );
                })}{" "}
              </tbody>{" "}
            </table>
          )}{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
