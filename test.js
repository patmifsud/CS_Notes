
  
  
const c = '<span class="code">';  
const cc = '</span>';
const h = '<span class="highlight">';  
const hh = '</span>';



const content = {
    
    codeSnippets : [
        html = {
            title: "Html things I didn't know",
            id:"html",
            categories: ["Frontend"],
            subcategories: "HTML",
            content: [
            `Always put ${c} <!doctype html> ${cc} at the top of the html doc to avaoid quirks mode`,
            `${c} <meta charset="utf-8"> ${cc}`]
        },
        cssBoilerplate = {
            title: "Css Boilerplate",
            id:"cssBoilerplate",
            categories: ["Frontend"],
            subcategories: "CSS",
            content: [`${c}margin: 0;${cc}`,
                `${c}outline: none;${cc}`,  
                `${c}padding: 0;${cc}`,  
                `${c}box-sizing: border-box;${cc}`,  
                `${c}font-family: -apple-system, helvetica, arial, sans-serif;${cc}`, 
                `${c}-webkit-tap-highlight-color: transparent;${cc}`,  
                `${c}-webkit-font-smoothing: antialiased;${cc}`, 
                `${c}-moz-osx-font-smoothing: grayscale;${cc}`],
        },
        
        terminalBasicNav = {
            title: "Terminal - Basic Navigation",
            id:"terminalBasicNav",
            categories: ["Backend", "Frontend"],
            subcategories: "Terminal",
            content: [
            `${c}PWD${cc} - Where am I?`,
            `${c}CD${cc} - change directory`,
            `${c}CD-${cc} - go back`,
            `${c}LS${cc} - list all files`,
            `${c}LS -LA${cc} - list ${h}ALL${hh} files, including hidden ones`,
            `${c}mkdir${cc} - make directory`,
            `${c}touch${cc} (name), (name) - make a file or two`,
            `${c}rm -r dreamhouse${cc} - remove something`,
            `${c}man${cc} - manual, how to do something`,
            `${c}wc${cc} - counts things`,
            `${c}grep${cc} - find me something`,
            `${c}sort${cc} - alphabetical order`,
            `${c}curl${cc} - show me something`,
            `${c}open${cc} - opens the thing in finder/mac os`,
            `${c}open .${cc} - opens the current directory`,
            `${c}|${cc} - pipe`,
            `${c}find${cc} - shows everything in a directory and sub dirs`,
            `${c}rm -r${cc} - remove directory`,
            `${c}piping${cc} - send things to another program`,
            `${c}cat${cc} - short for concatonate, opens something`,
            `${c}atom .${cc} - open the entire directory in atom`,
            `${c}/${cc} - jump to the top of the directory and go to a folder in there`,
            `${c}>>${cc} - takes somethiing you entered and sends it to a file. Eg. ${c}ls >> hello.txt${cc}`,
            `${c}curl${cc} Download a url`  ],
        },
        
        terminalKeyboardShortcuts = {
            title: "Terminal - Basic Navigation",
            id:"terminalKeyboardShortcuts",
            categories: ["Backend"],
            subcategories: "Terminal",
            content: [
                `${h}TAB key${hh} - finishes off whatever you are typing, can work on multiple folders`,
                `${h}Option key${hh} - move insertion point with mouse`],
        },
        
        git = {
            title: "Git terminal",
            id:"gitTerminal",
            categories: ["Backend"],
            subcategories: "Terminal",
            content: [
                `${c} git add${cc} - add docs to the git`,
                `${c} git commit${cc} - create a version of your work`,
                `${c} git remote -v${cc} - get the gihub url`,
                `${c} git pull upstream main ${cc} - pull changes from the main section to your local. When you push it will arrive in your fork.`,
                `${c} git push origin main ${cc} - push your changes to your fork`,
                `${c} git push origin main ${cc} - push your changes to your fork`,],
        },
        
        jsBasic = {
            title: "Javascript- Things I didn't know ",
            id:"jsBestPractice",
            categories: ["Frontend"],
            subcategories: "Javascript",
            content: [
            c + "`The result is ${variable + 10} `" + cc + "- Backticks are better concatonation",
            `${c}function(age=23, date = 'november', height)${cc} - default params. can also accept funcitons`,
            `${c}&&${cc} 'and' logical operator 1> 0 && -1 > 0 = true`,
            `${c}||${cc} 'or' logical operator 1> 0 || 0 > 0 = true`,
            `${c}|${cc} 'not' logical operator 1 + 1 | 1 + 0 = true`,
            `${c}(backslash)n ${cc} new line character`,
            `${c}console.table()${cc} create a cool looking table to display an object etc`,
            `${c}for (let key in objectName) return objectName[key];${cc} - this will return every value in an obj with key/value setup. 'in' means 'for every occurence of 'key' in 'object'`,
            `${c}object.varWithKey${cc} doesn't work, it only works with strings. Use ${c}object[varWithKey]${cc} instead.`,
            `${c}arguments${cc} lets you create a function with (), but take in any # or type of argument/ parametter.`,
            `${c}console.warn${cc} like console log, but with a cool yellow color.`,
            ]
        },
    ],
    
    codeSnippets2 : [
        html = {
            title: "Html things I didn't know",
            id:"html",
            categories: ["Tag a"],
            subcategories: "HTML",
            content: [
            `Always put ${c} <!doctype html> ${cc} at the top of the html doc to avaoid quirks mode`,
            `${c} <meta charset="utf-8"> ${cc}`]
        },
        cssBoilerplate = {
            title: "Css Boilerplate",
            id:"cssBoilerplate",
            categories: ["Tag a"],
            subcategories: "CSS",
            content: [`${c}margin: 0;${cc}`,
                `${c}outline: none;${cc}`,  
                `${c}padding: 0;${cc}`,  
                `${c}box-sizing: border-box;${cc}`,  
                `${c}font-family: -apple-system, helvetica, arial, sans-serif;${cc}`, 
                `${c}-webkit-tap-highlight-color: transparent;${cc}`,  
                `${c}-webkit-font-smoothing: antialiased;${cc}`, 
                `${c}-moz-osx-font-smoothing: grayscale;${cc}`],
        },
        
        terminalBasicNav = {
            title: "Terminal - Basic Navigation",
            id:"terminalBasicNav",
            categories: ["Tag b"],
            subcategories: "Terminal",
            content: [
            `${c}PWD${cc} - Where am I?`,
            `${c}CD${cc} - change directory`,
            `${c}CD-${cc} - go back`,
            `${c}LS${cc} - list all files`,
            `${c}LS -LA${cc} - list ${h}ALL${hh} files, including hidden ones`,
            `${c}mkdir${cc} - make directory`,
            `${c}touch${cc} (name), (name) - make a file or two`,
            `${c}rm -r dreamhouse${cc} - remove something`,
            `${c}man${cc} - manual, how to do something`,
            `${c}wc${cc} - counts things`,
            `${c}grep${cc} - find me something`,
            `${c}sort${cc} - alphabetical order`,
            `${c}curl${cc} - show me something`,
            `${c}open${cc} - opens the thing in finder/mac os`,
            `${c}open .${cc} - opens the current directory`,
            `${c}|${cc} - pipe`,
            `${c}find${cc} - shows everything in a directory and sub dirs`,
            `${c}rm -r${cc} - remove directory`,
            `${c}piping${cc} - send things to another program`,
            `${c}cat${cc} - short for concatonate, opens something`,
            `${c}atom .${cc} - open the entire directory in atom`,
            `${c}/${cc} - jump to the top of the directory and go to a folder in there`,
            `${c}>>${cc} - takes somethiing you entered and sends it to a file. Eg. ${c}ls >> hello.txt${cc}`,
            `${c}curl${cc} Download a url`  ],
        },
        
        terminalKeyboardShortcuts = {
            title: "Terminal - Basic Navigation",
            id:"terminalKeyboardShortcuts",
            categories: ["Tag c"],
            subcategories: "Terminal",
            content: [
                `${h}TAB key${hh} - finishes off whatever you are typing, can work on multiple folders`,
                `${h}Option key${hh} - move insertion point with mouse`],
        },
        
        git = {
            title: "Git terminal",
            id:"gitTerminal",
            categories: ["Tag a"],
            subcategories: "Terminal",
            content: [
                `${c} git add${cc} - add docs to the git`,
                `${c} git commit${cc} - create a version of your work`,
                `${c} git remote -v${cc} - get the gihub url`,
                `${c} git pull upstream main ${cc} - pull changes from the main section to your local. When you push it will arrive in your fork.`,
                `${c} git push origin main ${cc} - push your changes to your fork`,
                `${c} git push origin main ${cc} - push your changes to your fork`,],
        },
        
        jsBasic = {
            title: "Javascript- Things I didn't know ",
            id:"jsBestPractice",
            categories: ["Frontend"],
            subcategories: "Javascript",
            content: [
            c + "`The result is ${variable + 10} `" + cc + "- Backticks are better concatonation",
            `${c}function(age=23, date = 'november', height)${cc} - default params. can also accept funcitons`,
            `${c}&&${cc} 'and' logical operator 1> 0 && -1 > 0 = true`,
            `${c}||${cc} 'or' logical operator 1> 0 || 0 > 0 = true`,
            `${c}|${cc} 'not' logical operator 1 + 1 | 1 + 0 = true`,
            `${c}(backslash)n ${cc} new line character`,
            `${c}console.table()${cc} create a cool looking table to display an object etc`,
            `${c}for (let key in objectName) return objectName[key];${cc} - this will return every value in an obj with key/value setup. 'in' means 'for every occurence of 'key' in 'object'`,
            `${c}object.varWithKey${cc} doesn't work, it only works with strings. Use ${c}object[varWithKey]${cc} instead.`,
            `${c}arguments${cc} lets you create a function with (), but take in any # or type of argument/ parametter.`,
            `${c}console.warn${cc} like console log, but with a cool yellow color.`,
            ]
        },
    ],
    
    usefulLinks : [
        airBnbJs = {
            title: "Airbnb Guide to JS",
            link: "https://github.com/airbnb/javascript",
            content: [
            `${h}Lorem Ipsum is simply dummy text of the printing and typesetting industry.${hh} Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
            `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
            ]
        }

    ]
}
  
  
  
  // factory for making html elements, based on https://bit.ly/3qE9WB8
 



  // // Makes html tags
  // const mintHtmlOld = function(tag, attr, content){

  //     let attrTags;
  //     if (attr) {
  //         attrTags = mintAttrOld(attr.split(" "))
  //     }

  //     const result = `<${tag} ${attrTags}> ${content} </${tag}> `
  //     return result

  //  };



  // Makes p tags from an array
  function makePsFromArray(postContent) {
    let p = "";
    console.log("postContent" )
    console.log(postContent);
    for (let i = 0; i < postContent.length; i++) {
      p += mintHtmlOld("p", "", postContent[i]);
    }
    return p;
  }

  // Makes a post/card
  function postFormatHtml(post) {
    if (post.content instanceof Array) {
      p = makePsFromArray(post.content);
    } else p = mintHtmlOld("p", "", post.content);

    let formattedHtml = h3 + h4 + p;
    return formattedHtml;
  }

  // I need a function that will mint a given post, especially later with filters, and retruna a card html element

  // Makes the inside of a section
  const mintCard = function (post) {
    let card = makeHtml("div", ".card", " ");
    console.log(card);
    card.appendChild(makeHtml("h3", " ", `${post.title}`));
    card.appendChild(
      makeHtml("h4", " ", `${post.category} | ${post.subCategory}`)
    );
    // for (paragraph in post.content) {
    // }

    // for (let i = 0; i < post.length; i++) {
    //   div = mintHtmlOld("div", ".card", postFormatHtml(post[i]));
    //   wrapper.appendChild(div);
    // }
    return card;
  };

  const mintCardsInSection = function (section) {
    let wrapper = makeHtml("div", ".wrapper", " ");
    // console.log(section);
    for (var i = 0; i < section.length; i++) {
        wrapper.appendChild(mintCard(section[i].content));
    }
  }


    // makes footer

    const footer = makeHtml("footer", ``, " ");

    // makes array of tags for section

    

    // makes section header

    const mintSectionHeading = function (objName) {
      const chevron = makeHtml("div", `.chevron #c${Object}`, chev);
      const heading = makeHtml("h2", ``, Object);
      const filters = makeHtml("div", `.filters`, mintFilterTags(objName));
      return [chevron, heading, filters];
    };

    // OLD
    // Makes the page content
    mintPageContent = function () {
      // for each section
      for (Object in content) {
        const cardsWrapper = mintCardsInSection(content[Object]);
        // console.log(posts);
        const scrollContainer = makeHtml("div", ".scrollContainer", cardsWrapper}`);
        // console.log(scrollContainer);
        const headingWrapper = makeHtml(
          "div",
          ".wrapper .heading",
          mintSectionHeading(Object)
        );
        // console.log(headingWrapper);
        const sectionInner = [headingWrapper, scrollContainer];
        // console.log(sectionInner);
        const fades =
          makeHtml("div", `.fadeHoriz`, " ") +
          makeHtml("div", ".fadeVert", " ");
        const section = makeHtml("section", `#${Object}`, [
          fades,
          sectionInner,
        ]);
        // console.log(section);
        document.body.appendChild(section);
        // document.body.innerHTML += section
      }

      document.body.appendChild(footer);
    };

    markup = makeHtml("div", ".hi #yo", "hello");
