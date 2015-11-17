var disqus_identifier, disqus_title, disqus_url;
var initSystem = function(key, msg){
  disqus_identifier = key;
  disqus_title = msg;
  disqus_url = "http://x01x012013.github.io/z2p/ChatCore.html?page=" + key;
  $("#" + key).addClass("active");
  $("#msgH1").html(msg);
  document.title = msg + " - AoE: CS alliances ZeRo2PaNiC Chat Board";
}
switch(window.location.search){
  case "?page=chatting":
    initSystem("chatting", "General Chatting");
    break;
  case "?page=management":
    initSystem("management", "Alliance Management");
    break;
  case "?page=issue":
    initSystem("issue", "Report Issue");
    alert("This place is only for issues related to this website, game related issues should be posted to the official forum. ");
    prompt("Here is the official forum's address in case you need it: ", "http://forums.ageofempires.com/forum/53-age-of-empires-castle-siege/");
    break;
  case "?page=offtopic":
    initSystem("offtopic", "Off-Topic");
    break;
  case "?page=coc":
    initSystem("coc", "Clash of Clans");
    break;
  default: 
    alert("Page not found! Taking you back to the home page. ");
    window.location.href = "http://x01x012013.github.io/z2p/index.html";
    break;
}
var disqus_shortname = "z2pp2z";
var loadDiscus = function(){
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};
if(disqus_identifier !== undefined){loadDiscus();}
