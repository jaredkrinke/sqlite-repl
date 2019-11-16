const sqlite3 = require("sqlite3");
const repl = require("repl");
const db = new sqlite3.Database(":memory:");

db.on("error", (err) => console.log(err));
db.on("open", () => {
    db.serialize();

    const replServer = repl.start({
        eval: (line, context, filename, cb) => {
            db.all(line, (err, rows) => {
                if (err !== null) {
                    cb(err);
                } else {
                    cb(null, rows);
                }
            });
        },
    });
    
    replServer.on("exit", () => {
        db.close();
    });
});

