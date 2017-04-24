import mongodb from "mongodb";
import config from "../config/environment";

const MongoClient = mongodb.MongoClient;

const url =
  "mongodb://" +
  config.DB_USER +
  ":" +
  config.DB_PASSWORD +
  "@ds111441.mlab.com:11441/users";

const exist = (username, password) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(e, db) {
      if (e) {
        console.log("Error en conexion a la base de datos");
        reject();
      }
      db
        .collection("users")
        .find({ username, password })
        .toArray((e, result) => {
          if (result) {
            resolve();
          } else {
            db.close();
            reject();
          }
        });
    });
  });
};

const save = data => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(e, db) {
      if (e) {
        console.log("Error en conexion a la base de datos");
        reject();
      }
      db
        .collection("users")
        .insertMany(
          [{ username: data.username, password: data.username }],
          (e, result) => {
            if (e) {
              console.log("Error insertando el usuario", e);
              db.close();
              reject();
            }
            resolve();
          }
        );
    });
  });
};
const get = (username, password) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function(e, db) {
      if (e) {
        console.log("Error en conexion a la base de datos");
        reject();
      }
      db
        .collection("users")
        .find({ username, password })
        .toArray((e, result) => {
          if (result) {
            resolve(result);
          } else {
            db.close();
            reject();
          }
        });
    });
  });
};
export default { exist, save, get };
