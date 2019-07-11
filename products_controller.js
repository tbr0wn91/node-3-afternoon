
module.exports = {
    create: (req, res, next) => {
        console.log("create endpoint hit")
        const dbInstance = req.app.get('db');
        const { name, description, price, image_url} = req.body;

        dbInstance.create_product([ name, description, price, image_url ])
        .then( () => res.sendStatus(200) )
        .catch(err => {
            res.Status(500).send({errorMessage: "WRONG!"});
            console.log(err)
        });
    },

    getOne: (req, res, next) => {
        console.log("getone endpoint hit")
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.read_product(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.Status(500).send({errorMessage: "WRONG!!"});
            console.log(err)
        });
    },

    getAll: (req, res, next) => {
        console.log("getall endpoint hit")
        const dbInstance = req.app.get('db');

        dbInstance.read_products()
        .then( (products) => res.status(200).send(products) )
        .catch(err => {
            res.Status(500).send({errorMessage: "WRONG!!!" });
            console.log(err)
        });
    },

    update: (req, res, next) => {
        console.log("update endpoint hit")
        const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([params.id, query.desc])
        .then( (product) => res.send(product))
        .catch(err => {
            res.Status(500).send({errorMessage: "WRONG!!!!"});
            console.log(err)
        });
    },

    delete: (req, res, next) => {
        console.log("delete endpoint hit")
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.delete_product(id)
        .then( (product) => res.send(product))
        .catch(err => {
            res.Status(500).send({errorMessage: "WRONG!!!!!"});
            console.log(err)
        });
    }
};