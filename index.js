const http = require('http');
const port = 3000;


const server = http.createServer(async(req, res) => {
    // if (req.url==='/api'  && req.method ==='GET') {
    //     res.write('forwarded to api');
    //     res.end();
    // } else {
    //     res.write("Hello !!");
    //     res.end();   
    // }
    // if(req.url==='/api/route' && req.method==='GET'){
    //     res.write('kase ho bro');
    //     res.end();
    // }else{
    //     res.write("Hello !!");
    //     res.end(); 
    // }

    if (req.url === '/api' && req.method === 'POST') {
        const body = () => {
            return new Promise((resolve, reject) => {
                try {
                    let body = '';
                    req.on('data', (chunk) => {
                        body += chunk.toString();
                    })
                    req.on('end', () => {
                        resolve(body);
                    })
                    res.statusCode = 201;
                    res.write("Body is created");
                    res.end();
                } catch (error) {
                    reject(error);
                }
            })
        }
        const resultedBody = await body();
        console.log('res.body',resultedBody);
        const getBody = JSON.parse(resultedBody);
        console.log(getBody.message);
         console.log(getBody.movie);
          console.log(getBody.url);
    } else {
        res.write("Hello !!");
        res.end();
    }
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})