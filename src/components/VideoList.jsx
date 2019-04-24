import VideoListEntry from "./VideoListEntry.js";

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => <VideoListEntry video={video} handleClick={props.handleClick}/>)}
  </div>
);



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


//[{
//   etag: 'L332gQTY',
//   id: {
//     videoId: '0'
//   },
//   snippet: {
//     title: 'Cute cat video',
//     description: 'The best cat video on the internet!',
//     thumbnails: {
//       default: {
//         url: 'http://www.fndvisions.org/img/cutecat.jpg',
//       }
//     }
//   }
// },