const divEl = document.createElement("div");
divEl.classList.add("container");
document.body.appendChild(divEl);

const heading = document.createElement("h1");
heading.textContent="JavaScript roadmap";
heading.classList.add("haed");
divEl.appendChild(heading);

const parag = document.createElement("p");
parag.textContent = "JavaScript Roadmap are available at https://wesbos.com/javascript";
parag.classList.add("para");
divEl.appendChild(parag);

const image = document.createElement("img");
image.src="http://picsum.photos/300";
image.classList.add("img");
divEl.appendChild(image);

const list = document.createElement("ul");

const li = document.createElement("li");
li.textContent="one";
list.appendChild(li)

document.insertAdjacentElement("afterBegin",list)
const li1 = document.createElement("li");
li1.textContent="two";

