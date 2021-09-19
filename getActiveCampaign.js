import fetch from 'node-fetch';

async function getactivecampaigns() {
    const response = await fetch(
        "https://testapi.donatekart.com/api/campaign"
    );
    let [data] = await response.json();
    let today = new Date();
    let activecompaign = JSON.parse(data).data.filter(data.endDate >= today)
    console.log(activecompaign);
    return activecompaign
}

getactivecampaigns();