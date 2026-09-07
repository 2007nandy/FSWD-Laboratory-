function showSection(id){
let pages=document.querySelectorAll(".page");
pages.forEach(function(page){
page.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}
function postTweet(){
let input=document.getElementById("tweetInput");
let text=input.value.trim();
if(text===""){
alert("Please write something!");
return;
}
let tweet=document.createElement("div");
tweet.className="tweet";
tweet.innerHTML=`
<img src="C:\Users\IT DC LAB (22)\Desktop\images (1).jpg">
<div class="tweetContent">
<h3>Nanthitha S</h3>
<p>${text}</p>
<div class="actions">
<span onclick="like(this)">❤️ 0</span>
<span onclick="comment()">💬 Comment</span>
<span onclick="repost()">🔁 Repost</span>
<span onclick="bookmark()">🔖 Save</span>
</div>
</div>
`;
document
.getElementById("tweetContainer")
.prepend(tweet);
input.value="";
}
function like(btn){
let txt=btn.innerHTML;
let count=parseInt(txt.replace("❤️",""));
count++;
btn.innerHTML="❤️ "+count;
}
function comment(){
let c=prompt("Write your comment");
if(c!=null && c!=""){
alert("Comment Added:\n\n"+c);
}
}
function repost(){
alert("Tweet Reposted!");
}
function bookmark(){
alert("Tweet Saved!");
}
function sendMessage(){
let msg=document
.getElementById("message");
if(msg.value.trim()==""){
return;
}
let box=document
.querySelector(".chatBox");
let div=document
.createElement("div");
div.className="chat me";
div.innerHTML=`
<strong>You</strong>
<p>${msg.value}</p>
`;
box.appendChild(div);
box.scrollTop=box.scrollHeight;
msg.value="";
}
let followButtons=document.querySelectorAll(".follow button");
followButtons.forEach(function(btn){
btn.onclick=function(){
if(btn.innerHTML=="Follow"){
btn.innerHTML="Following";
btn.style.background="green";
}
else{
btn.innerHTML="Follow";
btn.style.background="black";
}
}
});
document.querySelector(".tweetBtn").onclick=function(){
showSection("home");
document
.getElementById("tweetInput")
.focus();
};
setInterval(function(){
let names=["Alex","Emma","John","David","Sophia"];
let actions=[
"liked your Tweet ❤️",
"started following you 👤",
"commented on your Tweet 💬",
"reposted your Tweet 🔁"
];
let name=names[Math.floor(Math.random()*names.length)];
let action=actions[Math.floor(Math.random()*actions.length)];
let notify=document.createElement("div");
notify.className="notify";
notify.innerHTML=name+" "+action;
let page=document.getElementById("notifications");
page.prepend(notify);
},15000);
function searchTweets(){
let input=document
.getElementById("search");
if(!input) return;
let filter=input.value.toLowerCase();
let tweets=document.querySelectorAll(".tweet");
tweets.forEach(function(tweet){
if(tweet.innerText
.toLowerCase()
.includes(filter)){
tweet.style.display="flex";
}
else{
tweet.style.display="none";
}
});
}
function darkMode(){
document.body.classList.toggle("dark");
}
console.log("Twitter Clone Loaded Successfully!!");


