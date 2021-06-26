

window.onload = function(e){ 

// ------------------------------------------------
// 🚚  LOADING FROM DOM

const postsWrapper = document.querySelectorAll('#posts .insert')[0];
const codeSnippetsWrapper = document.querySelectorAll("#codeSnippets .insert")[0];
const sections = document.querySelectorAll("section");

// ------------------------------------------------
// 🔨 PRINTING PAGE CONTENT

// function to create html tags
const mintHtml = function(tag, attr, content){
    const classOrId = function(){
        if(attr.charAt(0) === "#"){
            return `id='${attr.slice(1)}'` }
        else if(attr.charAt(0) === "."){
            return `class='${attr.slice(1)}'` } 
        return " ";
    };     
    return `<${tag} ${classOrId()}> ${content} </${tag}> `
 };


 // takes array, turns entries into string of p tags 
function makePsFromArray(postContent){
    let p = "";
    for (let i = 0; i < postContent.length; i++) { 
        p += mintHtml("p", "", postContent[i]);
    }
  return p
};

// takes object, maps properties into string of formatted html 
function postFormatHtml(post){
    let h2 = mintHtml("h2", "", post.title);
    let h4 = mintHtml("h4", "", `${post.category} | ${post.subCategory}`);
    let p = "";

    if (post.content instanceof Array){
        p = makePsFromArray(post.content);
    } else p = mintHtml("p", "", post.content);

    let formattedHtml = ( h2 + h4 + p )
    return formattedHtml;
};

// takes string of html, dom location. adds html into dom location 
function addPostsToPage(post, place){
    let div = "";
    for (let i = 0; i < post.length; i++) { 
        div = mintHtml("div", ".card", postFormatHtml(post[i]));
        place.innerHTML += div;
    }
};
    
addPostsToPage(codeSnippets, codeSnippetsWrapper);
addPostsToPage(posts, postsWrapper);



// 🔨
// INTERACTIONS
    
const openSection = function(){
    this.classList.toggle("open");
}


// temp adding open on click to the sections
for (var i = 0; i < sections.length; i++) {
    sections[i].onclick = openSection;
}


}


