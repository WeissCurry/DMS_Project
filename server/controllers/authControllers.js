const bcrypt = require('bcrypt');
// const query = require('query-library'); // Pastikan modul ini diimport dan diinisialisasi dengan benar

let self = module.exports = {
  login: async function (req, res) {
    const { Username, Password, Role } = req.body;
    console.log("MASUK LOGIN");

    if (!Username || !Password || !Role) {
      console.log("Isi Yang Lengkap");
      res.redirect('/user/login');
    } else {
      try {
        const userData = await query.select('Role', { Username, Role });

        if (userData.length === 0) {
          console.log("Akun Tidak Ada!");
          res.redirect('/user/login');
        } else {
          const storedPassword = userData[0].Password;
          const passwordMatch = await bcrypt.compare(Password, storedPassword);

          if (passwordMatch) {
            console.log("Login Berhasil");
            res.redirect('/home');
          } else {
            console.log("Kata Sandi Salah");
            res.redirect('/user/login');
          }
        }
      } catch (error) {
        console.log(error);
        res.redirect('/user/login');
      }
    }
  },

  register: async function (req, res) {
    const { Username, Password, Role } = req.body;
    console.log("MASUK REGISTER");

    if (!Username || !Password || !Role) {
      console.log("Data Tidak Lengkap");
      res.redirect('/user/register');
    } else if (Username.length >= 12 || Password.length >= 24) {
      console.log("Kepanjangan Ngisinya");
      res.redirect('/user/register');
    } else {
      const nonDupUserData = await query.select('Role', { Username });

      if (nonDupUserData.length > 0) {
        console.log("Ganti Nama Anda!");
        res.redirect('/user/register');
      } else {
        const hashedPassword = await bcrypt.hash(Password, 10);
        const insertRoleData = {
          Username: Username,
          Password: hashedPassword, // Gunakan password yang sudah di-hash
          Role: Role,
        };
        await query.insert("Role", insertRoleData);
        console.log("Register Berhasil");
        res.redirect('/home');
      }
    }
  },

  registerView: async function (req, res) {
    res.render('register');
  },

  loginView: async function (req, res) {
    res.render('loginPage');
  }
}
