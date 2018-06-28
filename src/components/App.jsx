class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videoData: exampleVideoData
    };
    this.options = {key: 'AIzaSyAkHu1cK8EkmlCMmaTtpjhBXDPTvmjKCpI', max: 5, query: 'Cats'};
  }

  onVideoItemClick(currentVid) {
    this.setState({
      currentVideo: currentVid
    });
  }

  updateVideoList(data){
    this.setState({
      videoData: data
    });
  }   

  renderPlayerAndList(data){
    this.setState({
      currentVideo: data[0],
      videoData: data
    });
  }

  handleSearch(searchquery){ 
    this.options.query = searchquery;
    var self = this;
    searchYouTube(self.options, self.updateVideoList.bind(this));
  }
  
  componentDidMount(){
    var self = this;
    searchYouTube(self.options, self.renderPlayerAndList.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoData} handleClick={this.onVideoItemClick.bind(this)}/>
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

