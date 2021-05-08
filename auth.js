const db = require('./db/models');
// const pixel_user = require('./db/models/pixel_user');

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id, //is this the userId referenced below?
    };
};

const logoutUser = (req, res) => {
    delete req.session.auth;
};

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/users/login');
    }
    return next();
};

const restoreUser = async (req, res, next) => {
    // Log the session object to the console
    // to assist with debugging.

    if (req.session.auth) {
        const { userId } = req.session.auth;  //check userId

        try {
            const user = await db.Pixel_User.findByPk(userId); //check userId

            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
};

module.exports = {
    loginUser,
    logoutUser,
    requireAuth,
    restoreUser,
};
