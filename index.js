const { writeCsv, readCsv } = require("./helpers/csv_helpers");
const { cleanId, stringToDate, orderByDate } = require("./helpers/helpers");


let jobOffersFetched = [];
let existingJobOffers = [];
const filename = 'output.xlsx'

let jobName = ""
const headers = {
    'authority': 'www.linkedin.com',
    'accept': 'application/vnd.linkedin.normalized+json+2.1',
    'accept-language': 'en-US,en;q=0.9,es;q=0.8',
    'cookie': 'bcookie="v=2&296117d2-c568-46bd-8f2a-abcc5a9b92f1"; bscookie="v=1&20230806110517b5d21803-ff06-47af-82d9-3f1cf95d35a5AQEcXho_DbGU6XRw3aOjG4DZM5s4_Tr_"; li_alerts=e30=; li_gc=MTsyMTsxNjkxMzE5OTI4OzI7MDIxgQRxGcnFrP1O+fOc/DsAHkEqhRcrGME9AYdgXfD04o0=; fid=AQHMQ5leJvgJSQAAAYnKhi98uwgE2yINELDgXB8bKkfJDRh9iVNGPabPwOwX2lhBhsvvIB-TUiht6g; fcookie=AQE1akIWgZuUGwAAAYnKhmZG7NRrLaJ9nwHQ4tCDuETw00wuh66QW8g2OMIrRl3OiuTydcZUNVXu0dz1VevI0leWKW_k8K2wX4gUP-Zue8t-A8a6jBbf4q5tSVF_yjjqVKjl80WrNiljNTtE_SpqEBqlMHZLMqE2f_t2QOrDeRCznJ963vL5ntFmby-rlLF1AviANjg4fMnBM3ROYcUgwTC5wcqshxjxOGIAv4_fAhEkrcKUnw0esltGd5XPLeKm1msJd00J1-PED_xbeJNgBFNRcpwi_2m1YDRXNMyNvyy/eW52bJDkzcn/QZF7+7D/RslYrzggjHJOKF6sWxLRj7CSUH1oydbmK2M1AyoCEkaPD9lqd08KAQ==; JSESSIONID="ajax:6609962440884506490"; timezone=Europe/Madrid; li_theme=light; li_theme_set=app; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; aam_uuid=07716286014839390524320177903794645206; _gcl_au=1.1.2128369243.1691319968; li_sugr=689cd97c-a745-46bc-acdd-b643c25de54d; UserMatchHistory=AQLBtCQiwLJyBwAAAYnKhqLkaND452okuy1vEf8v6bOcMO8aQ9scME6oUfWiqZelB_1RmS8xOxBzyg; AnalyticsSyncHistory=AQJdBOTNVTcJTwAAAYnKhqLkRU1jYJwqbOYGwNqy5kExMEx6I1SlfUPsa1tGVAs2afoK9K5wJvtURgwKEDNjfg; lms_ads=AQFJQSxhLjccpAAAAYnKhqPMQYLHNm13b-l6B5vTFp5rOO8EzxIQ36k1mSKOgARO4M_cZ2EXRRu6-uwNhNfCJtS4J6eM8DUA; lms_analytics=AQFJQSxhLjccpAAAAYnKhqPMQYLHNm13b-l6B5vTFp5rOO8EzxIQ36k1mSKOgARO4M_cZ2EXRRu6-uwNhNfCJtS4J6eM8DUA; PLAY_SESSION=eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImZsb3dUcmFja2luZ0lkIjoieUw3cHBqdkhTcXlLMjhlNHQvQUI5QT09In0sIm5iZiI6MTY5MTM5NDk0MCwiaWF0IjoxNjkxMzk0OTQwfQ.M8qFvUV3ZA1pBslpVjBFkH8KRsMBECgRGTfWW7HOTuk; li_at=AQEDARCffQUCh4gjAAABic7-vqwAAAGJ8wtCrE0AZWTtRhdA_4_Kq--W6uI3LrxQ7ja65Da2Dd8GcUk0srNWSj8rJjxqvnby90kIWGP69MTT0yaiEjMlY4V3yDt-LFSic6bll7E6Hc_duV0xpiNSmbmn; liap=true; lang=v=2&lang=es-es; lidc="b=VB85:s=V:r=V:a=V:p=V:g=4883:u=560:x=1:i=1691399731:t=1691435833:v=2:sig=AQFdIfn0Bzy_j0i7hV4SiWcej25z_upL"; li_mc=MTsyMTsxNjkxNDA3OTc3OzI7MDIxLcZwoA3qcowOKJWzFSrjsUi3k7b0vzO+VXD9qD3EOEw=; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19576%7CMCMID%7C07550029005729134474268134636914809629%7CMCAAMLH-1692012980%7C6%7CMCAAMB-1692012980%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1691415380s%7CNONE%7CMCCIDH%7C1136748357%7CvVersion%7C5.1.1; sdsc=22%3A1%2C1691408243933%7EJAPP%2C0Pccaw7ZxOzjybqbufh8NZiEKuZk%3D',
    'csrf-token': 'ajax:6609962440884506490',
    'referer': 'https://www.linkedin.com/jobs/search/?currentJobId=3664415585&f_WT=2&geoId=105646813&keywords=React.js&location=Espa%C3%B1a&refresh=true&sortBy=DD',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'x-li-lang': 'es_ES',
    'x-li-page-instance': 'urn:li:page:d_flagship3_search_srp_jobs;8PyCt/OdQaaNmQ4IY+yu9Q==',
    'x-li-pem-metadata': 'Voyager - Careers=jobs-search-results-prefetch',
    'x-li-prefetch': '1',
    'x-li-track': '{"clientVersion":"1.13.632","mpVersion":"1.13.632","osName":"web","timezoneOffset":2,"timezone":"Europe/Madrid","deviceFormFactor":"DESKTOP","mpName":"voyager-web","displayDensity":1.125,"displayWidth":1728,"displayHeight":972}',
    'x-restli-protocol-version': '2.0.0'
  }

