const Sequelize=require("sequelize");
const express=require('express');
const Bodyparser=require('body-parser');
const app= express();
app.use(express.json());

const sequel= new Sequelize('firstdb','nikhil','nikhil123',{
    dialect:'postgres'
});

// sequel.authenticate().then(()=>{
//     console.log("connection successful");
// }).catch((err)=>{
//     console.log(err);
//     console.log('error connecting to database');
// });

const User=sequel.define('user',{
    user_id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.DataTypes.STRING
    },
    Password:{
        type:Sequelize.DataTypes.STRING
    },
    role:{
        type:Sequelize.DataTypes.STRING
    }
},{
    freezeTableName:true,
    timestamps:false
}); 

User.sync().then((data)=>{
    console.log('new table');
}).catch((err)=>{
    console.log('error')
});

//build and save


// User.sync({alter:true}).then(()=>{
//     const user= User.build({user_id:2, username:"Nikhil", Password:"nikhil123", role:"Tester"});
//     return user.save();
// }).then((data)=>{
//   console.log("data is added to the database");
// }).catch((err)=>{
//     console.log("error");
// });

//create
//GET
// app.get('/',(req,res)=>{
// User.sync({alter:true}).then(()=>{
//     return User.create({
//         user_id:4, username:"sumanth1", Password:"nikhil123", role:"Tester"
//     })
// }).then((data)=>{
//     res.send(data);
//     console.log(data);
//   console.log("data is added to the database");
// }).catch((err)=>{
//     console.log("error");
// })
// });
 
//Bulk Create
// app.get('/',(req,res)=>{
//     User.sync({alter:true}).then(()=>{
//         return User.bulkCreate([{
//             user_id:5, username:"sumanth12", Password:"nikhil4123", role:"Tester"},
//             {user_id:6, username:"sumanth13", Password:"nikhil4123", role:"Tester"}]
//         )
//     }).then((data)=>{data.forEach((element) => {
//   console.log(element.toJSON())      
//     }).catch((err)=>{
//         console.log("error");
//     })
//     })});

//read(select)
// app.get('/',(req,res)=>{
//     User.sync({alter:true}).then(()=>{
//             return User.findAll({attributes:['username'],where : {user_id:3}})
//         }).then((data)=>{
//             console.log(data);
//           console.log("data is added to the database");
//         }).catch((err)=>{
//             console.log("error");
//         });
//     });

//update
// app.get('/',(req,res)=>{
// User.sync({alter:true}).then(()=>{
//         return User.update({username:'zubair'},{where : {user_id:3}})
//     }).then((data)=>{
//         console.log(data);
//       console.log("data is added to the database");
//     }).catch((err)=>{
//         console.log("error");
//     });
// });

//delete
// app.get('/',(req,res)=>{
//     User.sync({alter:true}).then(()=>{
//             return User.destroy({where : {user_id:4}})
//         }).then((data)=>{
//             console.log(data);
//           console.log("data is added to the database");
//         }).catch((err)=>{
//             console.log("error");
//         });
//     });
























const port=6000;

app.listen(port,()=>{
    console.log('connected to server');
});
