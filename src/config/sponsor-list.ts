export interface Sponsor{
    Name: string;
    Email: string;
    ImageUrl: string;
    About: string
}
export const SponsorList = {
    TitleSponsor: [
        {
            Name:'Enlight Solutions',
            Email:'test1@example.com',
            ImageUrl: './assets/images/enlight_solutions.png',
            About: 'Enlight Solutions Title Sponsor'
        }
    ],
    PlainumSponsor: [
        {
            Name:'QA Pro Limited',
            Email:'test1@example.com',
            ImageUrl: './assets/images/qa_pro_limited.jpeg',
            About: 'Platinum Sponsor 2 Platinum Sponsor'
        },
        {
            Name:'Xerone IT',
            Email:'test1@example.com',
            ImageUrl: './assets/images/xerone_it.jpg',
            About: 'Platinum Sponsor 2 Platinum Sponsor'
        }
    ],
    GoldSponsor: [
        {
            Name:'Gen Z It',
            Email:'test1@example.com',
            ImageUrl: './assets/images/gen_zit.jpg',
            About: 'Gold Sponsor 1 Gold Sponsor'
        }
    ]
}