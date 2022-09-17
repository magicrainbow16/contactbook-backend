const express = require ('express');
const cors = require ('cors');
const ApiError = require('./api-error');

const app = express();

app.route('/api/contact/:id')
    .get(contactController.findOne)
    .port(contactController.update)
    .delete(contactController.delete);

app.use((req, res, next) => {
    return next(new ApiError(404, 'Resourse not found'));
});
app.use((error, req, res, next) =>{
    return res.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error',
    });
});
app.use(cors());
app.use(express.json());

const contactController = require('./controllers/contact.controller');

app.get('/', (req, res) =>{
    res.json({message: 'Welcome to contack book application.' });

});
app.route('/api/contacts')
    .get(contactController.findAll)
    .port(contactController.create)
    .delete(contactController.deleteAll);

app.route('/api/contacts/favorite').get(contactController.finAllFavorite);

app.route('/api/contact/favorite/:id')
    .get(contactController.findOne)
    .put(contactController.update)
    .delete(contactController.delete);

module.exports =app;