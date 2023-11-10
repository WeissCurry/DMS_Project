// const knex = require('../knexfile')

let self = module.exports = {
    select : async function (req, res) {
        console.log("MASOEK SELECT");
        const selectById = req.params.id_Obat
        console.log(selectById, "<==== SELECTBYID");
        if (!selectById) {
            res.status(400).json("ID Obat tidak valid.");
        } else {
            const selectData = await query.select('Obat', { id_Obat: selectById });

            if (selectData.length === 0) {
                res.status(404).json("Data dengan ID Obat tersebut tidak ditemukan.");
            } else {
                res.status(200).json(selectData);
            }
        }
    },
    selectAll : async function (req, res){

        let allData = await query.selectAll('Obat', '*');
        res.status(200).json(allData);
    },
    insert: async function (req, res) {
        const { Nama, Harga, Stock, Komposisi, Dosis, Aturan_Pakai, Jenis_Obat } = req.body;
        const Gambar = req.file;
    
        console.log("MASOEK INSERT");
        console.log(Gambar);
    
        if (!Nama || !Harga || !Komposisi || !Dosis || !Stock || !Aturan_Pakai || !Jenis_Obat) {
            res.status(404).json("Isi data dengan lengkap!");
        } else {
            const insertDataObat = {
                Nama: Nama,
                Harga: Harga,
                Stock: Stock,
                Komposisi: Komposisi,
                Dosis: Dosis,
                Aturan_Pakai: Aturan_Pakai,
                Jenis_Obat: Jenis_Obat,
                Gambar: Gambar,
            };
    
            console.log("Insert Data Obat: ");
            console.log(insertDataObat);
    
            // Sekarang Anda dapat memasukkan data ke dalam database
            // await query.insert('Obat', insertDataObat);
    
            res.status(200).json("Data Berhasil diinput!");
        }
    },
    update: async function (req, res) {
        const updateDataObat = req.body;
        const id_Obat = req.params.id_Obat; // Menggunakan id_Obat yang akan diubah
    
        console.log("MASOEK UPDATE");
        const selectData = await query.select('Obat', { id_Obat: id_Obat });
    
        if (selectData.length === 0) {
            res.status(404).json("Data dengan ID Obat tersebut tidak ditemukan.");
        } else {
            await query.update('Obat', updateDataObat, { id_Obat: id_Obat });
            res.status(200).json("Data berhasil diubah!");
        }
    
    },
    delete : async function (req, res) {
        const deleteById = req.params.id_Obat
        console.log("MASOEK DELETE");
        
        let selectData = await query.select('Obat', {id_Obat:deleteById})
        if (!selectData || selectData.length === 0) {
            res.status(400).json("OBAT YG MANA IKI!?")
        } else {
            // Tabelnya apa, Columnya dimana 
            await query.delete('Obat', {id_Obat: deleteById});
            res.status(200).json("Data berhasil dihapus!");
        }
    },
}
