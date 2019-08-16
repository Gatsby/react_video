// ReactDOM is used to interact with DOM, while React manages components
import _ from 'lodash'; // Lodash provides search throttling functionality 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = '';

// React "Downwards data-flow": only the most parent component should be responsible for fetching data (like YTSearch performs), so this class in returned in index.js.	

// APPLICATION STARTUP FLOW (ASF)...
// CLICK EVENT HANDLING FLOW (EHF)...
// SEARCH HANDLING FLOW (SHF)...
// SEARCH THOTTLING via Lodash (ST)...

// ASF 1. App boots up
class App extends Component {
  // Constructor function, always called with props and super
  constructor(props) {
  	super(props);
    
   // ASF 2. Videos is an empty array and selected video is null
    // Initialing state
  	this.state = { 
  		videos: [],
  		selectedVideo: null
  		};

  // ASF 5. As same time as step 4, we kick off a request to grab a list of default videos
    this.videoSearch('Chicago, Illinois');

  }

 // SHF: 1. Define callback by creating a new method with one argument and function to kick off search.

 videoSearch(term) {
  YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ 
        // When completed a list of videos is passed
        videos: videos,
        // First video on list will be set to selected video
        selectedVideo: videos[0]
       });
    });

 }


 // Wrapping multi-line JSX in parenthesis is conventional. If not written this way, the starting div must be on same line as "return" or errors.

 // Data must be passed from parent component (App) to child compoenent (VideoList). React has a straightforward way to do this by defining property on the JSX tag (videos) - passing data like this is referred to as "passing props" in React.

  // ASF 3. We go into video detail and video list (see video_detail.js and video_list.js files)
  render() { 
    // ST: 1. Constant with arugments for video search throttling on videoSearch. debounce fuction called once ever 300 ms.
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);


  	// ASF 6. Component re-renders and is set as first selected video!

  	// EHT 1. Create event handler function to pass as property to video_list.js (onVideoSelect) - just updates app state.

    // SHF: 2. Pass a function "onSearchTermChanage"

    // ST: 2. Searchbar calls calback to videoSearch with Lodash debounced method.
   return (
	  <div>
		<SearchBar onSearchTermChange={videoSearch} />
		<VideoDetail video={this.state.selectedVideo} />
		<VideoList 
		onVideoSelect={selectedVideo => this.setState({selectedVideo})}
		videos={this.state.videos} />
	  </div>
	);
  }
}

// Take this component, generated HTML, and put it on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'))