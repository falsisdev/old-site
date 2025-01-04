//@ts-nocheck
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:loading:end", () => {
    var searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.toString()) {
      const OPCODES = {
        INFO: 0,
        HELLO: 1,
        INIT: 2,
        HEARTBEAT: 3,
      };
      const ws = new WebSocket("wss://api.lanyard.rest/socket"); //lanyard websocket

      /* EVENTS */
      ws.onmessage = ({ data }) => {
        const JSONdata = JSON.parse(data);

        if (JSONdata.op == OPCODES.HELLO) {
          ws.send(
            JSON.stringify({
              op: OPCODES.INIT,
              d: {
                subscribe_to_id: "539843855567028227",
              },
            })
          );

          setInterval(function () {
            ws.send(
              JSON.stringify({
                op: OPCODES.HEARTBEAT,
              })
            );
          }, JSONdata.d.heartbeat_interval);
        } else if (JSONdata.op == OPCODES.INFO) {
          const updateSpotifyUI = (u) => {
            if (u.listening_to_spotify) {
              document
                .getElementById("spotifycheck")
                .classList.replace("hidden", "visible");

              document.getElementById("albumart").src = u.spotify.album_art_url;
              document.getElementById("title").innerText = u.spotify.song;
              document.getElementById("artist").innerText = u.spotify.artist;
            }
          };

          if (JSONdata.t == "INIT_STATE") {
            //first
            const u = JSONdata.d; //userdata
            document.getElementById(
              "avatar"
            ).src = `https://cdn.discordapp.com/avatars/539843855567028227/${u.discord_user.avatar}.png?size=4096`;
            updateSpotifyUI(u);
          } else if (JSONdata.t == "PRESENCE_UPDATE") {
            //update
            const u = JSONdata.d;
            document.getElementById(
              "avatar"
            ).src = `https://cdn.discordapp.com/avatars/539843855567028227/${u.discord_user.avatar}.png?size=4096`;
            updateSpotifyUI(u);
          }
        }
      }; //onmessage
    }
  });
});
