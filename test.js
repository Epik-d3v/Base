(function(){
let d=document;
let style=d.createElement('style');
style.innerHTML=`
#homeUiOverlay {
  position:fixed;top:0;left:0;width:100vw;height:100vh;
  background:linear-gradient(135deg,#181a22 18%,#4457e7 64%,#ff88eb 97%);
  z-index:2147483647;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;
  animation:fadeIn 1s;
}
@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
#homeUiHeader {
  width:100vw;
  padding:28px 0 12px 0;
  font-size:2.5em;
  font-family:sans-serif;
  color:#fff;
  text-align:center;
  font-weight:700;
  letter-spacing:0.04em;
  margin-bottom:24px;
  background:rgba(26,26,56,.26);
  box-shadow:0 3px 12px #0002;
}
#homeUiMenu {
  display:flex;
  gap:26px;
  justify-content:center;
  margin-top:18px;
  margin-bottom:42px;
}
.homeUiBtn {
  padding:18px 34px;
  font-size:1.15em;
  border-radius:15px;
  background:#fff5;
  color:#232946;
  border:none;
  cursor:pointer;
  font-family:sans-serif;
  box-shadow:0 2px 14px #23294648;
  transition:.18s;
  outline:none;
}
.homeUiBtn:hover {
  background:#3e92fc;
  color:#fff;
}
#homeUiContent {
  width:clamp(220px,44vw,400px);
  background:#fff8;
  color:#232946;
  border-radius:18px;
  box-shadow:0 3px 20px #23294655;
  font-size:1.1em;
  font-family:system-ui,sans-serif;
  text-align:left;
  padding:26px 32px;
  min-height:160px;
  margin-bottom:22px;
}
#homeUiClose {
  position:fixed;top:14px;right:14px;width:38px;height:38px;
  background:#232946;color:#fff;border-radius:24px;border:none;cursor:pointer;
  font-size:1.245em;box-shadow:0 2px 7px #0005;transition:.18s;z-index:2147483648;
}
#homeUiClose:hover {background:#ff88eb;color:#232946;}
`;
d.head.appendChild(style);

let mainDiv = d.createElement('div'); mainDiv.id = 'homeUiOverlay';
mainDiv.innerHTML = `
  <button id="homeUiClose" title="Close Home UI">✖</button>
  <div id="homeUiHeader">🏠 Home Portal</div>
  <div id="homeUiMenu">
    <button class="homeUiBtn" onclick="document.getElementById('homeUiContent').textContent='Welcome to your Home UI! Add app shortcuts and customize this screen for your needs.'">Home</button>
    <button class="homeUiBtn" onclick="document.getElementById('homeUiContent').textContent='Settings: Update your profile, preferences, and app integrations here.'">Settings</button>
    <button class="homeUiBtn" onclick="document.getElementById('homeUiContent').textContent='Info: This demo UI shows how you can create app-like overlays with pure JS and CSS.'">Info</button>
    <button class="homeUiBtn" onclick="document.getElementById('homeUiContent').textContent='Contact: Connect your email, Discord, or other channels for support.'">Contact</button>
  </div>
  <div id="homeUiContent">Welcome to your Home UI! Add app shortcuts and customize this screen for your needs.</div>
`;

mainDiv.querySelector('#homeUiClose').onclick = function() {
  mainDiv.remove();
  style.remove();
};

d.body.appendChild(mainDiv);
})();
