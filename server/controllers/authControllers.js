let self = module.exports = {
  login : async function(req, res) {
    const { Username, Password, Role } = req.body;
    console.log("MASUK LOGIn");

    if (!Username || !Password || !Role) {
      res.status(400).json("Data tidak lengkap!");
    } else {
      try {
        const roleData = await query.select('Role', { Username, Role });

        if (roleData.length === 0) {
          res.status(404).json("Akun tidak ditemukan.");
        } else {
          const storedPassword = roleData[0].Password;
          if (Password === storedPassword) {
            res.status(200).json("Login Berhasil");
          } else {
            res.status(401).json("Kata sandi salah.");
          }
        }
      } catch (error) {
        res.status(500).json("Terjadi kesalahan saat melakukan login.");
      }
    }
  },
  register : async function(req, res){
    const {Username, Password, Role} = req.body
    console.log("MASUK ReGister")

    if(!Username || !Password || !Role) {
      res.status(404).json("Data Nggak lengkap!")
    } else if(Username.length >= 12 || Password.length >= 24) {
      res.status(404).json("NAMA APA LOREM IPSUM!?")
    } else {
      const nonDupUserData = await query.select('Role', {Username})

      if (nonDupUserData.length > 0) {
        res.status(404).json("UDAH ADA! GANTI KTP ANDA!")
      } else{
        const insertRoleData = {
          Username : Username,
          Password : Password,
          Role : Role,

        }
        await query.insert("Role", insertRoleData)
        res.status(200).json("Register Berhasil")
      } 
    }
  }
}