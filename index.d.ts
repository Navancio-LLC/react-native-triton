declare module 'react-native-triton-player' {
  //export function configure({brand});

  export function play(tritonName, tritonMount, countryCode);

  export function setNotificationStatus(status);

  export function updateNotificationData(albumArtUrl, title, subTitle);
    
  ///IOS specific 
  export function updateNotificationDataWithLocalImage(imageObject, title, subTitle);

  export function playOnDemandStream(trackURL);

  export function pause();

  export function unPause();

  export function stop();

  export function quit();

  /** Get current index [in seconds] of how far into a track we currently are - value is returned via the successCallback callback method */
  export function getCurrentPlaybackTime(successCallback, errorCallback);

  /** Seek by `offset` milliseconds [negative to seek back] */
  export function seek(offset);

  export function seekTo(offset);

  export function addStreamChangeListener(callback);

  export function addTrackChangeListener(callback);

  export function addStateChangeListener(callback);

  export function addCurrentPlaybackTimeChangeListener(callback);
}
