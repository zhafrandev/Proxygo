// script.js

function fetchData(category) {
    const dataTable = document.getElementById("data-table");
    const jsonUrl = `https://zhafrandev.github.io/Proxygo/dataproxy.json?v=${Date.now()}`;

    // Bersihkan tabel sebelum mengisi data baru
    dataTable.querySelector("tbody").innerHTML = "";

    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            // Memilih properti berdasarkan kategori yang diberikan
            const selectedData = data[category];

            // Loop through data yang dipilih dan populate the table
            selectedData.forEach(item => {
                const newRow = dataTable.querySelector("tbody").insertRow();
                const ipCell = newRow.insertCell(0);
                const hostCell = newRow.insertCell(1);

                ipCell.textContent = item.IP;
                hostCell.textContent = item.HOST;
            });
        })
        .catch(error => {
            console.error("Error fetching JSON:", error);
        });
}
