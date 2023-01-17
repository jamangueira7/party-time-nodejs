const mongoose = require('mongoose');

async function main() {
    try {

        mongoose.set('strictQuery', true);
        await mongoose.connect(
            "mongodb+srv://jamangueira7:3mynvQUActnIKwro@cluster0.391f6f4.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log('Conectado ao banco!');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;