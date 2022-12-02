const http = require('http');

http.createServer ( (req, res) => {

    // console.log(req);
    res.write("hola mundo")
    // res.writeHead(200,{'Content-type':'text/plain'})
    // res.setHeader('Content-Disposition', "attachment; filename=lista.csv")
    // res.writeHead(200, {'Content-Type': 'aplication/csv'})


    // res.write("404- page not found");
    res.write("id, Ericka\n");
    res.write("1, Fernando\n");
    res.write("2, Pericles\n");
    res.write("3, Pedro\n");
    res.end()
})
.listen( 8080 );

console.log('escuchando puerto', 8080 )