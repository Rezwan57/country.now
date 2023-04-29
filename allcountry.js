fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        var showCountries = document.getElementById('showcountry');

        for (var i = 0; i < data.length; i++) {
            var country = data[i];
            var countryDiv = document.createElement('div');

            countryDiv.innerHTML = `
                <div class = "card">
                    <img src="${country.flags.png}" class="card-img-top img-fluid" alt="${country.name.common}">
                    <div class="card-body">
                        <h5 class="card-title mb-3"><b>${country.name.common}</b></h5>
                        <p class="card-text"><b>Capital:</b> ${country.capital}</p>
                        <p class="card-text"><b>Region</b> ${country.region}</p>
                        <p class="card-text"><b>Language:</b> ${country.languages[Object.keys(country.languages)[0]]}</p>
                    </div>
                </div>
            `;

            countryDiv.classList.add('each-card', 'col-md-3', 'mb-4');
            showCountries.appendChild(countryDiv);
        }
    });