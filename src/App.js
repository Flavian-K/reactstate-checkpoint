import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person: {
				fullName: "Flav K",
				bio: "A software dev who is spontaneous.",
				imgSrc: "path_to_image.jpg",
				profession: "Software Developer Student",
				hobbies: "traveling, dancing, going on adventures",
				faveShowNetflix: "currently 'Hellbound' ",
				bestPieceofTech: "Samsung Z Flip 4",
			},
			shows: false,
			timeInterval: 0,
		};
		this.timer = null;
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState((prevState) => ({
				timeInterval: prevState.timeInterval + 1,
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	toggleShow = () => {
		this.setState((prevState) => ({
			shows: !prevState.shows,
		}));
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.toggleShow}>
					{this.state.shows ? "Hide Profile" : "Show Profile"}
				</button>

				{this.state.shows && (
					<div>
						<h1>{this.state.person.fullName}</h1>
						<p>{this.state.person.bio}</p>
						<img src={this.state.person.imgSrc} alt="Profile" />
						<p>{this.state.person.profession}</p>
						<p>Hobbies: {this.state.person.hobbies}</p>
						<p>Favorite Show on Netflix: {this.state.person.faveShowNetflix}</p>
						<p>Best Piece of Tech: {this.state.person.bestPieceofTech}</p>
					</div>
				)}

				<p>Time since mounted: {this.state.timeInterval} seconds</p>
			</div>
		);
	}
}

export default App;
