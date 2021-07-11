
const c = '<span class="code">';  
const cc = '</span>';
const h = '<span class="highlight">';  
const hh = '</span>';



const content = {

    terminal : [
        terminalKeyboardShortcuts = {
            title: "Terminal - Keyboard shortcuts",
            id:"terminalKeyboardShortcuts",
            categories: ["Shortcuts"],
            content: [
                `${h}TAB key${hh} - finishes off whatever you are typing, can work on multiple folders`,
                `${h}Option key${hh} - move insertion point with mouse`
            ]
        },

        terminalBasicNav = {
            title: "Terminal - Basic Navigation",
            id:"terminalBasicNav",
            categories: ["Nav"],
            content: [
            `${c}PWD${cc} - Where am I?`,
            `${c}CD${cc} - change directory`,
            `${c}CD-${cc} - go back`,
            `${c}LS${cc} - list all files`,
            `${c}LS -LA${cc} - list ${h}ALL${hh} files, including hidden ones`,
            `${c}man${cc} - manual, how to do something`,
            `${c}grep${cc} - find me something`,
            `${c}sort${cc} - alphabetical order`,
            `${c}curl${cc} - show me something`,
            `${c}open${cc} - opens the thing in finder/mac os`,
            `${c}open .${cc} - opens the current directory`,
            `${c}cat${cc} - short for concatonate, opens something`,
            `${c}/${cc} - jump to the top of the directory and go to a folder in there`
            ]
        },
        terminalCreation = {
            title: "Terminal - Creating and removing files",
            id:"terminalCreatingFiles",
            categories: ["Make file", "Delete", "Directories"],
            content: [
            `${c}mkdir${cc} - make directory`,
            `${c}touch${cc} (name), (name) - make a file or two`,
            `${c}rm -r dreamhouse${cc} - remove something`,
            `${c}wc${cc} - counts things`,
            `${c}|${cc} - pipe`,
            `${c}rm -r${cc} - remove directory`,
            `${c}piping${cc} - send things to another program`,
            `${c}atom .${cc} - open the entire directory in atom`,
            `${c}>>${cc} - takes somethiing you entered and sends it to a file. Eg. ${c}ls >> hello.txt${cc}`,
            `${c}curl${cc} Download a url`  
            ]
        },
           
        git = {
            title: "Git terminal",
            id:"gitTerminal",
            categories: ["Git"],
            content: [
                `${c} git add${cc} - add docs to the git`,
                `${c} git commit${cc} - create a version of your work`,
                `${c} git remote -v${cc} - get the gihub url`,
                `${c} git pull upstream main ${cc} - pull changes from the main section to your local. When you push it will arrive in your fork.`,
                `${c} git push origin main ${cc} - push your changes to your fork`
            ]
        }

    ],

    ruby : [
        basicOperations = {
            title: "Basic Operations",
            id:"basicOperations",
            categories: ["Varibles"],
            content: [
            ``]
        },
    ],

    vanillaJavascript : [
        loops = {
            title: "Loops",
            id:"loops",
            categories: ["loops"],
            content: []
        },
        ternaryTemplateLit = {
            title: "Template literals and ternary operators",
            id:"ternaryTemplateLit",
            categories: ["Template literals", "Ternary operators"],
            content: [
            `${c}&&${cc} 'and' logical operator 1> 0 && -1 > 0 = true`,
            `${c}||${cc} 'or' logical operator 1> 0 || 0 > 0 = true`,
            `${c}|${cc} 'not' logical operator 1 + 1 | 1 + 0 = true`,
            ]
        },
        usefulLinks = {
            title: "Useful links",
            id:"usefulLinks",
            categories: ["formatting"],
            content: [
            `${h}AirBnb Guide to JS${hh} https://github.com/airbnb/javascript`
            ]
        }
    ],

}