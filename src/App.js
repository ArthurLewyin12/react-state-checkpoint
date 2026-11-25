import React, { Component } from "react";
import { Eye, EyeSlash, Briefcase, Timer1 } from "iconsax-reactjs";
import "./App.css";

// Turns a number of seconds into "mm:ss" (or "h:mm:ss" after one hour)
function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return hours > 0 ? `${hours}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Grace Hopper",
        bio:
          "American computer scientist and US Navy rear admiral. She worked on the Harvard Mark I in 1944, " +
          "wrote one of the first compilers, and her work led to COBOL, a language still used by banks today. " +
          "She also made the word \"debugging\" famous after a moth was found stuck in a computer.",
        imgSrc:
          "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/500px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg",
        profession: "Computer scientist",
      },
      shows: false,
      secondsSinceMount: 0,
    };
  }

  // Called once, right after the first render: we start counting the seconds
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ secondsSinceMount: prevState.secondsSinceMount + 1 }));
    }, 1000);
  }

  // Called just before the component is removed: we stop the interval
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, secondsSinceMount } = this.state;

    return (
      <div className="App">
        <main className="page">
          <header className="top-bar">
            <h1 className="title">Profile</h1>
            <p className="timer">
              <Timer1 size={18} color="currentColor" variant="Linear" />
              Mounted <strong>{formatTime(secondsSinceMount)}</strong> ago
            </p>
          </header>

          <button className="toggle-button" onClick={this.toggleProfile}>
            {shows ? (
              <EyeSlash size={20} color="currentColor" variant="Linear" />
            ) : (
              <Eye size={20} color="currentColor" variant="Linear" />
            )}
            {shows ? "Hide profile" : "Show profile"}
          </button>

          {shows && (
            <article className="profile">
              <img className="profile-photo" src={person.imgSrc} alt={person.fullName} />
              <div className="profile-info">
                <h2 className="profile-name">{person.fullName}</h2>
                <p className="profile-profession">
                  <Briefcase size={18} color="currentColor" variant="Linear" />
                  {person.profession}
                </p>
                <p className="profile-bio">{person.bio}</p>
              </div>
            </article>
          )}
        </main>
      </div>
    );
  }
}

export default App;
