export interface BeneficiaryModel {
    RegistrationDate: string;
    DocumentType: string;
    DocumentNumber: string;
    Name: string;
    LastName: string;
    BirthDate: string;
    Sex: string;
    City: string;
    Address: string;
    PhoneNumber: string;
    Nationality: string;
    FemaleBetween0_4: number;
    MaleBetween0_4: number;
    FemaleBetween5_17: number;
    MaleBetween5_17: number;
    FemaleBetween18_64: number;
    MaleBetween18_64: number;
    FemaleOver65: number;
    MaleOver65: number;
    photo?: string;
}