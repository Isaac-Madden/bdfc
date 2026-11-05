import nationalLottery from '../assets/lottery-fund.png';
import sovereignHealth from '../assets/sovereign-health.jpg';
import wharfedaleFoundation from '../assets/wharfedale-foundation.jpeg';
import sported from '../assets/sported.png';
import type {SponsorInterface} from '../Utils/Types.ts';

export const SponsorData: SponsorInterface[] = [
    {
        name: 'The National Lottery Community Fund',
        logo: nationalLottery,
        url: 'https://www.tnlcommunityfund.org.uk/',
    },
    {
        name: 'The Wharfedale Foundation',
        logo: wharfedaleFoundation,
        url: 'https://www.wharfedalefoundation.org.uk/',
    },
    {
        name: 'Sovereign Health',
        logo: sovereignHealth,
        url: 'https://www.sovereignhealthcare.co.uk/about/community-programme/',
    },
    {
        name: 'Sported',
        logo: sported,
        url: 'https://www.sported.org.uk/',
    }
];