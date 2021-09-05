import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers.authorization;
  token = token.split(" ")[1];
  const isCustomToken = token.length < 500;

  if (!token) {
    return res.status(403).json({message: "A token is required for authentication"});
  }

  try {
    if (token && isCustomToken) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
    } else {
      const decoded = jwt.decode(token);
      req.userId = decoded.sub;
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({message: "Invalid Token"});
  }
  return next();
};

export default verifyToken;
