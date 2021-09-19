import fetch from 'node-fetch';

async function getcampaigns() {
    const response = await fetch(
        "https://testapi.donatekart.com/api/campaign?sort_by=totalAmount&order=desc"
    );
    let data = await response.json();
    let { title, totalAmount, backersCount, endDate } = data;
    return {
        title, totalAmount, backersCount, endDate
    }
}
getcampaigns();



