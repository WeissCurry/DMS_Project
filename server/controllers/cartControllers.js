let self = module.exports = {
    insert : async function (req, res) {
        const { Pasien_Ygbeli, Obat_Dibeli, Jumlah } = req.body;

        // Ambil harga dan jumlah stok dari tabel "Obat" berdasarkan id tertentu
        const obatInfo = await query.select('Obat', { id: Obat_Dibeli });

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
                
                /*
                return await database
                .select('users.*', 'rooms.Room_name')
                .from('users')
                .leftJoin('rooms', 'users.Room_id', 'rooms.id').where('users.roles', 'User');
                */
                await query.insert('Cart', insertCart);
                // res.status(200).json(insertCart);
                res.redirect('/home/cart')
            }
        }
    }, 
    cartView : async function (req, res) {
        let allData = await query.selectAll('Cart', '*')
        console.log(allData)
        res.render('cartPage', {allData})
    },
    cartViewInput : async function (req, res) {
        res.render('inputCartPage')
    },
    delete : async function (req, res) {
        const deleteById = req.params.id
        console.log("MASOEK DELETE");

        const selectData = await query.select('Cart', {id:deleteById})

        if (!selectData || selectData.length === 0) {
            res.status(400).json("CART SIAPA IKI!?")
        } else {
            // Tabelnya apa, Columnya dimana 
            await query.delete('Cart', {id:deleteById})
            // res.status(200).json("Data berhasil dihapus!");
            res.redirect('/home/cart')
        }
    },
}
