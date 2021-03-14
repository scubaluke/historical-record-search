const searchBy = document.querySelector('#search-by')
const searchTerm = document.querySelector('#search')
searchTerm.addEventListener('keyup', renderContent)


async function search() {
    let url = `https://chroniclingamerica.loc.gov/search/titles/results/?terms=${searchTerm.value}&format=json&page=1`;
    try {
        let res = await fetch(url)
        return await res.json()
    
    } catch (error) {
        console.log(error);
    }

}

async function renderContent() {
    const printResults = document.querySelector('.results')
    console.log(printResults);
    let data = await search()
    let html = ''
    // data.forEach(item => console.log(item.item))
    console.log(data.items);
    console.log(data.items.forEach((item, i) => {
        if (i > 5) {
            return
        } else {
            let htmlSegment = `
            <div class="segment">
            <p class="title-label">title:</p>
            <h1 class="title" >${item.title_normal}</h1>
            <p class="place-of-publication-label">Place of Publication:</p>
            <h2 class="place-of-publication" >${item.place_of_publication}</h2>
            <p class="year-label">Year:</p>
            <h3>${item.start_year}</h3>
            <a href="${item.url}">More info</a>
            </div>
            `
            html += htmlSegment
        }
       
        
    
    }));
    
    printResults.innerHTML = html

}
