function connect() {
    var searchText = document.getElementById('search-input').value;
    var url = `https://restcountries.com/v3.1/name/${searchText}?fullText=true`;

    document.getElementById('search-input').value = "";
    document.getElementById('result').textContent = "";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                localStorage.setItem('searchResult', JSON.stringify(data));
                window.location.href = "result.html";
            } else {
                Swal.fire({    //Alternative of alert
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Insert a value or write country name correctly'
                });
            }
        });
}