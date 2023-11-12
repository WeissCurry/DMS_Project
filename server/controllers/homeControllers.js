const Chart = require('chart.js');

let self = module.exports = {
    homeView : async function(req, res) {
        res.render('homePage')
    },
    diagramBatang: async function (req, res) {

        // Ambil data dari database (contoh pengambilan data)
        let allData = await query.selectAll('Obat', '*');

        let allNama = []
        let allStock = []
        
        for (let i = 0; i < allData.length; i++) {
            allNama.push(allData[i].Nama);
            allStock.push(allData[i].Stock);
        }
        
        const obatData = allNama
        const stockData = allStock

        // Format data yang diambil dari database
        const stockChartData = obatData.map(obat => {
            const matchingStock = stockData.find(stock => stock.id_Obat === obat.id_Obat);
            return {
                label: obat.Nama,
                stock: matchingStock ? matchingStock.Stock : 0,
            };
        });

        // Mendapatkan label dan nilai stock dari data
        const labels = stockChartData.map(data => data.label);
        const stockValues = stockChartData.map(data => data.stock);

        // Membuat objek respons dengan format JSON
        const response = {
            labels: labels,
            stockValues: stockValues,
        };

        // Membuat grafik batang
        const ctx = document.createElement('canvas').getContext('2d');
        const chartConfig = {
            type: 'bar',
            data: {
                labels: response.labels,
                datasets: [{
                    label: 'Stock',
                    data: response.stockValues,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };

        // Menggambar grafik
        const chartGrafik = new Chart(ctx, chartConfig);

        // Mengubah grafik menjadi gambar
        const image = new Image();
        image.src = chartGrafik.toBase64Image();

        res.send({
            image: image,
            data: response,
        });
    },
}