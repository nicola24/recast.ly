class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'surfing',
      videos: [], 
      video: {
        id: {
          videoId: '0'
        },
        snippet: {
          title: 'test title',
          description: 'description'
        }
      },
    };
    this.onListItemClick = this.onListItemClick.bind(this);
    this.searchFunc = this.props.searchYouTube.bind(this);
    this.onVideoSearchClick = this.onVideoSearchClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.renderOnUpdate = this.renderOnUpdate.bind(this);
  }
  
  setData(data) {
    this.setState(
      {
        videos: data,
        video: data[0]
      });
  }
  
  componentDidMount() {
    this.searchFunc({
      key: window.YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5
    }, this.setData.bind(this));
  }
  
  renderOnUpdate() {
    this.searchFunc({
      key: window.YOUTUBE_API_KEY,
      query: this.state.query,
      max: 5
    }, this.setData.bind(this));
  }
  
  onListItemClick(video) {
    this.setState (
      {
        video: video
      }
    );
  }
  
  onSearchChange(value) {
    this.setState (
      {
        query: value
      }
    );
    this.renderOnUpdate();
  }
  
  onVideoSearchClick() {
    this.renderOnUpdate();
  }
  
  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div>
            <Search searchChange={this.onSearchChange} searchSubmit={this.onVideoSearchClick}/>
          </div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div>
            <VideoPlayer video={this.state.video}/>
          </div>
        </div>
        <div className="col-md-5">
          <div>
            <VideoList videos={this.state.videos} handleClick={this.onListItemClick}/>
          </div>
        </div>
      </div>
    </div>);
  }
}
// ReactDOM.render(<App />, document.getElementById('app'));// TODO: Render the `App` component to the DOM

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// window.App = App;
