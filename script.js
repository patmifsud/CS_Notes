
// Code
window.onload = function(e){ 

const postsDiv = document.getElementById("posts");
const codeSnippetsDiv = document.getElementById("codeSnippets");

function makeParagraphsFromArray(postContent){
    let p   
    for (let i = 0; i < postContent.length; i++) { 
        let arrayP = (`<p> ${postContent[i]} </p>`);
        p += arrayP;
    }
  return p
}

function postFormatHtml(post){
    let h2 = (`<h2> ${post.title} </h2>`)
    let h4 = (`<h4> ${post.category} | ${post.subCategory} </h4>`) 
    let p
    if (post.content instanceof Array){
        p = makeParagraphsFromArray(post.content);
    } else { 
        p = (`<p> ${post.content} </p>`);
    }
    let formattedHtml = ( h2 + h4 + p )
    return formattedHtml;
}

function addPostsToPage(post, place){
    let div
    for (let i = 0; i < post.length; i++) { 
        div = `<div> ${postFormatHtml(post[i])} </div>`;
        place.innerHTML += div;
    }
}
    
addPostsToPage(codeSnippets, codeSnippetsDiv);
addPostsToPage(posts, postsDiv);

}