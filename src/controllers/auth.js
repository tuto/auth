import token from "../domain/token";
import user from "../domain/user";
const signup = (req, res) => {
  if (!user.exist(req.body.email.toLowerCase(), req.body.password)) {
    try {
      user.save(req.body.email.toLowerCase(), req.body.password);
      return res.status(200).send({ token: token.generate(user) });
    } catch (e) {
      console.log("Error guardando el usuario", e);
      return res.status(500).send();
    }
  }
  return res.status(409).send();
};

const login = (req, res) => {
  const user = user.get({ email: req.body.email.toLowerCase() });
  if (user) {
    return res.status(200).send({ token: token.generate(user) });
  }
  return res.status(401).send();
};

export default { signup, login };
