
const c = '<span class="code">';  
const cc = '</span>';
const h = '<span class="highlight">';  
const hh = '</span>';
const b = '</br>';



const content = {
    rails : [
        setup = {
            title: "Terminal",
            id:"terminal",
            categories: ["setup"],
            content: [
            `${c}rails new APPNAME${cc} make a new rails thing`,
            `${c}rails console${cc} open up the console while server isn't running`,
            `${c}rails console${cc} open up the console while server isn't running`,
            `${c}sqlite3 development.sqlite3 < FILENAME.sql${cc} make a database from an SQL file`,
            `${c}rails db:create${cc} get the DB into rails`,
            `${c}rails db:migrate${cc} migrate the db`,
            `${c}bundle install${cc} if you've added gems, run this to install them`,
            ]
        },
        notes = {
            title: "Notes",
            id:"notes",
            categories: ["notes"],
            content: [
            `${h}rails new APPNAME${hh}`,
            ]
        }
    ],
    ruby : [
        notes = {
            title: "General notes",
            id:"generalNotes",
            categories: ["Snippets"],
            content: [
            `httparty is a gem that allows you to get apis in.  ${c}HTTParty.get${cc}`,
            `Backticks are console commands, you can run things off the terminal using it. 
            It returns the result. for interpolation, just use regular double quotes ${c}" "${cc}`,
            `${c}#comments${cc} are made with a hastag`,
            `${h}Debugging${hh} ${c}require 'pry'${cc}   ${c}binding.pry${cc}. Can then type the name of something you can to inspect using ${c}params[:name]${cc} or ${c}nameOfVar${cc} etc`,
            `${c}puts gets ${cc} are all functions, they just aren't writen with () in Ruby normally`,
            `you can re arrange code so the if is after the thing it does, eg.${c}puts "hey good job" if job = 'good' ${cc}`,
            `${c}<form action="/result">${cc} - form to direct user towards a page on submittion`,
            `${c}$global_variable${cc} - ${c}@instance_variable${cc}`,
            `${c};${cc} for pry specifically, will return it silently to the console`,
            ]
        },
        heroku = {
            title: "Heroku",
            id:"heroku",
            categories: ["hosting"],
            content: [
                `${c}git push heroku main${cc}`,
                `${c}heroku run rails db:migrate${cc}`,
                `${c}heroku run rails db:seed${cc}`,
                `${c}heroku pg:psql${cc} open up the database in heroku
                `,
            ]
        },
        sinatra = {
            title: "Sinatra",
            id:"sinatra",
            categories: ["server"],
            content: [
                `${c}get '/hello' do end${cc} - desc here`,
                `In terminal, viewing ${c}has taken the stage on NUMBER ${cc} - shows you the local host address. Going to ${c}http://localhost:NUMBER/${cc} shows you the page`,
                `Header: ${c}require 'sinatra' require 'sinatra/reloader'${cc}`,
                `Make a wildcard: ${c}get '/fanclub/:name' do "#{params[:name ]}is a proud member of the fanclub fanclub" end${cc}`,
                `Change port: ${c}ruby main.rb -p 3333${cc}`,
                `${c}<%= yield %>${cc} in the layout.erb signifies the bit to drop in the content`,
                `views/layout.erb is the default place for the page template`,
            ]
        },
        embededRuby = {
            title: "Embeded Ruby",
            id:"sinatra",
            categories: ["server"],
            content: [
                `Directory structure should be views/home.erb`,
                `Public folder is a default for css and js etc`,
                `${c}erb :home${cc} where home is the name of a page/ embeded ruby hile will load a page`,
                `${c}<%= 23 * 4 %>${cc} evaluate something in the erb file`,
                `${c}<% code to execute, note the lack of '=' to the left %>${cc}`,
                `${c}<%= code to be replaced %>${cc}`,
            ]
        },
        basicOperations = {
            title: "Basic Operations",
            id:"basicOperations",
            categories: ["Snippets"],
            content: [
            `${c}5.times${cc} - do the thing x times`,
            `${c}thing.class${cc} - like typeof in JS, is this an int, obj etc`,
            `${c}thing = gets.chomp${cc} - gets prompts the user for input, and saves it in var thing`,
            `Cases: ${c}symbol = '+' ${b} result = case params[:symbol] ${b}when '+' then x + y  when '-' then x - y  when '*' then x * y   when '/' then x / y ${cc} `,
            ]
        },
        classes= {
            title: "Classes",
            id:"classes",
            categories: ["Snippets"],
            content: [
            `${h}Inherit from another class: ${hh} 
            ${c}class Stooge < Actor${cc} where actor is the parent class`,
            `${c}class JarxBrother ${b}
            ${b}${b}
            attr_accessor :name, :instrument, :vice${b}
            ${b}v
            def initialize(n=' ', i=' ', v='lampooning authority' )${b}
                @name = n${b}
                @instrument = i${b}
                @vice = v${b}
            end${b}
            ${b}${b}
            def perform
                "my name is #{@name} and i'm here to say"
            end${b}
            ${b}${b}
            end${b}${b}
            jarco = JarxBrother.new 'Jarx', 'Mandolin', 'Frogs'${cc}`,
            `Setter, long:${b} ${c}def name=(n)${cc} method (function) for assigning a value to something, can also do functions inside of it`,
            `Setter, long:${b}${c}def name=(n) ${b} @name = n ${b} anything else i want to happen when this is assigned ${b} end ${c}`,
            `Getter, long:${b}${c}def name() ${b} return @name${b} anything else i want to happen when something is got ${b} end ${c}`,
            `Getter, long:${b}${c}def perform() ${b} return "My name is @name and I play the @instrument"${b} @playcount += ${b} end ${c}`,
            `${h}Super classes${hh}:`,
            ]
        },

        loopsConditionals = {
            title: "Loops and conditionals",
            id:"basicOperations",
            categories: ["Snippets"],
            content: [
            `${c}if thing > thing  #content elsif   #content end${cc} - conditionals`,
            `${c}unless var == 4  do_thing  end${cc} - cool way to do an if statment `,
            `${c}case var   when 'thing to compare'${cc} - avoid heads of if var things using this`,
            `${c}until ${cc} - loops until condition == true`,

            `You can define a var as an if statement, eg ${c}var = if num > 3 "more" else "less" ${cc} - avoid heads of if var things using this`,
        ]
        },

        terminal = {
            title: "Running Ruby in terminal",
            id:"runningRuby",
            categories: '',
            content: [
            `${c}irb #${cc} - run ruby in the terminal`,
            `${h}Control D ${hh} - exit irb`,
            `${h}Control C ${hh} - get out of indent/ coninuting code`,
            `${h}p${hh} - like puts, but will output it with code info`,
            `${c}!${cc} = destructive method. Without${c}!${cc} = non destructive method.
                Eg. ${c}array.compact!${cc} Will change array to be compacted
	                ${c}array.compact${cc} just returns the value`
        ]
        },
        formattingInterpolation = {
            title: "Formatting and interpolation",
            id:"formattingInterpolation",
            categories: ["Formatting", "Snippets"],
            content: [
            `${h}Interpolation${hh} - double quotes ${c}" "${cc} with ${c}#{ var }${cc} to insert var/code`,
            `${c}.upcase .downcase . capitalize${cc} text formatting`,
            `${c}var.chomp${cc} removes new lines at the end of lines`,
        ]
        },

    ],

    terminal : [
        terminalKeyboardShortcuts = {
            title: "Terminal - Keyboard shortcuts",
            id:"terminalKeyboardShortcuts",
            categories: ["Shortcuts"],
            content: [
                `${h}TAB key${hh} - finishes off whatever you are typing, can work on multiple folders`,
                `${h}Option key${hh} - move insertion point with mouse`,
                `${h}Contol - L${hh} - clear terminal`,
                `${h}Shift + G${hh} - jump to the end of a scrolling section`,

            ]
        },

        terminalBasicNav = {
            title: "Terminal - Basic Navigation",
            id:"terminalBasicNav",
            categories: ["File system"],
            content: [
                `tree - view as a tree`,
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
            `${c}/${cc} - jump to the top of the directory and go to a folder in there`,
            ]
        },
        terminalCreation = {
            title: "Terminal - Creating and removing files",
            id:"terminalCreatingFiles",
            categories: ["File system"],
            content: [
            `${h}make multiple files at once:${hh} touch echo/pages/{home,numbers}.html`,
            `${c}mkdir${cc} - make directory`,
            `${c}touch${cc} (name), (name) - make a file or two`,
            `${c}rm -r dreamhouse${cc} - remove something`,
            `${c}wc${cc} - counts things`,
            `${c}|${cc} - pipe`,
            `${c}rm -r${cc} - remove directory`,
            `${c}piping${cc} - send things to another program`,
            `${c}atom .${cc} - open the entire directory in atom`,
            `${c}>>${cc} - takes somethiing you entered and sends it to a file. Eg. ${c}ls >> hello.txt${cc}`,
            `${c}curl${cc} Download a url`,  
            ]
        },
           
        git = {
            title: "Git terminal",
            id:"gitTerminal",
            categories: ["Git", "File system"],
            content: [
                `${c} git add${cc} - add docs to the git`,
                `${c} git commit${cc} - create a version of your work`,
                `${c} git remote -v${cc} - get the gihub url`,
                `${c} git pull upstream main ${cc} - pull changes from the main section to your local. When you push it will arrive in your fork.`,
                `${c} git push origin main ${cc} - push your changes to your fork`
            ]
        },
    ],



    vanillaJavascript : [
        ternaryTemplateLit = {
            title: "Template literals and ternary operators",
            id:"ternaryTemplateLit",
            categories: ["Language"],
            content: [
            `${c}&&${cc} 'and' logical operator 1> 0 && -1 > 0 = true`,
            `${c}||${cc} 'or' logical operator 1> 0 || 0 > 0 = true`,
            `${c}|${cc} 'not' logical operator 1 + 1 | 1 + 0 = true`,
            ]
        },
        usefulLinks = {
            title: "Useful links",
            id:"usefulLinks",
            categories: ["Language"],
            content: [
            `${h}AirBnb Guide to JS${hh} https://github.com/airbnb/javascript`
            ]
        },
        iteration = {
            title: "Iteration",
            id:"iteration",
            categories: ["Language"],
            content: [
                `${h}Foreach${hh} - ${c}args.forEach((a, i) => {})${cc} Passes through (a): the actual element/obj/var and (i) the index. Continues even if broken. Only arrays.`,



            ]
        },
    ],
    
    databases : [
        sqlite = {
            title: "SQLITE 3",
            id:"sqlite 3",
            categories: ["SQL"],
            content: [
            `create_people.sql <- file format. `,
            `To start up a database: ${c}sqlite3 database.sqlite3 < filename.sql${cc} where the first section gets you into the sql thing, the second part specifies what file to run`,
            `${c}sqlite3 database.sqlite3${cc} get into the sql part of terminal, to run things like 'schema`,
            `${c}CREATE TABLE people (${b}
                id INTEGER PRIMARY KEY,${b}
                first_name TEXT,${b}
                last_name TEXT,${b}
                age INTEGER${b}
            ) ${cc} format for the .sql file, which is used to kind of initalise the database`,
            `${c}INSERT INTO people (id, first_name, last_name, age) VALUES  (1, 'Pat', 'Mifsud', 29);${cc} Inserting into the database`,
            `${c}select * from people;${cc} getting everything back`,
            `${c}select * from people;${cc} getting everything back`,
            `${c}select age from people;${cc} just getting age back`,
            `${c}select * from people WHERE id=1;${cc} just getting first person back`,
            `${c}select * from people WHERE age > 70${cc} searching`,
            `${c}UPDATE people SET age=67 WHERE id=1${cc} updating`,
            `${c}id INTEGER PRIMARY KEY AUTOINCREMENT;${cc} create IDs automatically`,
            `${c}.schema${cc}`,
            `${c}.schema${cc}`,
            ]
        },
        html = {
            title: "Html",
            id:"sqlite 3",
            categories: ["SQL"],
            content: [
            `${c}<form action='/butterflies' method="post"> to submit data${cc}`,
            ]
        },
        activerecord = {
            title: "Active Record",
            id:"activerecord",
            categories: ["rails"],
            content: [
            `${h}Cheatsheet${hh} https://gist.github.com/jessieay/3131622`,
            ]
        },
        rubysq = {
            title: "SQLITE 3",
            id:"sqlite 3",
            categories: ["SQL"],
            content: [
            `create_people.sql <- file format. `,
            `To start up a database: ${c}sqlite3 database.sqlite3 < filename.sql${cc} where the first section gets you into the sql thing, the second part specifies what file to run`,
            `${c}sqlite3 database.sqlite3${cc} get into the sql part of terminal, to run things like 'schema`,
            `${c}CREATE TABLE people (${b}
                id INTEGER PRIMARY KEY,${b}
                first_name TEXT,${b}
                last_name TEXT,${b}
                age INTEGER${b}
            ) ${cc} format for the .sql file, which is used to kind of initalise the database`,
            `${c}INSERT INTO people (id, first_name, last_name, age) VALUES  (1, 'Pat', 'Mifsud', 29);${cc} Inserting into the database`,
            `${c}select * from people;${cc} getting everything back`,
            `${c}select * from people;${cc} getting everything back`,
            `${c}select age from people;${cc} just getting age back`,
            `${c}select * from people WHERE id=1;${cc} just getting first person back`,
            `${c}select * from people WHERE age > 70${cc} searching`,
            `${c}UPDATE people SET age=67 WHERE id=1${cc} updating`,
            `${c}id INTEGER PRIMARY KEY AUTOINCREMENT;${cc} create IDs automatically`,
            `${c}.schema${cc}`
            ]
        },



    ],

}

