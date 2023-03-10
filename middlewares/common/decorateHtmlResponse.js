const decorateHtmlResponse = (title_name) => (req, res, next) => {
    res.locals.html = true;
    res.locals.title = `${title_name} - chat application`;
    res.locals.data = {};
    res.locals.errors = {};
    res.locals.loggedInUser = {};
    next();
};

module.exports = decorateHtmlResponse;
