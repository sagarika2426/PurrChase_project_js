import navbar from './navbar.js';
document.getElementById("navbar").innerHTML = navbar();
const pathname = window.location.pathname;
const splitted_path = pathname.split("/");
const current_page = splitted_path[splitted_path?.length - 1];
const links = document.getElementById("links");
console.log(links);
const active_page = links?.querySelector(`a[href="${current_page}"]`);
console.log(active_page)
active_page.classList.add("active_page")