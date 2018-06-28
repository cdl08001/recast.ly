class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      currentVideo: exampleVideoData[0]
    };
  }

  onVideoItemClick(currentVid) {
    this.setState({
      clicked: !this.state.clicked,
      currentVideo: currentVid
    });
    console.log('Clicked');
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData} handleClick={this.onVideoItemClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }

}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// ReactDOM.render(<App />, document.getElementById('app'));

