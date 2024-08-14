//@ts-nocheck
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
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
          //first start
          //authenticator identify
          ws.send(
            JSON.stringify({
              op: OPCODES.INIT,
              d: {
                subscribe_to_id: "539843855567028227",
              },
            })
          ); //send

          setInterval(function () {
            ws.send(
              JSON.stringify({
                op: OPCODES.HEARTBEAT,
              })
            );
          }, JSONdata.d.heartbeat_interval); //interval
        } else if (JSONdata.op == OPCODES.INFO) {
          const colors = {
            online: "emerald",
            idle: "yellow",
            dnd: "rose",
            offline: "gray",
          }; //for status

          const updateSpotifyUI = (u) => {
            if (u.listening_to_spotify) {
              document
                .getElementById("spotifycheck")
                .classList.replace("hidden", "visible");

              let spotifyElement = document.getElementById("spotify");
              if (!spotifyElement) {
                spotifyElement = document.createElement("span");
                spotifyElement.id = "spotify";
                spotifyElement.className =
                  "inline-flex items-center rounded-md bg-green-50 px-4 py-2 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20";
                document
                  .getElementById("spotifycheck")
                  .appendChild(spotifyElement);

                let albumArtElement = document.createElement("img");
                albumArtElement.id = "albumart";
                albumArtElement.className = "h-14 w-14 mr-2";
                spotifyElement.appendChild(albumArtElement);
              }

              document.getElementById("albumart").src = u.spotify.album_art_url;
              document.getElementById(
                "spotify"
              ).innerText = `Listening to ${u.spotify.song} from ${u.spotify.artist} in the ${u.spotify.album}`;
            }
          };

          if (JSONdata.t == "INIT_STATE") {
            //first
            const u = JSONdata.d; //userdata
            document.getElementById(
              "avatar"
            ).src = `https://cdn.discordapp.com/avatars/539843855567028227/${u.discord_user.avatar}.png?size=4096`;
            document.getElementById("status").innerText = u.discord_status;
            updateSpotifyUI(u);
          } else if (JSONdata.t == "PRESENCE_UPDATE") {
            //update
            const u = JSONdata.d;
            document.getElementById(
              "avatar"
            ).src = `https://cdn.discordapp.com/avatars/539843855567028227/${u.discord_user.avatar}.png?size=4096`;
            document.getElementById("status").innerText = u.discord_status;
            updateSpotifyUI(u);
          }
        }
      }; //onmessage
    }
  });
});
