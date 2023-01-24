import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from '../server/database/conn.js'
const app = express();
/** Middlewares Korsan Yazılımcılar Kullandığımız Kodların  Coğunu Göremez */
app.use(express.json());
app.use(cors());
app.use(morgan());
app.disable('x-powered-by');

const port = 5781;

/**HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home Get Request");
});

/** Api Routes */

/** Start Server Only When We Have Valid Connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot Connect to the server')
    }
})

