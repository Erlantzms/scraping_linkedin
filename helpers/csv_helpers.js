const fs = require('fs');

const writeCsv = async (jobOffers) => {
    const jobsToList = [];
    jobOffers.forEach((jobOffer) => jobsToList.push(Object.values(jobOffer)))
    const csvContent = "id,jobTitle,company,type,remote,link,publication\n" + jobsToList.map(row => row.join(",")).join("\n");
    await fs.appendFile('output.csv', csvContent, (err) => {
    if (err) {
        console.error('Error writing CSV file:', err);
    } else {
        console.log('CSV file has been successfully written!');
    }
    });
}

const readCsv = async () => {
    const data = await fs.promises.readFile('./output.csv', { encoding: 'utf8' });
    const lines = data.split('\n').map(line => line.trim());

    const header = lines[0].split(',');
    const jobOffers = lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};
        header.forEach((key, index) => {
            obj[key] = values[index];
        });
        return obj
    });

    return jobOffers;
}

module.exports = {
    writeCsv: writeCsv,
    readCsv: readCsv
}