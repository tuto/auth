import userService from "../services/users";
require("babel-polyfill");

const exist = async (username, password) => {
  try {
    await userService.exist(username, password);
    return true;
  } catch (e) {
    console.log("No existe el usuario");
    return false;
  }
};

const get = async (username, password) => {
  try {
    const user = await userService.get(username, password);
    return user;
  } catch (e) {
    console.log("No existe el usuario");
    return;
  }
};

const save = async data => {
  try {
    await userService.save(data);
  } catch (e) {
    throw e;
  }
};

export default { exist, get, save };
