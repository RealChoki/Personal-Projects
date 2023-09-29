// volumeControl.js
import getQS from "../helpers/getQS.js"; // Import any necessary utility functions

// Track sound state
let isVolumeOn = true;


export function toggleVolume() {
  const clickSound = getQS("#click-sound");
  const spanVolumeOn = getQS("#volume-on");
  const spanVolumeOff = getQS("#volume-off");

  clickSound.volume = isVolumeOn ? 0 : 1;
  isVolumeOn = !isVolumeOn;
  spanVolumeOn.hidden = !isVolumeOn;
  spanVolumeOff.hidden = isVolumeOn;
}
