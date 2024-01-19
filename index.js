const { google } = require('googleapis');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// con la ruta al archivo que contiene tus credenciales de la cuenta de servicio
const auth = new google.auth.GoogleAuth({
    keyFile: 'apikey.json',
    scopes: ['https://www.googleapis.com/auth/drive'],
});

// Inicializa el cliente de Google Drive API
const driveService = google.drive({ version: 'v3', auth });

// Funcion para obtener un numero aleatorio de la API
async function getRandomNumber() {
    try {
        const response = await axios.get('https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1');
        return response.data[0]; // Asumiendo que la API devuelve un array de numeros
    } catch (error) {
        console.error('Error al obtener un numero aleatorio:', error);
        throw error;
    }
}

// Flujo principal de ejecucion
(async () => {
    try {
        // Obtener un numero aleatorio
        const randomNumber = await getRandomNumber();
        const filename = `file-${randomNumber}.txt`;

        // Crear un archivo temporal con ese numero como nombre
        fs.writeFileSync(filename, 'Este es el contenido del archivo. -> 1284719 -> 1307419');
        
    } catch (error) {
        console.error('Error en el flujo principal:', error);
    }
})();
