import express, {Request, Response} from "express";
import path from "path";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "static")));

app.use("/api/recipes", routes);

// Serve the HTML file for the main page
app.get("/", (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "static", "index.html"));
  });

const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';


app.listen(port, () => console.log(`Server listening at http://${host}:${port}`))