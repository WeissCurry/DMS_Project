const bcrypt = require('bcrypt')

let self = module.exports = {
  login : async function(req, res) {
    const { Username, Password, Role } = req.body;
    console.log("MASUK LOGIn");

    if (!Username || !Password || !Role) {
      console.log("Isi Yang Lengkap");
      res.redirect('/user/login')
      // res.status(400).json("Data tidak lengkap!");
    } else {
      try {
        const roleData = await query.select('Role', { Username, Role });

        if (roleData.length === 0) {
          console.log("Akun Nggak ada!");
          res.redirect('/user/login')
          // res.status(404).json("Akun tidak ditemukan.");
        } else {
          const storedPassword = roleData[0].Password;
          if (Password === storedPassword) {
            // res.status(200).json("Login Berhasil");
            res.redirect('/home')

          } else {
            console.log("Kata Sandi Salah");
            res.redirect('/user/login')
            // res.status(401).json("Kata sandi salah.");
          }
        }
      } catch (error) {
        console.log(error);
        res.redirect('/user/login')
        // res.status(500).json("Terjadi kesalahan saat melakukan login.");
      }
    }
  },
  register : async function(req, res){
    const {Username, Password, Role} = req.body
    console.log("MASUK ReGister")
    console.log(req.body, '<===REQ BODY');

    if(!Username || !Password || !Role) {
      console.log("Data Nggak Lengkap");
      res.redirect('/user/register')
      // res.status(404).json("Data Nggak lengkap!")
    } else if(Username.length >= 12 || Password.length >= 24) {
      console.log("Kepanjangan Ngisinya");
      res.redirect('/user/register')
      // res.status(404).json("NAMA APA LOREM IPSUM!?")
    } else {
      const nonDupUserData = await query.select('Role', {Username})

      if (nonDupUserData.length > 0) {
        console.log("Ganti Nama Anda!");
        res.redirect('/user/register')
        // res.status(404).json("UDAH ADA! GANTI KTP ANDA!")
      } else{
        const hashedPassword = await bcrypt.hash(Password, 10)
        const insertRoleData = {
          Username : Username,
          Password : Password,
          // Password : hashedPassword,
          Role : Role,

        }
        await query.insert("Role", insertRoleData)
        // res.status(200).json("Register Berhasil")
        res.redirect('/home')
      } 
    }
  },
  registerView : async function(req, res){
    res.render('register')
  },
  loginView : async function(req, res){
    res.render('loginPage')
  }
}