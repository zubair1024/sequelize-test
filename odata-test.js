const sequelize = require('sequelize');
//var parser = require("odata-parser");
var parseOData = require('./odata-sequelize')

global.db = require('./db');
// var req={
//     query:parser.parse("$top=5&$skip=1&$select=Foo,Bar&$filter=Foo eq 'Test' or Bar eq 'Test'&$orderby=Foo desc")
// }

// req.query.$orderby=req.query.$orderby[0].Foo
// req.query.$filter="Name eq 'John' and LastName lt 'Doe'";

// console.log(JSON.stringify(req.query));
// paginator.getParams(req, (temp)=>{
//     console.log(temp);
// });
(async () => {
    // let conn = await db.mssqlConnect();
    // if (conn) {
        console.log('Ready to Rumble');

        var q = null;
        try{
            q=parseOData("$inlinecount=allpages&$top=25&$orderby=name desc&$filter=substringof('Aziz',name)", sequelize);
        }catch(Err){
            console.log(Err);
        }
        //console.log(parser.parse("$top=5&$skip=1&$select=Foo,Bar&$filter=Foo eq 'Test' or Bar eq 'Test'&$orderby=Foo desc"))
        console.log('--------------------------------------------------------------------------------');
        console.log(q);
        console.log(JSON.stringify(q));
        // var blah=await db.foo.findAll(q);
        // console.log(blah);
    // }
})()