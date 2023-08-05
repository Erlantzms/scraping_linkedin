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
    'cookie': 'bcookie="v=2&76727612-fdbc-4107-8b5e-9a80842c1ee3"; bscookie="v=1&2023071307244303bebc92-cccf-4e7e-85bb-03b97e7b93c6AQGq1FKbQfs7Lm6KhxTkcJd8MFWLJbRF"; timezone=Europe/Madrid; li_theme=light; li_theme_set=app; aam_uuid=83169359972011386344285896844331201458; _gcl_au=1.1.1376634602.1689266805; li_sugr=cd234069-7ab7-42f4-a2f6-9267abd5ca4d; UserMatchHistory=AQJPcUhLG-Xf0QAAAYmwg1l1DTjbwxn77CP1zGmj0Uy4ygm78WIVej-aZkcc1QRHeuwUQGk4B_bZow; AnalyticsSyncHistory=AQJCueth9wRvkwAAAYmwg1l1YxRc7rr2eMUwJmYjrmSOJKFULHWv1ulI41GxOiKxBlwG3O6gCu2d7gf6VZQRlw; lms_ads=AQHAEDHo91l5HwAAAYmwg1p-F6DFYc9MX6A_5PPa5_9xoTwyXoOYMJewYXvpOw6i3iVQwhvbwnLEgsFjlAqypG2PywA5yIHS; lms_analytics=AQHAEDHo91l5HwAAAYmwg1p-F6DFYc9MX6A_5PPa5_9xoTwyXoOYMJewYXvpOw6i3iVQwhvbwnLEgsFjlAqypG2PywA5yIHS; li_alerts=e30=; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19573%7CMCMID%7C83329589582123294734302555319321935993%7CMCAAMLH-1691744075%7C6%7CMCAAMB-1691744075%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1691146475s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C1136748357; ln_or=eyI0MzQ2MTM3IjoiZCJ9; li_rm=AQEdb8mQKdkMFgAAAYm_175GqbO9-_dWyKrOP_y_-2RD9Pu0j66bvr59yXblmdqz4fZE-CyiWnspkwM7mrnQK1FoTOWLO3tugy-bU8i8A9Hw-oMeTKDKBtCH614KQydcTYPGVV9t03Sx6EU-cHGRQcSiEOz643-RzEn8dmR0885Wd22wv9cYYmEa2OBxLIizWoM-BnK6PMaV6aAjilNCxYzHSl2CyxMAwhKdt04ad1v28geqwV9aZzljUjewENwYTxXsbuDFOk5P6gXkBtOOSAteC59s-FGtGigkHkVskQV_9ceCXEA-ZoegNiaquw9XvsEJGqF-jXnQJs8_5Rc; li_g_recent_logout=v=1&true; visit=v=1&M; JSESSIONID="ajax:0854168473372495057"; li_gc=MTsyMTsxNjkxMTQwNzQxOzI7MDIxJVLIRRer9XY79r+kOcv6QRyIz3aEwMDlJGwpm6V2sK8=; liap=true; li_at=AQEDARCffQUC9AZvAAABib_YbzYAAAGJ4-TzNk0AxvzhHGnGi9x3fu3ivP4o02q-vSE0sbXbbXUwvJXEJYI7E7l3NB1vROic5F0lpT1cxD93vo-6NmzvLrOjJZXTPnKt-z-BOsaJn9DuulEYyq7OAdBb; lang=v=2&lang=es-es; li_mc=MTsyMTsxNjkxMTQxNjg0OzI7MDIx1S04uYIjqoI4+jfGPKzdKjp2OWaD+CaoaOup/vgfwck=; g_state={"i_p":1691228135096,"i_l":2}; lidc="b=VB85:s=V:r=V:a=V:p=V:g=4873:u=560:x=1:i=1691141745:t=1691178430:v=2:sig=AQGeOdh-VYQiu1vsWJHmo5u39oURm7-z"; sdsc=22%3A1%2C1691141772193%7EJAPP%2C0rdDu4%2FQJgrjMyEF3P%2Bz9El7gU2s%3D',
    'csrf-token': 'ajax:0854168473372495057',
    'referer': 'https://www.linkedin.com/jobs/search/?currentJobId=3660125711&distance=25&geoId=105646813&keywords=React.js',
    'sec-ch-ua': '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'x-li-lang': 'es_ES',
    'x-li-page-instance': 'urn:li:page:d_flagship3_search_srp_jobs;yPMTV9PxQV64Vgnm0Im7Kg==',
    'x-li-pem-metadata': 'Voyager - Careers=jobs-search-results-prefetch',
    'x-li-prefetch': '1',
    'x-li-track': '{"clientVersion":"1.13.521","mpVersion":"1.13.521","osName":"web","timezoneOffset":2,"timezone":"Europe/Madrid","deviceFormFactor":"DESKTOP","mpName":"voyager-web","displayDensity":1.125,"displayWidth":1728,"displayHeight":972}',
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
    const numberOfPages = (Math.ceil(numberOfResults.total/numberOfResults.count));

    for (let j = 0; j < 9; j++) {
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
    for (let a = 0; a < jobKeys.length; a++) {
        console.log(`Searching results for "${jobKeys[a]}"...`);
        await writeJobs(jobKeys[a]);
        console.log("...");
    }
};

processJobs();