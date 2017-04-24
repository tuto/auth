import jwt from 'jwt-simple';
import moment from 'moment';
import config from '../config/environment';

const createToken = user => {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

export default { createToken };
