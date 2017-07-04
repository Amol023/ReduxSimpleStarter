import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD3T31JTNfwgtfuHmL0S2Mua5EPIGImUXE';

//create an HTML producting component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('Kapil');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  };

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <Searchbar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onSelectVideo={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    )
  }
}

//put this component in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));2