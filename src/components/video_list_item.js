
import React from 'react';

// EHF: 3. Gave VideoListItem access to onVideoSelect callback

const VideoListItem = ({video, onVideoSelect}) => {
// ES6 method above does same as below:
//const VideoListItem = (props) => {
//	const video = props.video;

// one console log for each video item - useful for anylyzing API data
// console.log(video);

const imageUrl = video.snippet.thumbnails.default.url;

return (

// EHF: 4. onClick event to pass onVideoSelect function

	<li onClick={() => onVideoSelect(video)} className="list-group-item">
		<div className="video-list media">
			<div className="media-left">
				<img className="media-object" src={imageUrl} />
			</div>
		<div className="media-body">
			<div className="media-heading">{video.snippet.title}</div>
		</div>
		</div>
	</li>
	);
};


export default VideoListItem;