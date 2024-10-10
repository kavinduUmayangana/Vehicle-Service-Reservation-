const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = auth;
const passport = require('passport');
const OpenIDConnectStrategy = require('passport-openidconnect').Strategy;

passport.use(new OpenIDConnectStrategy({
    issuer: 'https://your-idp.com',
    clientID: 'your-client-id',
    clientSecret: 'your-client-secret',
    callbackURL: '/auth/callback'
  },
  function(issuer, sub, profile, accessToken, refreshToken, done) {
    return done(null, profile);
  }
));

app.get('/auth/login', passport.authenticate('openidconnect'));

app.get('/auth/callback', passport.authenticate('openidconnect', {
  failureRedirect: '/login'
}), function(req, res) {
  res.redirect('/');
});
