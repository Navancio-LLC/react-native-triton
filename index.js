import { DeviceEventEmitter, NativeEventEmitter, NativeModules, Platform } from "react-native";

const NativeRNTritonPlayer = NativeModules.RNTritonPlayer;

class RNTritonPlayer {
  static configure({brand}) {
    NativeRNTritonPlayer.configure(brand);
  }

  static play(tritonName, tritonMount, countryCode, csegid) {
    NativeRNTritonPlayer.play(tritonName, tritonMount, countryCode, csegid);
  }

  /** Get current index [in seconds] of how far into a track we currently are - value is returned via the successCallback callback method */
  static getCurrentPlaybackTime(successCallback, errorCallback) {
    if (Platform.OS === 'ios' || Platform.OS == 'android') {
      NativeRNTritonPlayer.getCurrentPlaybackTime(
        successValue => {
          //ios returns this value in seconds - Android value comes back in milliseconds - do the conversion here so we get a consistent output
          successCallback(
            Platform.OS == 'android'
              ? Math.floor(successValue / 1000)
              : successValue,
          );
        },
        errorValue => {
          errorCallback(errorValue);
        },
      );
    } else {
      console.log(
        `getCurrentPlaybackTime is not currently supported on your platform '${Platform.OS}'`,
      );
    }
  }

  /** Seek by `offset` milliseconds [negative to seek back] */
  static seek(offset) {
    if (Platform.OS === 'ios') {
      NativeRNTritonPlayer.getCurrentPlaybackTime(
        successValue => {
          const currentOffsetMS = successValue * 1000;
          let newOffset = offset + currentOffsetMS;
          if (newOffset < 0) {
            newOffset = 0;
          }

          NativeRNTritonPlayer.seekTo(newOffset);
        },
        errorValue => {
          console.log('error', errorValue);
        },
      );
    } else if (Platform.OS === 'android') {
      NativeRNTritonPlayer.getCurrentPlaybackTime(
        successValue => {
          const currentOffsetMS = successValue;
          const offsetMS = offset;
          let newOffset = offsetMS + currentOffsetMS;
          if (newOffset < 0) {
            newOffset = 0;
          }

          //console.log('test', {currentOffsetMS, offsetMS, newOffset});

          NativeRNTritonPlayer.seekTo(newOffset);
        },
        errorValue => {
          console.log('error', errorValue);
        },
      );
    } else {
      console.log(
        `seek is not currently supported on your platform '${Platform.OS}'`,
      );
    }
  }

  static seekTo(offset) {
    if (Platform.OS === 'ios') {
      NativeRNTritonPlayer.seekTo(offset);
    } else if (Platform.OS === 'android') {
      NativeRNTritonPlayer.seekTo(offset);
    } else {
      console.log(
        `seekTo is not currently supported on your platform '${Platform.OS}'`,
      );
    }
  }

  static pause() {
    NativeRNTritonPlayer.pause();
  }

  static unPause() {
    NativeRNTritonPlayer.unPause();
  }

  static setNotificationStatus(status) {
		NativeRNTritonPlayer.setNotificationStatus(status);
	}

  static updateNotificationData(albumArtUrl, title, subTitle) {
		NativeRNTritonPlayer.updateNotificationData(albumArtUrl, title, subTitle);
	}

  ///IOS specific 
  static updateNotificationDataWithLocalImage(imageObject, title, subTitle) {
    if (Platform.OS === 'ios') {
		  NativeRNTritonPlayer.updateNotificationDataWithLocalImage(imageObject, title, subTitle);
    }else{
      return;
    }
	}
  
  static playOnDemandStream(trackURL, title, subTitle, csegid) {
    NativeRNTritonPlayer.playOnDemandStream(trackURL, title, subTitle, csegid);
  }

  static stop() {
    NativeRNTritonPlayer.stop();
  }

  static quit() {
    NativeRNTritonPlayer.quit();
  }

  static addStreamChangeListener(callback) {
    if (Platform.OS === 'ios') {
      const tritonEmitter = new NativeEventEmitter(NativeRNTritonPlayer);
      tritonEmitter.addListener('streamChanged', callback);
    } else {
      DeviceEventEmitter.addListener('streamChanged', callback);
    }
  }

  static addTrackChangeListener(callback) {
    if (Platform.OS === 'ios') {
      const tritonEmitter = new NativeEventEmitter(NativeRNTritonPlayer);
      tritonEmitter.addListener('trackChanged', callback);
    } else {
      DeviceEventEmitter.addListener('trackChanged', callback);
    }
  }

  static addStateChangeListener(callback) {
    if (Platform.OS === 'ios') {
      const tritonEmitter = new NativeEventEmitter(NativeRNTritonPlayer);
      tritonEmitter.addListener('stateChanged', callback);
    } else {
      DeviceEventEmitter.addListener('stateChanged', callback);
    }
  }

  static addActionPerformedListener(callback) {
    if (Platform.OS === 'android') {
      const tritonEmitter = new NativeEventEmitter(NativeRNTritonPlayer);
      tritonEmitter.addListener('actionPerformed', callback);
    }
  }

  static addCurrentPlaybackTimeChangeListener(callback) {
    if (Platform.OS === 'ios') {
      const tritonEmitter = new NativeEventEmitter(NativeRNTritonPlayer);
      tritonEmitter.addListener('currentPlaybackTimeChanged', callback);
    } else {
      DeviceEventEmitter.addListener('currentPlaybackTimeChanged', e => {
        console.log('e', e);
        callback(e);
      });
    }
  }
  //
}

export default RNTritonPlayer;
