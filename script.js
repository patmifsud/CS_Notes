

window.onload = function(e){ 


// ------------------------------------------------
// 🔨 PRINTING PAGE CONTENT

const mintAttr = function(attr){
    let classStr = " ";
    let idStr = " ";


    for (var i = 0; i < attr.length; i++) {
        if(attr[i].charAt(0) === "#"){
            idStr = `id='${attr[i].slice(1)}' ` 
        } else if(attr[i].charAt(0) === "."){
            classStr += `${attr[i].slice(1)} ` 
        }; 
    }

    const classFormatted = (classStr == " " ? ` ` : `class='${classStr}'`);
    return idStr + classFormatted;
    
}


// Makes html tags
const mintHtml = function(tag, attr, content){

    let attrTags;
    if (attr) {
        attrTags = mintAttr(attr.split(" "))
    }

    const result = `<${tag} ${attrTags}> ${content} </${tag}> `
    return result

 };


 // Makes p tags from an array 
function makePsFromArray(postContent){

    let p = "";
    for (let i = 0; i < postContent.length; i++) { 
        p += mintHtml("p", "", postContent[i]);
    }
  return p

};


// Makes a post/card 
function postFormatHtml(post){

    let h3 = mintHtml("h3", "", post.title);
    let h4 = mintHtml("h4", "", `${post.category} | ${post.subCategory}`);
    let p = "";

    if (post.content instanceof Array){
        p = makePsFromArray(post.content);
    } else p = mintHtml("p", "", post.content);

    let formattedHtml = ( h3 + h4 + p )
    return formattedHtml;

};


// Makes the inside of a section
function mintPost(post){

    let html = "";

    for (let i = 0; i < post.length; i++) { 
        let div = "";

        div = mintHtml("div", ".card", postFormatHtml(post[i]));
        html += div;
    }

    return html
};

// makes footer

const footer = mintHtml("footer", ``, ' ');


// makes array of tags for section

const mintFilterTags = function(objName){
    const obj = content[Object];
    let filterArr = new Set();
    let html = "";

    for (Object in obj){
        filterArr.add(obj[Object].category);
        console.log(filterArr);
    }

    html += mintHtml("a", `.filter .active`, "All");
    filterArr.forEach ( String => {
        html += mintHtml("a", `.filter`, String);
        // add logic here returning obj[Object].category; or something
    })
    return html;
}


// makes section header

const mintSectionHeading = function(objName){
    const chevron = mintHtml("div", `.chevron #c${Object}`, chev);
    const heading = mintHtml("h2", ``, Object);
    const filters = mintHtml("div", `.filters`, mintFilterTags(objName)); 
    return chevron + heading + filters;
}


// Makes the page content
const mintPageContent = function(){

    // remove preloader

    for (Object in content){
        const obj = content[Object];

        const posts = mintPost(obj);
        const wrapper = mintHtml("div", `.wrapper`, posts);
        const scrollContainer = mintHtml("div", `.scrollContainer`, wrapper); 
        const headingWrapper = mintHtml("div", `.wrapper .heading`, mintSectionHeading(Object));
        const sectionInner = headingWrapper + "\n" + scrollContainer;
        const section = mintHtml("section", `#${Object}`, sectionInner);

        document.body.innerHTML += section;
    }

    document.body.innerHTML += footer
}




// write page
// mintPost(content.codeSnippets, codeSnippetsWrapper);
// mintPost(content.posts, postsWrapper);
mintPageContent();









// 🔨
// INTERACTIONS
    
const openSection = function(){
    this.classList.toggle("open");
}


const sections = document.querySelectorAll("section");


// temp adding open on click to the sections
for (var i = 0; i < sections.length; i++) {
    sections[i].onclick = openSection;
}


}




// misc
const chev = `<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25781 6.51562C1.08594 6.67969 0.992188 6.89844 0.992188 7.14844C0.992188 7.65625 1.39062 8.05469 1.89844 8.05469C2.14844 8.05469 2.38281 7.96094 2.55469 7.78125L7.91406 2.28906L13.2734 7.78125C13.4453 7.96094 13.6797 8.05469 13.9297 8.05469C14.4297 8.05469 14.8281 7.65625 14.8281 7.14844C14.8281 6.89844 14.7422 6.67969 14.5703 6.51562L8.61719 0.421875C8.42188 0.21875 8.17969 0.109375 7.91406 0.109375C7.64844 0.109375 7.41406 0.210938 7.21094 0.421875L1.25781 6.51562Z" fill="black"/>
</svg>`;
