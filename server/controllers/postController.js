// Root get route
exports.home = (req, res) => {
    try {
        res.status(200).json({
            status: 'Success',
            message: '/posts root route',
            data: 'posts / get route'
        });
    } catch(err) {
        console.error(`Error: ${err}`);
    }
};