export interface SeminarMember{
    Name: string;
    Email: string;
    Designation: string;
    FocusArea: string;
    ImageUrl: string;
    SpecialistOn: string;
}
export const SeminarSpeakerMemberList: SeminarMember[] = [
    {
        Name:'Md. Jahangir Alam',
        Email:'',
        Designation: 'Managing Director, QA Pro Limited  | Chair, OWASP Bangladesh Chapter',
        SpecialistOn: 'OSCP, CISA, PCI QSA',
        FocusArea: "Navigating Cybersecurity: Current Threats and Future Trends",
        ImageUrl: './assets/images/jahangir_vai.png'
    },
    {
        Name:'Md. Shirajul Islam Mamun',
        Email:'',
        Designation: 'CEO & Founder, Enlight Solutions',
        SpecialistOn: 'Professional .NET Consultant',
        FocusArea: 'Empowering Your Tech Journey: Strategies For Success',
        ImageUrl: './assets/images/mamun_vai.png'
    }
]