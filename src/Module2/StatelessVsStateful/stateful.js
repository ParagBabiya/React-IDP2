   import React,{Component} from "react";

class statefull  extends Component {
    constructor() {
      super()
      this.state = {
        currentUser: {},
        gamesAll: [],
        gamesMostPopular: []
      }
    }
    render() {
      return (
        <div>
          <p>Welcome, {this.state.currentUser}!</p>
          <AllGames allGames={this.state.gamesAll} />
          <MostPopular mostPopular={this.state.gamesMostPopular} />
        </div>
      )
    }
  }