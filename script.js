

window.onload = function(e){ 

// Loading from DOM
const postsWrapper = document.querySelectorAll('#posts .insert')[0];
console.log(postsWrapper);
const codeSnippetsWrapper = document.querySelectorAll("#codeSnippets .insert")[0];
console.log(codeSnippetsWrapper);


// Writing up page content from data.js
function makeParagraphsFromArray(postContent){
    let p = "";
    for (let i = 0; i < postContent.length; i++) { 
        let arrayP = (`<p> ${postContent[i]} </p>`);
        p += arrayP;
    }
  return p
}

function postFormatHtml(post){
    let h2 = (`<h3> ${post.title} </h3>`)
    let h4 = (`<h4> ${post.category} | ${post.subCategory} </h4>`) 
    let p = "";
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
        div = `<div class="card"> ${postFormatHtml(post[i])} </div>`;
        place.innerHTML += div;
    }
}
    
addPostsToPage(codeSnippets, codeSnippetsWrapper);
addPostsToPage(posts, postsWrapper);
}

