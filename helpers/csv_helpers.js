const fs = require('fs');
const path = require('path');

const writeCsv = async (jobOffers,fileName) => {
    const jobsToList = [];
    jobOffers.forEach((jobOffer) => jobsToList.push(Object.values(jobOffer)))
    const listContent = "id,jobTitle,company,type,remote,link,publication\n" + jobsToList.map(row => row.join(",")).join("\n");
    await fs.writeFile(fileName, listContent, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been successfully written!');
    }
    });
}

const readCsv = async (fileName) => {
    let data = ""
    fs.readdir(".", async (err, files) => {
        if (err) {
            console.log("incluyeeeeee")
          console.log(err);
        } else {
            if (files.includes(fileName)) {
                data = await fs.promises.readFile(`./${fileName}`, { encoding: 'utf8' });  
            } else {
                console.log(1111)
                await fs.promises.writeFile(`./${fileName}`, "", () => {});
                console.log(22222)
                data = await fs.promises.readFile(`./${fileName}`, { encoding: 'utf8' });  
            }
        }
    })
      
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