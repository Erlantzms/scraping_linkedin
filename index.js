//  let searchProfiles = async () => {

//      for (let i = 1; i < 2; i++) {
//          await fetch(`https:www.linkedin.com/voyager/api/graphql?variables=(start:${i}0,origin:CLUSTER_EXPANSION,query:(keywords:it%20recruiter,flagshipSearchIntent:SEARCH_SRP,queryParameters:List((key:resultType,value:List(PEOPLE)),(key:searchId,value:List(dd60db97-194f-4508-ac7a-91027a6eed16))),includeFiltersInResponse:false))&&queryId=voyagerSearchDashClusters.a789a8e572711844816fa31872de1e2f`, {
//          headers: {
//              'authority': 'www.linkedin.com',
//              'accept': 'application/vnd.linkedin.normalized+json+2.1',
//              'accept-language': 'en-US,en;q=0.9,es;q=0.8',
//              'cookie': 'bcookie="v=2&76727612-fdbc-4107-8b5e-9a80842c1ee3"; bscookie="v=1&2023071307244303bebc92-cccf-4e7e-85bb-03b97e7b93c6AQGq1FKbQfs7Lm6KhxTkcJd8MFWLJbRF"; li_at=AQEDARCffQUEh8WAAAABiU4jZzwAAAGJci_rPE4Aefx81HGeS23iq5mNS3Li5yF4tRTQDyxINYW_TOlqVzlUgv1RfbIkWoqLxiFKpmyWnKmlh0kC1iP8kLBqrs7IJtoc_vxx5ktk8vlFI02ItHAcs-Ws; liap=true; JSESSIONID="ajax:4286344894113175847"; fid=AQEa9eAxj7_NoQAAAYlONqiUxBipqQsehCOsCfOYt-2BOohj1JNhZg2u6Cn07VdZl71oadLeLzVFpg; timezone=Europe/Madrid; li_theme=light; li_theme_set=app; aam_uuid=83169359972011386344285896844331201458; li_gc=MTswOzE2ODkyMzQzNzc7MjswMjGGBzfKMpjh+6LvtKuPnI9Vry4KDxYr9Xh2IG57PbVsJQ==; _gcl_au=1.1.1376634602.1689266805; li_sugr=cd234069-7ab7-42f4-a2f6-9267abd5ca4d; lang=v=2&lang=es-es; UserMatchHistory=AQJ5olJiNZiYPAAAAYljYeooSDeTd4vPK4RGKAJ4imSe6HGBqxZ69ci2fSYPyJgJMgN4HzjVF2MYCA; AnalyticsSyncHistory=AQJXfpEw59LodAAAAYljYeoo_s6onSldSm2imvs2ChdBSFGs0rjbAo_ttn9tZB0yGpssjAYNCNX7PrRbCgKKGQ; lms_ads=AQEpWoelgvmf2wAAAYljYeqwXrqGBsr2oAwlAcERAGKbGE7rqUM-Ob1k-r8lO3q4EmBed6Jc8PF2GmJPhGj2_7hTPD617TLz; lms_analytics=AQEa7SaQW1TplAAAAYljYeqwpltxm3usV8GqvGgg-cwDq3XVD3IRLodklSSu-UeedLzYlCX3k1dfvXYzMzwUc1GmrjP0EyrV; sdsc=22%3A1%2C1689589377157%7EJAPP%2C0rUEDxnuEF3m0OgaeApC90CnZyPA%3D; lidc="b=VB85:s=V:r=V:a=V:p=V:g=4768:u=552:x=1:i=1689590106:t=1689670309:v=2:sig=AQHnu9uHl1lxNtWliIv1YNOojhTapfl7"; li_mc=MTsyMTsxNjg5NTkwMjY3OzI7MDIxLxDn6/selVi1FR2K/rHnh9SUSFn9YQqH625V7K/EP6o=; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19556%7CMCMID%7C83329589582123294734302555319321935993%7CMCAAMLH-1690195612%7C6%7CMCAAMB-1690195612%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1689598012s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C1136748357',
//              'csrf-token': 'ajax:4286344894113175847',
//              'referer': 'https:www.linkedin.com/search/results/all/?keywords=it%20recruiter&origin=AUTO_COMPLETE&searchId=4bb53f86-444d-4afe-980b-4f2c684a5e97&sid=Wc7',
//              'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
//              'sec-ch-ua-mobile': '?0',
//              'sec-ch-ua-platform': '"Windows"',
//              'sec-fetch-dest': 'empty',
//              'sec-fetch-mode': 'cors',
//              'sec-fetch-site': 'same-origin',
//              'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
//              'x-li-lang': 'es_ES',
//              'x-li-page-instance': 'urn:li:page:d_flagship3_search_srp_people;oAtYk0vrTcuYnYKzpvM9sQ==',
//              'x-li-track': '{"clientVersion":"1.12.9365","mpVersion":"1.12.9365","osName":"web","timezoneOffset":2,"timezone":"Europe/Madrid","deviceFormFactor":"DESKTOP","mpName":"voyager-web","displayDensity":1.25,"displayWidth":1920,"displayHeight":1080}',
//              'x-restli-protocol-version': '2.0.0'
//          }
//          })
//          .then(res => res.json())
//          .then((data) => {
//              let url = "";
//              let start = undefined;
//              for (let j = 0; j < data.included.length; j++) {
//                  if(!!data.included[j].navigationUrl){
//                      url = data.included[j].navigationUrl;
//                      console.log(data.included[j].title.text + "- PAGE" + i)
//                      start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
//                      require('child_process').exec(start + ' ' + url);
//                  }
//              }
//          })
//          }
//  }

