var disqus_identifier, disqus_title, disqus_url;
var initSystem = function(key, msg, delAnno){
  disqus_identifier = key;
  disqus_title = msg;
  disqus_url = "http://x01x012013.github.io/z2p/ChatCore.html?page=" + key;
  $("#" + key).addClass("active");
  $("#msgH1").html(msg);
  document.title = msg + " - AoE: CS alliances ZeRo2PaNiC Chat Board";
  if(delAnno){
    $("#announcementContainer").remove();
  }
}
switch(window.location.search){
  case "?page=chatting":
    initSystem("chatting", "General Chatting", true);
    break;
  case "?page=management":
    initSystem("management", "Alliance Management", true);
    break;
  case "?page=issue":
    initSystem("issue", "Report Issue", false);
    $("#announcement").html(
      "<h1 style='color: #FF0000;'>Warnings</h1>" + 
      "<p>This place is only for issues related to this website, game related issues should be posted to the official forum. </p>" + 
      "<p>Here is the official forum's address in case you need it: </p>" + 
      "<a style='font-size: 21px;' href='http://forums.ageofempires.com/forum/53-age-of-empires-castle-siege/' target='_blank'>http://forums.ageofempires.com/forum/53-age-of-empires-castle-siege/</a>" + 
      "<br><br>"
    );
    break;
  case "?page=offtopic":
    initSystem("offtopic", "Off-Topic", true);
    break;
  case "?page=coc":
    initSystem("coc", "Clash of Clans", true);
    break;
  default: 
    document.title = "Error! - AoE: CS alliances ZeRo2PaNiC Chat Board";
    $("#disqusContainer").remove();
    $("#announcement").html(
      "<h1 style='color: #FF0000;'>Error! </h1>" + 
      "<p>Please send the following message to me (do not worry if you cannot understand): </p>" + 
      "<div id='debugBox'></div>"
    );
    var searchVar = window.location.search;
    if(searchVar === undefined){
      searchVar = "undefined";
    }
    if(searchVar === null){
      searchVar = "null";
    }
    if(searchVar === ""){
      searchVar = "Empty String";
    }
    $("#debugBox").html(searchVar);
    break;
}
var disqus_shortname = "z2pp2z";
var loadDiscus = function(){
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};
if(disqus_identifier !== undefined){loadDiscus();}
