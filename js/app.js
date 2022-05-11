// Sample
let sections = [
    {
        title: 'Section 1',
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
        ]
    },
    {
        title: 'Section 2',
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
        ]
    },
    {
        title: 'Section 3',
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
        ]
    },
    {
        title: 'Section 4',
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
        ]
    },
    {
        title: 'Section 5',
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
        ]
    }
];

// Navigation Bar

let createSectionLink = (name) => {
    const navbar = document.querySelector('nav.navbar__menu ul');
    let ele = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', `#${name.toLowerCase().replace(" ", '')}`);
    link.textContent = name;
    link.classList.add('menu__link');
    link.addEventListener('click', scrollWindow);
    ele.appendChild(link);
    navbar.appendChild(ele);
}

let scrollWindow = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    // Offset property gets the distance between the outer border and the inner border
    const offset = document.querySelector(href).offsetTop;
    scroll({
        top: offset,
        behavior: "smooth"
    })
}

let mainNavbar = (sections) => {
    for (let section of sections){
        createSectionLink(section.title);
    }
}

// Sections 
let createSection = (object) => {
    let section = document.createElement('section');
    section.setAttribute('id', `${object.title.toLowerCase().replace(' ', '')}`);
    section.setAttribute('data-nav', object.title);
    section.appendChild(createDiv(object));
    doc.appendChild(section);
}

let createDiv = (object) => {
    let div = document.createElement('div');
    let title = document.createElement('h2');
    title.textContent = object.title;
    div.appendChild(title);
    for (let item of object.content) {
        div.appendChild(createParagraph(item));
    }
    div.classList.add('landing__container');
    return div;
}

let createParagraph = (text) => {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

window.onscroll = () => {
    document.querySelectorAll("section").forEach(function (active) {
        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150){
            active.classList.add("your-active-class");
        }
        else{
            active.classList.remove("your-active-class");
        }
	});
}

const doc = document.createDocumentFragment()
let mainSection = (sections) => {
    for (let section of sections) {
        createSection(section);
    }
    let main = document.querySelector('main');
    main.appendChild(doc);
}

// Main 
let count = 5;

let renderer = () => {
    let main = document.querySelector('main');
    main.innerHTML = `<header class="main__hero">
                        <h1>Landing Page </h1>
                    </header>`;

    let list = document.getElementById('navbar__list');
    list.innerHTML = '';

    mainNavbar(sections);
    mainSection(sections);
    main.appendChild(createButton('Add Section', addSection));
    main.appendChild(createButton('Top', returnToTop));
}

let returnToTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        behaviour: 'smooth'
    })
}

let addSection = () => {
    sections.push({
        title: `Section ${++count}`,
        content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo.',
            'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
        ]
    });
    renderer();
}

let createButton = (content, handler) => {
    let addButton = document.createElement('button');
    addButton.setAttribute('id', 'add__section');
    addButton.textContent = content;
    addButton.addEventListener('click', handler);
    return addButton;
}



document.addEventListener('DOMContentLoaded', renderer);