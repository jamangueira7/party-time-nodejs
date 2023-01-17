const PartyModel = require('../models/Party');

const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0);

    if (priceSum > budget) {
        return false;
    }

    return true;
};

const partyController = {
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services,
            };

            if(party.services && !checkPartyBudget(party.budget, party.services)) {
                res.status(406).json({msg: 'O seu orçamento é insuficiente!' });
                return;
            }
            const response = await PartyModel.create(party);

            res.status(201).json({ response, msg: 'Festa criada com sucesso!' });
        } catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const services = await ServiceModel.find();

            res.json(services);
        } catch (error) {
            console.log(error);
        }
    },

    get: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if(!service) {
                res.status(404).json({ msg: 'Serviço não encontrado.' });
                return;
            }

            res.json(service);
        } catch (error) {
            console.log(error);
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const service = await ServiceModel.findById(id);

            if(!service) {
                res.status(404).json({ msg: 'Serviço não encontrado.' });
                return;
            }

            const deletedService = await ServiceModel.findByIdAndDelete(id);

            res.status(200).json({ deletedService, msg: 'Serviço excluído com sucesso!' });

        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {

            const id = req.params.id;

            const service = {
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            };


            const updatedService = await ServiceModel.findByIdAndUpdate(id, service);

            if(!service) {
                res.status(404).json({ msg: 'Serviço não encontrado.' });
                return;
            }

            res.status(200).json({ service, msg: 'Serviço atualizado com sucesso!' });

        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = partyController;