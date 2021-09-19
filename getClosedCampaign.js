import fetch from 'node-fetch';

async function getclosedcampaigns() {
    const response = await fetch(
        "https://testapi.donatekart.com/api/campaign"
    );
    let data = await response.json();
    let today = new Date();
    let closedcompaign = JSON.parse(data).data.filter(data.endDate < today || data.procuredAmount >= data.totalAmount)
    console.log(closedcompaign);
    return closedcompaign
}

getclosedcampaigns();