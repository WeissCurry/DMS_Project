let self = module.exports = {
    insert : async function (req, res) {
        const { Pasien_Ygbeli, Obat_Dibeli, Jumlah } = req.body;

        // Ambil harga dan jumlah stok dari tabel "Obat" berdasarkan id tertentu
        const obatInfo = await query.select('Obat', { id_Obat: Obat_Dibeli });

        if (obatInfo.length === 0) {
            res.status(404).json("Obat tidak ditemukan");
        } else {
            const harga = obatInfo[0].Harga;
            const stok = obatInfo[0].Stock;

            if (Jumlah > stok) {
                res.status(500).json("BELINYA KEBANYAKAN");
            } else {
                const Total = harga * Jumlah;
                const insertCart ={
                    Pasien_Ygbeli : Pasien_Ygbeli,
                    Obat_Dibeli : Obat_Dibeli, 
                    Jumlah : Jumlah, 
                    Total : Total
                }
                
                await query.insert('Cart', insertCart);
                res.status(200).json(insertCart);
            }
        }
    }
}
