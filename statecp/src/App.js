import './App.css';
import React from 'react'


class App extends React.Component {
  state = {
    fullname: "foulen",
    bio : "lorem ipsum",
    imgsrc : "https://sebhastian.com/img/logo-sebhastian.png?ezimgfmt=rs:180x37/rscb11/ng:webp/ngcb10",
    profession : "flan",
    shows: true,
    counter: 0
    

  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        counter: prevState.counter += 0.5,
      }));
    }, 1000);
  }
handleShow = () => this.setState({ shows: !this.state.shows });

  render (){
  return (
  <div className="App">
  {/* <h1>counter: {this.state.counter}</h1> */}
  <button onClick={this.handleShow}>{this.state.shows ? "Hide" : "Show"}</button>
  {this.state.shows && (
    <div>
        <h1>counter: {this.state.counter}</h1>

      <img src={this.state.imgsrc} alt="profile picture" />
      <h2>{this.state.fullname}</h2>
      <p>{this.state.bio}</p>
      <p>{this.state.profession}</p>
    </div>
  )}
</div>
  )
}
  };


export default App;
