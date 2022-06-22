const mongoose = require('mongoose')
const Table = require('./models/TableModal')

require('dotenv').config()

const tables = [   
   
        {no:11,status:'free'},
        {no:12,status:'free'},
        {no:13,status:'free'},
        {no:14,status:'free'},
        {no:15,status:'free'},
        {no:16,status:'free'},
        {no:17,status:'free'},
        {no:18,status:'free'},
        {no:19,status:'free'},
        {no:21,status:'free'},
        {no:22,status:'free'},
        {no:23,status:'free'},
        ];

        const connectDatabase=()=>{
            mongoose.connect( process.env.DB_URI ,{useNewUrlParser:true,useUnifiedTopology:true
            }).then((data)=>{
                console.log(`Mongodb connected with server: ${data.connection.host}`);
            }).catch(err => {
                console.log(err.stack);
                process.exit(1);
              })
        }
        connectDatabase();
        Table.insertMany(tables).then(r=>console.log('done'))
        

