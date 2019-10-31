fetch("https://www.reddit.com/r/aww/.json")
  .then(res => res.json())
  .then(data => {
    console.log(data);

    const sectionContainerEl = document.getElementById("posts");

    for (let entry of data.data.children) {
      let sectionEl = document.createElement("section");
      sectionEl.classList.add("posts");

      let postsEl = document.createElement("section");
      postsEl.classList.add("posts");

      let titleEl = document.createElement("h2");
      titleEl.innerText = entry.data.title;
      sectionEl.appendChild(titleEl);

      let imagesEl = document.createElement("img");
      imagesEl.setAttribute("src", entry.data.thumbnail);
      sectionEl.appendChild(imagesEl);

      let linkEl = document.createElement("a");
      linkEl.setAttribute(
        "href",
        "https://www.reddit.com/" + entry.data.permalink
      );
      linkEl.innerText = "More!";
      sectionEl.appendChild(linkEl);

      sectionContainerEl.appendChild(sectionEl);
    }
  });
