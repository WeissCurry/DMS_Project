let self = module.exports = {
    select : async function (req, res) {
        console.log("MASOEK SELECT");
        const selectById = req.params.id
        console.log(selectById, "<==== SELECTBYID");
        if (!selectById) {
            res.status(400).json("ID Obat tidak valid.");
        } else {
            const selectData = await query.select('Obat', { id: selectById });

            if (selectData.length === 0) {
                res.status(404).json("Data dengan ID Obat tersebut tidak ditemukan.");
            } else {
                res.redirect('/home/katalog');
            }
        }
    },
    selectAll : async function (req, res){

        let allData = await query.selectAll('Obat', '*');
        res.status(200).json(allData);
    },
    insert: async function (req, res) {
        const { Nama, Harga, Stock, Komposisi, Dosis, Aturan_Pakai, Jenis_Obat} = req.body;
        const Gambar = req.file;

        // req.files[0].filename
        console.log(req.body, "REQ.DATA");
        console.log("MASOEK INSERT");
        // console.log(Nama, '<== IMAGE');
        // console.log(req.file, "<== REQ.FILE");
        console.log(Gambar, '<== IMAGE');
    
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
                Gambar: Gambar.path,
            };
            
            console.log("Insert Data Obat: ");
            console.log(insertDataObat);
    
            await query.insert('Obat', insertDataObat);
            res.redirect('/home/katalog/view')
        }
    },
    update: async function (req, res) {
        const { Stock } = req.body; 
        const id = req.params.id; 

        console.log("MASOEK UPDATE");
        const selectData = await query.select('Obat', { id: id });
    
        if (selectData.length === 0) {
            res.status(404).json("Data dengan ID Obat tersebut tidak ditemukan.");
        } else {
            const currentStock = selectData[0].Stock;
            const updatedStock = parseInt(currentStock) + parseInt(Stock); 
    
            const updateDataObat = {
            ...req.body,
            Stock: updatedStock,
            };
    
            await query.update('Obat', updateDataObat, { id: id });
            res.redirect('/home/katalog/view');
        }
    },
    delete : async function (req, res) {
        const deleteById = req.params.id
        console.log("MASOEK DELETE");
        
        let selectData = await query.select('Obat', {id:deleteById})
        if (!selectData || selectData.length === 0) {
            res.status(400).json("OBAT YG MANA IKI!?")
        } else {
            // Tabelnya apa, Columnya dimana 
            await query.delete('Obat', {id: deleteById});
            // res.status(200).json("Data berhasil dihapus!");
            res.redirect('/home/katalog/view')
        }
    },
    katalogView : async function (req, res) {
        let allDatas = await query.selectAll('Obat', '*');
        console.log(allDatas);
        res.render('katalogObatPage',  {allDatas})
    }, 
    katalogViewInput : async function (req, res) {
        res.render('inputObatPage')
    }
}
