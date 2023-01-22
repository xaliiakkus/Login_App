import express from "express";
import cors from 'cors';
import morgan from "morgan";

const app = express();
/** Middlewares Korsan Yazılımcılar Kullandığımız Kodların  Coğunu Göremez */
app.use(express.json());
app.use(cors());
app.use(morgan());
app.disable('x-powered-by');

const port = 8000;

/**HTTP GET Request */
