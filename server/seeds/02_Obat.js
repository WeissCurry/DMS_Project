/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('Obat').del()
  await knex('Obat').insert([{
      Nama: "Candistin 12mL",
      Harga: 50000,
      Stock: 30,
      Komposisi: "Per mL : Nystatin 100.000 U",
      Dosis: "Bayi: 4 x 1-2ml sehari. Anak dan dewasa: 4 x 1-6ml sehari, pengobatan dilanjutkan 48 jam setelah gejala menghilang",
      Aturan_Pakai: "Diminum sebelum atau sesudah makan",
      Jenis_Obat: "Obat Keras",
      id: 1,
      Gambar: "https://res.cloudinary.com/djjzsn7pa/image/upload/v1699734601/GambarObat/fmcvcw6v0orulbhrgz6l.webp"
    },{
      Nama: "Sanmol 60mL",
      Harga: 20000,
      Stock: 100,
      Komposisi: "Tiap 5 ml mengandung: Paracetamol 120 mg",
      Dosis: "Dewasa dan anak usia >12tahun: 1 tablet, 3–4 kali sehari. Anak usia 6–12 tahun: ½–1 tablet, 3–4 kali sehari.",
      Aturan_Pakai: "Diminum sebelum atau sesudah makan",
      Jenis_Obat: "Obat Bebas",
      id: 2,
      Gambar: "https://res.cloudinary.com/djjzsn7pa/image/upload/v1699734601/GambarObat/sngtrapglfgzektc6lak.webp"
    },{
      Nama: "Tolak Angin Cair Plus Madu 15 ml",
      Harga: 20000,
      Stock: 200,
      Komposisi:
        "5.67 g ekstrak bahan: Oryza sativa 20%, foeniculum vulgare fructus 10%, helicteres isora fructus 10%, zingiber officinale rhizoma, myristica fragrans semen, cinnamomum burmanni cotex, centella asiatica herba, parkia roxburghii semen, amomum compactum fructus, usnea missaminensis thalus, mel depuratum (madu) dan bahan lain hingga 15 ml",
      Dosis:
        "Untuk membantu menjaga daya tahan tubuh: minum 1 sachet, 2 kali per hari. Selama 7 hari atau lebih. Jika masuk angin/sakit perut dan diare: minum 3-4 sachet per hari. Sebelum melakukan perjalanan minum 1 sachet, atau 1-3 sachet pada waktu mabuk perjalanan. Saat kecapaian dan kurang tidur, minum 1 sachet.",
      Aturan_Pakai: "Diminum Setelah makan",
      Jenis_Obat: "Obat Bebas",
      id: 3,
      Gambar: "https://res.cloudinary.com/djjzsn7pa/image/upload/v1699734602/GambarObat/hev2x3tppdqspzzkoerd.webp"
    },{
      Nama: "Kuldon Sariawan 650 mg 4 Tablet",
      Harga: 2500,
      Stock: 1000,
      Komposisi: "Daun Sogomanis 420 mg, Thymi 280 mg, Akar Manis 280 mg, Bunga Seruni 280 mg, Alang-Alang 208 mg",
      Dosis: "Dewasa: 2 tablet, diminum 3 kali per hari. Anak-anak: Setengah dosis dewasa.",
      Aturan_Pakai: "Dapat diminum langsung atau dikunyah terlebih dahulu",
      Jenis_Obat: "Obat Bebas",
      id: 4,
      Gambar: "https://res.cloudinary.com/djjzsn7pa/image/upload/v1699734602/GambarObat/qrkfrbd2zheppd7xwfkt.webp"

    },{
      Nama: "Ibuprofen 400 mg 10 Tablet",
      Harga: 5000,
      Stock: 500,
      Komposisi: "Ibuprofen 400 mg",
      Dosis: "Dewasa: 200-250 mg 3-4 kali sehari. Osteoartritis, artritis reumatoid: 1200 mg - 1800 mg 3 kali sehari. Eksaserbasi akut Dosis maksimum 2400 mg/hari, jika kondisi sudah stabil selanjutnya dosis dikurangi hingga maksimum 1800 mg/hari. Anak-anak: Anak 1-2 tahun: 50 mg 3-4 kali sehari. Anak 3-7 tahun: 100-125 mg 3-4 kali sehari. Anak 8-12 tahun: 200-250 mg 3-4 kali sehari.",
      Aturan_Pakai: "Dikonsumsi Setelah makan",
      Jenis_Obat: "Obat Keras",
      id: 5,
      Gambar: "https://res.cloudinary.com/djjzsn7pa/image/upload/v1699734601/GambarObat/sbyshe4njd9yrw7yuogy.webp"

    },{
      Nama: "Kenalog in Orabase 0.1% Salep 5 g",
      Harga: 85000,
      Stock: 20,
      Komposisi: "Tiap gram mengandung : 1 mg Triamcinolone acetonide",
      Dosis: "2-3 kali sehari",
      Aturan_Pakai:
        "Oleskan obat secukupnya sekitar 0.6 cm pada lesi hingga menghasilkan lapisan tipis. Jangan digosok. Oleskan pada waktu tidur. Tergantung pada tingkat keparahan gejala, mungkin perlu diterapkan 2-3 kali sehari.",
      Jenis_Obat: "Obat Keras",
      id: 6,
      Gambar: "https://res.cloudinary.com/djjzsn7pa/image/upload/v1699734601/GambarObat/gg1pynl1smmnz9en8pli.webp"

    },
  ])
};
