import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from '../server/database/conn.js'
import router from './router/route.js';
const app = express();
/** Middlewares Korsan Yazılımcılar Kullandığımız Kodların  Coğunu Göremez */
app.use(express.json());
app.use(cors());
app.use(morgan());
app.disable('x-powered-by');

const port = 8000;

/**HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home Get Request");
});

/** Api Routes */
app.use('/api', router)
/** Start Server Only When We Have Valid Connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
            console.log('Welcome Owner');
        })
    } catch (error) {
        console.log('Cannot Connect to the server')
    }
})







/*** Server İlk Temel
 * 
 * 
 * 
 * import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from '../server/database/conn.js'
import router from './router/route.js';
const app = express();


/** Middlewares Korsan Yazılımcılar Kullandığımız Kodların  Coğunu Göremez 
app.use(express.json());
app.use(cors());
app.use(morgan());
app.disable('x-powered-by');

const port = 8000;

/**HTTP GET Request 
app.get('/', (req, res) => {
    res.status(201).json("Home Get Request");
});

/** Api Routes 
app.use('/api', router)
/** Start Server Only When We Have Valid Connection 
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
            console.log('Welcome Owner');
        })
    } catch (error) {
        console.log('Cannot Connect to the server')
    }
})

 * 
 * 
 * 
 */