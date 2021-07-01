
const c = '<span class="code">';  
const cc = '</span>';
const h = '<span class="highlight">';  
const hh = '</span>';



const content = {
    
    codeSnippets : [
        html = {
            title: "Html things I didn't know",
            id:"html",
            category: "Frontend",
            subCategory: "HTML",
            content: [
            `Always put ${c} <!doctype html> ${cc} at the top of the html doc to avaoid quirks mode`,
            `${c} <meta charset="utf-8"> ${cc}`]
        },
        cssBoilerplate = {
            title: "Css Boilerplate",
            id:"cssBoilerplate",
            category: "Frontend",
            subCategory: "CSS",
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
            category: "Backend",
            subCategory: "Terminal",
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
            category: "Backend",
            subCategory: "Terminal",
            content: [
                `${h}TAB key${hh} - finishes off whatever you are typing, can work on multiple folders`,
                `${h}Option key${hh} - move insertion point with mouse`],
        },
        
        git = {
            title: "Git terminal",
            id:"gitTerminal",
            category: "Backend",
            subCategory: "Terminal",
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
            category: "Frontend",
            subCategory: "Javascript",
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
            category: "Frontend",
            subCategory: "HTML",
            content: [
            `Always put ${c} <!doctype html> ${cc} at the top of the html doc to avaoid quirks mode`,
            `${c} <meta charset="utf-8"> ${cc}`]
        },
        cssBoilerplate = {
            title: "Css Boilerplate",
            id:"cssBoilerplate",
            category: "Frontend",
            subCategory: "CSS",
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
            category: "Backend",
            subCategory: "Terminal",
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
            category: "Backend",
            subCategory: "Terminal",
            content: [
                `${h}TAB key${hh} - finishes off whatever you are typing, can work on multiple folders`,
                `${h}Option key${hh} - move insertion point with mouse`],
        },
        
        git = {
            title: "Git terminal",
            id:"gitTerminal",
            category: "Backend",
            subCategory: "Terminal",
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
            category: "Frontend",
            subCategory: "Javascript",
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
        }

    ]
}