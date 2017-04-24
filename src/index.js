import express from "express";
import bodyParser from "body-parser";
import auth from "./controllers/auth";
import middAuth from "./middlewares/authenticate";

// Configuramos Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", 3000);

// Iniciamos las rutas de nuestro servidor/API
var router = express.Router();

// Rutas de autenticación y login
router.post("/auth/signup", auth.signup);
router.post("/auth/login", auth.login);

// Ruta solo accesible si estás autenticado
router.get("/private", middAuth.authenticate, (req, res) => {
  console.log("AUTENTICADO");
});

app.listen(app.get('port'), () => {
    console.log('Express corriendo en '+ app.get('port'));
});
