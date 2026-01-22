import neighbourhoodTrust from '../assets/neighbourhood-trust.png';
import nationalLottery from '../assets/lottery-fund.png';
import sovereignHealth from '../assets/sovereign-health.jpg';
import wharfedaleFoundation from '../assets/wharfedale-foundation.jpeg';    
import type {SponsorInterface} from '../Utils/Types.ts';

export const SponsorData: SponsorInterface[] = [
    {
        name: 'The Wharfedale Foundation',
        logo: wharfedaleFoundation,
        url: 'https://www.wharfedalefoundation.org.uk/',
    },
    {
        name: 'The National Lottery Community Fund',
        logo: nationalLottery,
        url: 'https://www.tnlcommunityfund.org.uk/',
    },
    {
        name: 'Sovereign Health',
        logo: sovereignHealth,
        url: 'https://www.sovereignhealthcare.co.uk/about/community-programme/',
    },
    {
        name: 'The Neighbourhood Trust',
        logo: neighbourhoodTrust,
        url: 'https://www.postcodeneighbourhoodtrust.org.uk/',
    },
];