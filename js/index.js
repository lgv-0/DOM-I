const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

for (let i = 0; i < Object.keys(siteContent["nav"]).length - 1; i++)
  document.getElementsByTagName("nav")[0].children[i].text = `${siteContent["nav"]["nav-item-" + (i + 1).toString()]}`;

let e_CTA = document.getElementsByClassName("cta")[0];
e_CTA.firstElementChild.firstElementChild.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>');
e_CTA.firstElementChild.lastElementChild.innerText = siteContent["cta"]["button"];
e_CTA.lastElementChild.attributes[1].value = siteContent["cta"]["img-src"];

let e_MainContentContainer = document.getElementsByClassName("main-content")[0];
e_MainContentContainer.getElementsByClassName("middle-img")[0].setAttribute('src', siteContent["main-content"]["middle-img-src"]);

function f_FillTextContent(e_Target, s_Use)
{ e_Target.firstElementChild.innerText = siteContent["main-content"][`${s_Use}-h4`]; e_Target.lastElementChild.innerText = siteContent["main-content"][`${s_Use}-content`]; }

let textList = e_MainContentContainer.getElementsByClassName("text-content");
f_FillTextContent(textList[0], "features"); f_FillTextContent(textList[1], "about");
f_FillTextContent(textList[2], "services"); f_FillTextContent(textList[3], "product");
f_FillTextContent(textList[4], "vision");

let e_Contact = document.getElementsByClassName("contact")[0];
e_Contact.firstElementChild.innerText = siteContent["contact"]["contact-h4"];
let contactInfoList = e_Contact.getElementsByTagName("p");
contactInfoList[0].innerHTML = siteContent["contact"]["address"].replace("Street ", "Street<br>");
contactInfoList[1].innerText = siteContent["contact"]["phone"];
contactInfoList[2].innerText = siteContent["contact"]["email"];

document.getElementsByTagName("footer")[0].firstElementChild.innerText = siteContent["footer"]["copyright"];

document.querySelectorAll("header nav a").forEach((e_Item) =>
  {
    e_Item.style.color = "green";
  });