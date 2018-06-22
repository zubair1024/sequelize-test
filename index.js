global.db = require("./db");

(async () => {
    let conn = await db.mssqlConnect();
    if (conn) {
        console.log('Ready to Rumble');
        
        db.Project.create({ title: 'This is My First Title', description: 'omnomnom' })
            .then(() => db.Project.findOrCreate({ where: { title: 'This is My First Title' } }))
            .spread((user, created) => {
                console.log(user.get({
                    plain: true
                }))
                console.log(created)
                /*
                In this example, findOrCreate returns an array like this:
                [ {
                    username: 'fnord',
                    job: 'omnomnom',
                    id: 2,
                    createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
                    updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
                  },
                  false
                ]
                The array returned by findOrCreate gets spread into its 2 parts by the "spread" on line 69, and the parts will be passed as 2 arguments to the callback function beginning on line 69, which will then treat them as "user" and "created" in this case. (So "user" will be the object from index 0 of the returned array and "created" will equal "false".)
                */
            })
    }
})()