let searchJobs = async (url) => {
    await fetch(url, {
        headers: headers
    })
        .then(res => res.json())
        .then((data) => {
            for (let i = 0; i < data.included.length; i++) {
                if (data.included[i].jobPostingTitle) {
                    let jobId = cleanId(data.included[i].jobPostingUrn);
                    let jobTitle = data.included[i].jobPostingTitle;
                    let companyName = data.included[i].primaryDescription.text;
                    let typeOfOffer = data.included[i].footerItems[0]?.type;
                    let isRemote = (data.included[i].secondaryDescription.text).includes("remoto");
                    let publicationData = data.included[i].secondaryActionsV2[0].dismissJobAction.followUpFeedbackReasons[2].text;

                    jobOffersFetched.push({
                        id: jobId,
                        jobTitle: jobTitle,
                        company: companyName,
                        type: typeOfOffer,
                        remote: isRemote,
                        link: `https://www.linkedin.com/jobs/view/${jobId}`,
                        publicationData: stringToDate(publicationData)
                    })
                }
            }
        })
}

let getNumberOfResults = async (jobName) => {
    const res = await fetch(`https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-169&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_OTHER_ENTRY,keywords:${jobName},locationUnion:(geoId:105646813),selectedFilters:(distance:List(25)),spellCorrectionEnabled:true)&start=25`, {
        headers: headers
    });

    const data = await res.json();
    return data.data.paging;
}

const getUniqueObjectsById = (jobOffers) => {
    const uniqueObjects = jobOffers.reduce((uniqueArr, obj) => {
        const existingObject = uniqueArr.find((item) => item.id === obj.id);
        if (!existingObject) {
            uniqueArr.push(obj);
        }
        return uniqueArr;
    }, []);

    return uniqueObjects;
}

const writeJobs = async (jobname) => {
    jobName = jobname.replaceAll(" ", "%20");
    const numberOfResults = await getNumberOfResults(jobName);
    const numberOfPages = (Math.ceil(numberOfResults.total / numberOfResults.count));

    for (let j = 0; j < numberOfPages; j++) {
        console.log(`page ${j}`)
        let start = (j + 1) * numberOfResults.count;
        let url = `https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-169&count=100&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_SEARCH_BUTTON,keywords:${jobName},locationUnion:(geoId:105646813),spellCorrectionEnabled:true)&start=${start}`
        await searchJobs(url);
    }
    existingJobOffers = await readCsv(filename);
    jobOffersFetched.concat(existingJobOffers)
    const uniqueObjects = getUniqueObjectsById(jobOffersFetched)
    writeCsv(uniqueObjects.sort(orderByDate).reverse(), filename);
}



const jobKeys = ["React.js", "JavaScript", "Desarrollador de front-end", "Desarrollo Full Stack", "frontend"]

const processJobs = async () => {
    const promises = jobKeys.map(async (jobKey) => {
        console.log(`Searching results for "${jobKey}"...`);
        await writeJobs(jobKey);
        console.log("...");
    });

    await Promise.all(promises);
};

processJobs();

console.log("test")