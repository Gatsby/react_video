import React from 'react';

const VideoDetail = ({video}) => {
// below conditional handles erroring when parent object doesn't process fast enough to handle child object.

// ASF 4. Video detail isn't provided a video so loading run for milliseconds
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
//	cont above is ES6 synatax for the below (not the back-ticks, not quotes:
// const url = 'https://www.youtube.com/embed' + videoId;
	return (
		<div className="video-detail col-md-8">
		  <div className="embed-responsive embed-responsive-16by9">
		    <iframe className="embed-responsive-item" allowFullScreen="allowFullScreen" src={url}></iframe>
		  </div>
		  <div className="details">
		    <div className="title">{video.snippet.title}</div>
		    <div>{video.snippet.description}</div>
		  </div>
		</div>
		);
	
};

export default VideoDetail;