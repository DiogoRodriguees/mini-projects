import express from "express";
import { routes } from "./routes/routes";
import cors from 'cors'

const port = 3030
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(port, () => console.log(`server rodando na porta ${port}`));
