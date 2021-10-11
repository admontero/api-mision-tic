const User = require('../models/User');

exports.read = async (req, res) => {
    const id = req.params.id;
    const filter = {};

    try {
        //Cuando se pase como parametro el id
        if (id) {
            filter._id = id;
            const result = await User.find(filter);
            return res.json(result);
        } else {
            const users = await User.find(filter);

            //Retorna todos los usuarios
            return res.send({
                status: 'OK',
                count: users.length,
                users: users 
            });
        }


    } catch (error) {
        console.log(error);
        res.status(500).send('Error desde el servidor');
    }
};