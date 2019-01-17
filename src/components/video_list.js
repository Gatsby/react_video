
import React from 'react';
import VideoListItem from './video_list_item';

// Doesn't have any need for state, so it's a functional component

// Map is a built-in React helper, it is a property of an array. Maps are fantastic for building lists in React. 

// The key etag "key={video.etag}" is needed to prevent erroring in the console, since a unique key is needed for each child in an array.

// EHF: 2. Passing prop into VideoListItem
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
		return (
		<VideoListItem 
		  onVideoSelect={props.onVideoSelect}
		  key={video.etag} 
		  video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;