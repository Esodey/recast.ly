import Search from "./Search.js";
import VideoPlayer from "./VideoPlayer.js";
import VideoList from "./VideoList.js";
import exampleVideoData from "../data/exampleVideoData.js";

class App extends React.Component {
   constructor(){
     super()
     this.state = {
      currentVideo: exampleVideoData[4]
     }
   }

  updateVideoPlayer() {
    // this.setState({this.statestate.currentVideo = , setState})
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} handleClick={this.updateVideoPlayer}/>
          </div>
        </div>
      </div>
    )

  }
}

//hellooooo
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
