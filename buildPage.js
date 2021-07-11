window.onload = function (e) {


  // factory to make a html node | based loosly on https://bit.ly/3qE9WB8
  const make = function (type, attributes, ...content) {
    let el = makeElement(type, attributes);
    content.forEach((child) => {
      if (typeof child === "string") {
        el.innerHTML = child;
      } else el.append(child);
    });
    return el;
  };

  // factory to turn '.class .class #id' into attributes
  const makeElement = function (type, attributes) {
    let el = document.createElement(type);
    const attrArray = attributes.split(" ");
    let attrObj = {};
    // once i learn regex can probably reduce this to a couple lines
    attrArray.forEach((attr) => {
      let attrValue = attr.slice(1);
      if (attr.charAt(0) === "#") {
        attrObj.id = attrValue;
      } else if (attr.charAt(0) === ".") {
        const cl = attrObj.class;
        attrObj.class = cl ? cl + " " + attrValue : attrValue;
      }
    });
    for (key in attrObj) {
      el.setAttribute(key, attrObj[key]);
    }
    return el;
  };

  // factory to make a card. Accepts content.codeSnippets[0]
  const mintCard = function (card, sectionName) {
    let cardNode = make("div", ".card", " ");
    cardNode.appendChild(make("h3", " ", card.title));
    cardNode.append(mintCardH4Catergories(card.categories, sectionName));
    card.content.forEach((p) => {
      cardNode.append(make("p", " ", p));
    });
    return cardNode;
  };

  // factory to make a section. Accepts content.codeSnippets
  const mintCardsInSection = function (sectionObj, sectionName) {
    console.log(sectionObj);
    let wrapper = make("div", ".wrapper", " ");
    sectionObj.forEach((card) => {
      wrapper.appendChild(mintCard(card, sectionName));
    });
    return wrapper;
  };

  // factory to make a section. Accepts content.codeSnippets
  const mintSectionHead = function (sectionName) {
    const title = make("div", `.title`, ``);

    const chevron = make("div", `.chevron #c${sectionName}`, chev);
    const h2 = make("h2", ``, `${sectionName}`);
    
    title.append(chevron, h2);

    title.addEventListener("click", function (event) {
      toggleOpenSection(sectionName);
      event.stopPropagation();
    },false);

    const filters = mintHeaderFilters(sectionName);

    let headingWrapper = make("div", ".wrapper .heading", " ");
    headingWrapper.append(title, filters);

    return headingWrapper;
  };


  const footer = make("footer", ``, " ");

  const mintHeaderFilters = function (section) {
    const div = make("div", `.filters`, "");
    //mint all filters for this section, return as html nodes
    //get unique list of all categories for the section
    let filterSet = new Set();
    content[section].forEach((card) => {
      if (card.categories) {
        card.categories.forEach((category) => {
          filterSet.add(category);
        });
      }
    });

    // if only 1 category don't return filters
    if (filterSet.size < 2) return div;

    // Add 'all' filter
    div.append(mintHeadFilter(section, "All", 1));
    filterSet.forEach((catName) => {
      div.append(mintHeadFilter(section, catName, 0));
    });

    return div;
  };

  const mintHeadFilter = function (section, catName, active) {
    const activeCl = active ? ".active" : " ";
    let filterClass = makeSafeForCSS(`filt-${section}${catName}`);
    console.log(filterClass);
    const filterNode = make("a", `.filter ${activeCl} .${filterClass}`,catName);
    filterNode.addEventListener("click", function () {
        filterBy(section, catName, filterClass, filterNode);
    },false);
    return filterNode;
  };

  const mintCardH4Catergories = function (cardCategories, sectionName) {
    if (!cardCategories) return " ";
    const h4 = make("h4", "", "");
    cardCategories.forEach((catName) => {
      const filterClass = makeSafeForCSS(`filt-${sectionName}${catName}`);
      const a = make("a", `.filter .${filterClass}`, catName);
      a.addEventListener("click", function () {
          filterBy(sectionName, catName, filterClass, a);
      },false);
      h4.append(a);
    });
    return h4;
  };

  const filterBy = function (sectionName, catName, filterClass, node) {
    console.log(`about to filter ` + sectionName + " by " + catName);
    //If clicked on active filter toggle off instead
    if (node.classList.contains("active")) {
      catName = "All";
      filterClass = makeSafeForCSS(`filt-${sectionName}all`)
    }

    const sectDiv = document.getElementById(sectionName);

    let filteredObj = [];
    content[sectionName].forEach((card) => {
      if (card.categories.includes(catName) || catName === "All") {
        filteredObj.push(card);
      }
    });

    const scrollCont = sectDiv.querySelector(".scrollContainer");
    scrollCont.innerHTML = "";
    scrollCont.append(mintCardsInSection(filteredObj, sectionName));

    const allFilterButtons = sectDiv.querySelectorAll(".filter");
    allFilterButtons.forEach((button) => {
      button.classList.remove("active");
    });

    const macthingFilterButtons = document.querySelectorAll(`.${filterClass}`);
    macthingFilterButtons.forEach((button) => {
      button.classList.add("active");
    });
  };



  const mintPage = function () {
    for (sectionName in content) {
      const sectionHead = mintSectionHead(sectionName);
      const scrollContainer = make("div", ".scrollContainer", " ");
      scrollContainer.append(
        mintCardsInSection(content[sectionName], sectionName)
      );

      const sectionNode = make("section", `#${sectionName}`, " ");
      sectionNode.onclick = function () {
        openSection(this.getAttribute('id'));
      };
      sectionNode.append(sectionHead, scrollContainer);
      sectionNode.append(make("div", `.fadeHoriz`, " "),  make("div", ".fadeVert", " "));
      document.body.appendChild(sectionNode);
    }
  };

  mintPage();

  // document.body.appendChild(mintSection(content.codeSnippets));
  // document.body.appendChild(mintCardsInSection(content.codeSnippets));

  // write page
  // mintPost(content.codeSnippets, codeSnippetsWrapper);
  // mintPost(content.posts, postsWrapper);
  // mintPageContent();

  // 🔨
  // INTERACTIONS

  const toggleOpenSection = function (sectionName) {
    const sectDiv = document.getElementById(sectionName);
    sectDiv.classList.toggle('open');
  };

  const openSection = function (sectionName) {
      const sectDiv = document.getElementById(sectionName);
      sectDiv.className = 'open';
  };

  const sections = document.querySelectorAll("section");

  // temp adding open on click to the sections
  // for (var i = 0; i < sections.length; i++) {
  //   sections[i].onclick = openSection;
  // }
};

function makeSafeForCSS(str) {
  return str.replace(/[^a-z0-9]/g, function (s) {
    var c = s.charCodeAt(0);
    if (c == 32) return "-";
    if (c >= 65 && c <= 90) return "_" + s.toLowerCase();
    return c.toString(16).slice(-4);
  });
}

// misc
const chev = `<svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25781 6.51562C1.08594 6.67969 0.992188 6.89844 0.992188 7.14844C0.992188 7.65625 1.39062 8.05469 1.89844 8.05469C2.14844 8.05469 2.38281 7.96094 2.55469 7.78125L7.91406 2.28906L13.2734 7.78125C13.4453 7.96094 13.6797 8.05469 13.9297 8.05469C14.4297 8.05469 14.8281 7.65625 14.8281 7.14844C14.8281 6.89844 14.7422 6.67969 14.5703 6.51562L8.61719 0.421875C8.42188 0.21875 8.17969 0.109375 7.91406 0.109375C7.64844 0.109375 7.41406 0.210938 7.21094 0.421875L1.25781 6.51562Z" fill="black"/>
</svg>`;
