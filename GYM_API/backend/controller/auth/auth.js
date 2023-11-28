const express = require('express');
const session = require('express-session');

const db = require('../../services/db');
const router = express.Router();
const cors = require('cors');

const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

// Add express-session middleware
router.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));


// Configure Passport.js
router.use(passport.initialize());
router.use(passport.session());

// Configure the LocalStrategy
// Without JWT
passport.use('login', new LocalStrategy(
    {
        usernameField: 'user_handle',
        passwordField: 'password',
    },
    async (username, password, done) => {
        try {
            const sql = `SELECT user_handle, password_hash FROM users WHERE user_handle = ? OR email_address = ?`;
            const values = [username, username];

            const results = await db.query(sql, values);

            if (results.length === 0) {
                return done(null, false, { message: 'Invalid credentials' });
            }

            const user = results[0];
            const hashedPassword = user.password_hash;
            const passwordIsValid = await bcrypt.compare(password, hashedPassword);

            if (!passwordIsValid) {
                return done(null, false, { message: 'Invalid credentials' });
            }

            return done(null, user);
        } catch (error) {
            console.error(`Error while querying DB for login`, error.message);
            return done(error);
        }
    }
));

// Serialize user into session
// Without JWT
passport.serializeUser((user, done) => {
    done(null, user.user_handle);
});

// Deserialize user from session
// Without JWT
passport.deserializeUser(async (user_handle, done) => {
    try {
        // Fetch user data from the database based on the user_handle
        const sql = `SELECT * FROM users WHERE user_handle = ?`;
        const values = [user_handle];
        const results = await db.query(sql, values);

        if (results.length === 0) {
            return done(null, false);
        }
        
        // Return the user object for deserialization
        return done(null, results[0]);
    } catch (error) {
        return done(error);
    }
});

router.get('/logout', (req, res) => {
    try {
      req.logout(() =>{
        res.status(200).json({ message: 'logged out successfully' });
      });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ message: 'logout failed', error: error.message });
    }
  });
  
// WITHOUT JSON WEB TOKEN
router.post('/login', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        return next(err);
      }  
      if (!user) {
        // Authentication failed
        return res.status(401).json({ message: 'failed to log in', error: info });
      }
      // Log in the user
      req.login(user, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        // Authentication successful
        return res.status(200).json({ message: 'logged in successfully', user });
      });
    })(req, res, next);
  });
// WITH JWT
/* router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred.');
                return next(error);
            }

            // Use the 'session: false' option to disable session creation
            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                // Generate a JWT token
                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

                // Return the token in the response
                return res.json({ token });
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});
 */

router.post('/register', async(req, res, next) => {
    const sql = `INSERT INTO users(user_handle, password_hash, email_address, first_name, last_name)
    VALUES(?, ?, ?, ?, ?)`;
    const body = req.body;
    let values = []
    if(body.password !== body.confirm_password){
        res.status(400).json({msg: 'passwords are not matching'});
    }else{
        const user = body.user_handle;
        const first_name = body.first_name;
        const last_name = body.last_name;
        const email_address = body.email_address;
        const hash = await bcrypt.hash(body.password, 12);
        //(user_handle, password_hash, email_address, first_name, last_name)
        values.push(user, hash,email_address, first_name, last_name)
    }
    try{
        
        const results = await db.query(sql, values);
        res.status(201).json(results);
    }catch(error){
        console.error(`Error while posting to DB`, error.message);
        res.status(500).json({msg: 'bad post'});
        next(error);
    }
})

// A middleware to check authentication status
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware or route handler
    } else {
        res.redirect('/login'); // User is not authenticated, redirect to the login page
    }
};

/* // Protected route that requires authentication
router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('<h1>dashboard</h1>'); // Render the dashboard if the user is authenticated
}); */

// Example route to check authentication status
router.get('/status', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true, user: req.user });
    } else {
        res.json({ isAuthenticated: false });
    }
});

router.get('/', (req, res, next)=>{
    res.json({msg: 'auth'})
})

module.exports = router;