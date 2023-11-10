const query = require('../models/query');

let self = module.exports = {
    select :  async function (req, res) {
        console.log("MASOEK SELECT");
        const selectById = req.params.id
        console.log(selectById, "<==== SELECTBYID");
        let allData = await query.select('Pasien', {Nomor_RM:selectById})
        res.status(200).json(allData)
    },
    selectAll : async function (req, res) {
        console.log("MASOEK SELECTALL");
        
        let allData = await query.selectAll('Pasien', '*');
        res.status(200).json(allData)
    },
    insert : async function (req, res) {
        //harus sama kaya yang di database 
        const {Nama, TTL, Nomer_Telefon, Jenis_Kelamin, 
            Alamat_Lengkap, Diagnosis, Obat_Diberikan, Dokter_Diagnosa} = req.body

            console.log("MASOEK INSERT");
            
        const insertDataPasien = {
            Nama : Nama, 
            TTL : TTL, 
            Nomer_Telefon : Nomer_Telefon, 
            Jenis_Kelamin : Jenis_Kelamin, 
            Alamat_Lengkap : Alamat_Lengkap, 
            Diagnosis : Diagnosis, 
            Obat_Diberikan : Obat_Diberikan, 
            Dokter_Diagnosa : Dokter_Diagnosa
        }
        
        await query.insert('Pasien', insertDataPasien)
        res.status(200).json("Register Pasien Berhasil")
        
    },
    update: async function(req, res) {
        const { Obat_Diberikan } = req.body;
        const paramsPasien = req.params.Nomor_RM;
        console.log("MASOEK UPDATE");

        const selectPasien = await query.select('Pasien', { Nomor_RM: paramsPasien });
    
        if (selectPasien.length === 0) {
            res.status(404).json("Data Pasien dengan Nomor_RM tersebut tidak ditemukan.");
        } else {
            await query.update('Pasien', { Obat_Diberikan: Obat_Diberikan }, { Nomor_RM: paramsPasien });
            res.status(200).json("Update Pasien Berhasil");
        }   
    },
    
    delete : async function (req, res) {
        const deleteById = req.params.Nomor_RM
        console.log("MASOEK DELETE");

        const selectData = await query.select('Pasien', {Nomor_RM:deleteById})

        if (!selectData || selectData.length === 0) {
            res.status(400).json("PASIEN SIAPA IKI!?")
        } else {
            // Tabelnya apa, Columnya dimana 
            await query.delete('Pasien', {Nomor_RM:deleteById});
            res.status(200).json("Data berhasil dihapus!");
        }
    },
}
