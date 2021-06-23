
const s = '<span class="code">';  
const ss = '</span>';
const h = '<span class="highlight">';  
const hh = '</span>';


const posts = [
    day1 = {
        title: "JS Terminology",
        category: "Frontend",
        subCategory: "Blog",
        content: [`${h}A statement${hh} is any line that ends (or could end) in a semi colon. A funciton can also be a statement. It's kind of like sentences.`,
            `${h}An expression${hh} is any number, string, var, equasion etc `,
            `${h}An argument${hh} is this guy function(${h}argument${hh}); although it's technically a parameter before getting something sent through to it. `,],
    }
]

const codeSnippets = [
    cssBoilerplate = {
        title: "Css Boilerplate",
        id:"cssBoilerplate",
        category: "Frontend",
        subCategory: "CSS",
        content: [`${s}margin: 0;${ss}`,
            `${s}outline: none;${ss}`,  
            `${s}padding: 0;${ss}`,  
            `${s}box-sizing: border-box;${ss}`,  
            `${s}font-family: -apple-system, helvetica, arial, sans-serif;${ss}`, 
            `${s}-webkit-tap-highlight-color: transparent;${ss}`,  
            `${s}-webkit-font-smoothing: antialiased;${ss}`, 
            `${s}-moz-osx-font-smoothing: grayscale;${ss}`],
    },
    terminalBasicNav = {
        title: "Terminal - Basic Navigation",
        id:"terminalBasicNav",
        category: "Backend",
        subCategory: "Terminal",
        content: [
         `${s}PWD${ss} - Where am I?`,
         `${s}CD${ss} - change directory`,
         `${s}CD-${ss} - go back`,
         `${s}LS${ss} - list all files`,
         `${s}LS -LA${ss} - list ${h}ALL${hh} files, including hidden ones`,
         `${s}mkdir${ss} - make directory`,
         `${s}touch${ss} (name), (name) - make a file or two`,
         `${s}rm -r dreamhouse${ss} - remove something`,
         `${s}man${ss} - manual, how to do something`,
         `${s}wc${ss} - counts things`,
         `${s}grep${ss} - find me something`,
         `${s}sort${ss} - alphabetical order`,
         `${s}curl${ss} - show me something`,
         `${s}open${ss} - opens the thing in finder/mac os`,
         `${s}open .${ss} - opens the current directory`,
         `${s}|${ss} - pipe`,
         `${s}find${ss} - shows everything in a directory and sub dirs`,
         `${s}rm -r${ss} - remove directory`,
         `${s}piping${ss} - send things to another program`,
         `${s}cat${ss} - short for concatonate, opens something`,
         `${s}atom .${ss} - open the entire directory in atom`,
         `${s}/${ss} - jump to the top of the directory and go to a folder in there`,
         `${s}>>${ss} - takes somethiing you entered and sends it to a file. Eg. ${s}ls >> hello.txt${ss}`  ],
    },
    terminalKeyboardShortcuts = {
        title: "Terminal - Basic Navigation",
        id:"terminalKeyboardShortcuts",
        category: "Backend",
        subCategory: "Terminal",
        content: [
            `${h}TAB key${hh} - finishes off whatever you are typing, can work on multiple folders`,
            `${h}Option key${hh} - move insertion point with mouse`,
        ]
    },
    git = {
        title: "Git terminal",
        id:"gitTerminal",
        category: "Backend",
        subCategory: "Terminal",
        content: [
            `${s} git pull upstream main ${ss} - pull changes from the main section to your local. When you push it will arrive in your fork.`,
            `${s} git push origin main ${ss} - push your changes to your fork`,
            `${s} git push origin main ${ss} - push your changes to your fork`,
        ]
    },
    jsBasic = {
        title: "Javascript- Things I didn't know ",
        id:"jsBestPractice",
        category: "Frontend",
        subCategory: "Javascript",
        content: [
         s + "`The result is ${variable + 10} `" + ss + "- Backticks are better concatonation",
        `${s}function(age=23, date = 'november', height)${ss} - default params. can also accept funcitons`,
        `${s}&&${ss} 'and' logical operator 1> 0 && -1 > 0 = true`,
        `${s}||${ss} 'or' logical operator 1> 0 || 0 > 0 = true`,
        `${s}|${ss} 'not' logical operator 1 + 1 | 1 + 0 = true` ]
    },
]