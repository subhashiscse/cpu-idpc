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
            ImageUrl: './assets/images/sponsor.jpg',
            About: 'Enlight Solutions Title Sponsor'
        }
    ],
    PlainumSponsor: [
        {
            Name:'Platinum Sposor 1',
            Email:'test1@example.com',
            ImageUrl: './assets/images/sponsor.jpg',
            About: 'Platinum Sponsor 2 Platinum Sponsor'
        },
        {
            Name:'Platinum Sponsor 2',
            Email:'test1@example.com',
            ImageUrl: './assets/images/sponsor.jpg',
            About: 'Platinum Sponsor 2 Platinum Sponsor'
        }
    ],
    GoldSponsor: [
        {
            Name:'Gold Sponsor 1',
            Email:'test1@example.com',
            ImageUrl: './assets/images/sponsor.jpg',
            About: 'Gold Sponsor 1 Gold Sponsor'
        }
    ]
}