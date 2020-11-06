import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// const App = () => {

//   return (
//     <div className="ui container comments">
//       <ApprovalCard>
//         <CommentDetail
//           author="Alex"
//           date="Today at 6:00PM"
//           text="My first blog!!"
//         />
//       </ApprovalCard>
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log("error", err)
    );
  }

  render() {
    return <div>Hello Therree {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