//  searchProfiles()

const { writeCsv, readCsv } = require("./helpers/csv_helpers");
const { cleanId, stringToDate } = require("./helpers/helpers");

let jobOffersFetched = [];
let existingJobOffers = [];
let jobsListLenght = 0

let url= 'https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-169&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_OTHER_ENTRY,keywords:Desarrollador%20de%20front-end,locationUnion:(geoId:105646813),selectedFilters:(sortBy:List(DD)),spellCorrectionEnabled:true)&start=0'
let headers = {
    'authority': 'www.linkedin.com',
    'accept': 'application/vnd.linkedin.normalized+json+2.1',
    'accept-language': 'en-US,en;q=0.9,es;q=0.8',
    'cookie': 'bcookie="v=2&76727612-fdbc-4107-8b5e-9a80842c1ee3"; bscookie="v=1&2023071307244303bebc92-cccf-4e7e-85bb-03b97e7b93c6AQGq1FKbQfs7Lm6KhxTkcJd8MFWLJbRF"; li_at=AQEDARCffQUEh8WAAAABiU4jZzwAAAGJci_rPE4Aefx81HGeS23iq5mNS3Li5yF4tRTQDyxINYW_TOlqVzlUgv1RfbIkWoqLxiFKpmyWnKmlh0kC1iP8kLBqrs7IJtoc_vxx5ktk8vlFI02ItHAcs-Ws; liap=true; JSESSIONID="ajax:4286344894113175847"; fid=AQEa9eAxj7_NoQAAAYlONqiUxBipqQsehCOsCfOYt-2BOohj1JNhZg2u6Cn07VdZl71oadLeLzVFpg; timezone=Europe/Madrid; li_theme=light; li_theme_set=app; aam_uuid=83169359972011386344285896844331201458; li_gc=MTswOzE2ODkyMzQzNzc7MjswMjGGBzfKMpjh+6LvtKuPnI9Vry4KDxYr9Xh2IG57PbVsJQ==; _gcl_au=1.1.1376634602.1689266805; li_sugr=cd234069-7ab7-42f4-a2f6-9267abd5ca4d; UserMatchHistory=AQJ5olJiNZiYPAAAAYljYeooSDeTd4vPK4RGKAJ4imSe6HGBqxZ69ci2fSYPyJgJMgN4HzjVF2MYCA; AnalyticsSyncHistory=AQJXfpEw59LodAAAAYljYeoo_s6onSldSm2imvs2ChdBSFGs0rjbAo_ttn9tZB0yGpssjAYNCNX7PrRbCgKKGQ; lms_ads=AQEpWoelgvmf2wAAAYljYeqwXrqGBsr2oAwlAcERAGKbGE7rqUM-Ob1k-r8lO3q4EmBed6Jc8PF2GmJPhGj2_7hTPD617TLz; lms_analytics=AQEa7SaQW1TplAAAAYljYeqwpltxm3usV8GqvGgg-cwDq3XVD3IRLodklSSu-UeedLzYlCX3k1dfvXYzMzwUc1GmrjP0EyrV; ln_or=eyI0MzQ2MTM3IjoiZCJ9; lang=v=2&lang=es-es; AMCVS_14215E3D5995C57C0A495C55%40AdobeOrg=1; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C19556%7CMCMID%7C83329589582123294734302555319321935993%7CMCAAMLH-1690272699%7C6%7CMCAAMB-1690272699%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1689675099s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C1136748357; li_mc=MTsyMTsxNjg5NjgwMDgwOzI7MDIxW3UKen0w1YjR8aPgw9cLr9dJH/5hdEdLtrA97tjRb+M=; sdsc=22%3A1%2C1689680547336%7EJAPP%2C0KUUDoZzV560Q9vYLnBwvRqDylxw%3D; lidc="b=VB85:s=V:r=V:a=V:p=V:g=4776:u=552:x=1:i=1689680549:t=1689751989:v=2:sig=AQHhAfiagchdQdZyb6Hh_OPRrN8oZbOF"',
    'csrf-token': 'ajax:4286344894113175847',
    'referer': 'https://www.linkedin.com/jobs/search/?keywords=React.js&refresh=true',
    'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'x-li-deco-include-micro-schema': 'true',
    'x-li-lang': 'es_ES',
    'x-li-page-instance': 'urn:li:page:d_flagship3_search_srp_jobs;+CQycqCYQhO/ImUzAIcJyw==',
    'x-li-pem-metadata': 'Voyager - Careers=jobs-search-results',
    'x-li-track': '{"clientVersion":"1.12.9422","mpVersion":"1.12.9422","osName":"web","timezoneOffset":2,"timezone":"Europe/Madrid","deviceFormFactor":"DESKTOP","mpName":"voyager-web","displayDensity":1.25,"displayWidth":1920,"displayHeight":1080}',
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

let getNumberOfPages = async () => {
    await fetch(url, {
        headers: headers
    })
    .then(res => res.json())
    .then((data) => {
        console.log("DATA IS" + data)
        return data
    })
}

const writeJobs = async () => {
    const numberOfPages = await getNumberOfPages();
    console.log("NUMBER IS" + numberOfPages)
    let start = 0
    for (let j = 0; j < 25; j++) {
        start = (j+1)*25
        url = `https://www.linkedin.com/voyager/api/voyagerJobsDashJobCards?decorationId=com.linkedin.voyager.dash.deco.jobs.search.JobSearchCardsCollection-169&count=25&q=jobSearch&query=(origin:JOB_SEARCH_PAGE_OTHER_ENTRY,keywords:Desarrollador%20de%20front-end,locationUnion:(geoId:105646813),selectedFilters:(sortBy:List(DD)),spellCorrectionEnabled:true)&start=${start}`
        console.log(url)
        await searchJobs(url);
    }
    existingJobOffers = await readCsv();
    const uniqueObjects = jobOffersFetched.filter(item1 => !existingJobOffers.some(item2 => item1.jobTitle === item2.jobTitle));
    writeCsv(uniqueObjects);
}
  
writeJobs();