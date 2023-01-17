
const main = document.getElementById('main');
const checkbox = document.getElementById('paid');
const rating = document.getElementById('rating');





function createElement(element) {

    // creare elemente html, apelate prin const x

    const el = document.createElement('div');
    const title = document.createElement('h1');
    const tags = document.createElement('p');
    const hosts = document.createElement('p');
    const genre = document.createElement('p');
    const rating = document.createElement('p');
    const duration = document.createElement('p');

    //atribuirea claselor pentru fiecare element in parte

    el.setAttribute("class", "box");
    title.setAttribute("class", "title");
    tags.setAttribute("class", "tags");
    hosts.setAttribute("class", "hosts");
    genre.setAttribute("class", "genre");
    rating.setAttribute("class", "rating");
    duration.setAttribute("class","duration");

    //---------------------------------------------------------------


    title.innerHTML = element.title;
    tags.innerHTML = 'tags: ' + element.tags.join(', ');
    hosts.innerHTML = 'hosts: ' + (element.hosts.length > 1 ? element.hosts.join(', ') : element.hosts[0]);
    genre.innerHTML = 'genre: ' + element.genre;
    rating.innerHTML = 'rating: ' + element.rating;
    duration.innerHTML = 'duration(min): ' + element.duration;

    el.appendChild(title);
    el.appendChild(hosts);
    el.appendChild(duration);
    el.appendChild(genre);
    el.appendChild(tags);
    el.appendChild(rating);
    
    main.appendChild(el);
}

showPodcast(data, "")
function showPodcast(results) {
    main.innerHTML = '';
    if (checkbox.checked) {
        getFreePodcasts(results);
        return;
    }
    results.forEach(element => {
        if (element.rating >= range.value) {
            createElement(element);
        }
    });
}

function getFreePodcasts(results) {
    results.forEach(element => {
        if (element.paid === false) {
            if (element.rating >= range.value) {
                createElement(element);
            }
        }
    });
}

checkbox.addEventListener("change", function () {
    showPodcast(data)
})

range.addEventListener("change", function () {
    showPodcast(data)
});