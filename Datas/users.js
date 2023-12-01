

db.createCollection("user")

db.user.insertMany([
    {
        user:"vengadesan",
        Email: "guvi@gmail.com",
        Role:"Full stack developer"

    },
     {
        user: "praveen",
        Email: "fsd@gmail.com",
        Role:"Data Scientist"

    },
     {
        user:"Ramachandran",
        Email: "xxx@gmail.com",
        Role:"Cyber security"

    },
     {
        user:"Pugalenthi",
        Email: "yyyy@gmail.com",
        Role:"Devops Engineer"

    },
     {
        user:"Iyyapan",
        Email: "kkkk@gmail.com",
        Role:"Full stack developer"

    },
     {
        user:"VijayKumar",
        Email: "fff@gmail.com",
          Role:"Data Scientist"

    }
])

db.user.find();