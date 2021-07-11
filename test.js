
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
