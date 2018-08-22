const config = {
  token:
    "BQCd3yB54E5EeKYWfXMfZ73isQpjvdMan5-g9cYoryTVAN88mDy1iQCMYz_CYiw5U_UK3j4ZN7VWh2MaASykzAdqKC5Eg36XmBxb0mCLNTNBUM03Tudv8-E6l6evZXX1w3TsNpCRUrhJnJi0Tw9C3BRVx0cXlSrVXGSW",
  url: "https://api.spotify.com"
};

let myStateChanged;
export default function(stateChanged) {
  myStateChanged = stateChanged;
}

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = config.token;
  const player = new Spotify.Player({
    name: "Spotify Dashboard",
    getOAuthToken: cb => {
      cb(token);
    }
  });

  // Error handling
  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("playback_error", ({ message }) => {
    console.error(message);
  });

  // Playback status updates
  player.addListener("player_state_changed", state => {
    myStateChanged(state);
  });

  player.getCurrentState().then(state => {
    if (!state) {
      console.log("User is not connected");
      return;
    }
  });

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  // Connect to the player!
  player.connect();
};
