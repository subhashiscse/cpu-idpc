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
            About: "<p>Xerone IT is a Software company specializing in innovative software solutions for businesses. Known for its expertise in chatbot development, Xerone IT offers various chatbot builders like BotSailor and ChatPion, utilizing a powerful Visual Drag-and-Drop Flow Builder that enables users to create dynamic and engaging chatbots effortlessly.</p><p>Catering to both expert marketers and beginners, Xerone IT's tools are designed to enhance customer engagement and streamline business processes. With a commitment to user-friendly interfaces and cutting-edge technology, Xerone IT empowers businesses to harness the power of automation and artificial intelligence, driving efficiency and improving customer interactions.Their solutions are trusted by clients worldwide for their reliability and effectiveness.</p>"        
        }
    ],
    GoldSponsor: [
        {
            Name:'Gen Z It',
            Email:'test1@example.com',
            ImageUrl: './assets/images/gen_zit.jpg',
            About: 'Gen-Z IT is committed to providing individuals with essential digital skills, such as Digital Marketing, Content Writing, Graphic Design, Web Design, and Database Management. Our unique management integrates practical training with guaranteed freelance work and internship opportunities. We allow learners to start their careers from home immediately after completing their courses.'
        }
    ]
}