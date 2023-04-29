var data = JSON.parse(localStorage.getItem('searchResult'));

for (var i = 0; i < data.length; i++) {

    var country = data[i];
    var newDiv = document.createElement('div')

    newDiv.innerHTML = `
                <div class="head-div">
                    <b class="name-head">${country.name.common}</b>
                    <b>${country.name.official}</b>
                    <b>${country.name.nativeName[Object.keys(country.name.nativeName)[0]].official}</b>
                </div>

                <div class = "flagninfo d-lg-flex">
                
                    <div class="flag-div">
                       <img class="img-fluid" src="${country.flags.png}">
                    </div>

                    <div class="info-div">
                       <h3>Basic Info</h3>
                       <p><b>Name:</b> ${country.name.common}</p>
                       <p><b>Capital:</b> ${country.capital}</p>
                       <p><b>Region:</b> ${country.region}</p>
                       <p><b>Languages:</b> ${country.languages[Object.keys(country.languages)[0]]}</p>
                       <p><b>Currency:</b>${country.currencies[Object.keys(country.currencies)].name}</p>
                    </div>
                </div>



                <p class="mt-lg-4">
                   <button class="btn more-details" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Show More Details  </button>
                </p>
                <div class="collapse" id="collapseExample">
                    <div class = "info-div card card-body" >
                        <h3 class="mb-4">Other Infos:</h3>
                        <p class="text-light mb-4"> <b>Region:</b>  ${country.region} </p>
                        <p class="text-light mb-4"> <b>Sub-region:</b>  ${country.subregion}</p>
                        <p class="text-light mb-4"> <b>Latitude and Longitude:</b> ${country.latlng} </p>
                        <p class="text-light mb-4"> <b>Land Area:</b> ${country.area} </p>
                        <p class="text-light mb-4"> <b>Population:</b> ${country.population} </p>
                    </div>
                </div>

                
            `;

    newDiv.classList.add('inner-result')
    document.getElementById('result').appendChild(newDiv);
}


function goBack () {
    window.history.back()
}