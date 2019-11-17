# Barebones "read, evaluate, print loop" (REPL) for Sqlite

Install by cloning the Git repository, and then running "npm install" to install dependencies (e.g. Sqlite).

To start an interactive session:

    node sqlite-repl.js [FileName]

If "FileName" is omitted or is "-", a temporary, in-memory database is used.

To run commands from a file (assuming cmd.exe, Bash, etc.):

    node sqlite-repl.js < input.txt

Commands can span multiple lines, and must be terminated with a semicolon.