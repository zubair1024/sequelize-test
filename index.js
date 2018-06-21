global.db = require("./db");

(async () => {
    let conn = await db.mssqlConnect();
    if(conn){
        console.log('Ready to Rumble');
    }
})()
