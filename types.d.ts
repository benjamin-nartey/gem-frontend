interface UserProps {
  _id?: string;
  name: string;
  email: string;
  role: string;
}

interface UserResponseProps {
  status: string;
  token: string;
  data: {
    user: UserProps;
  };
}

interface LoginProps {
  email: string;
  password: string;
}

enum YesNoProps {
  yes = "yes",
  no = "no",
}

enum Sex {
  male = "male",
  female = "female",
}

// enum Day {
//   sunday = "SUNDAY",
//   monday = "MONDAY",
//   tuesday = "TUESDAY",
//   wednesday = "WEDNESDAY",
//   thursday = "THURSDAY",
//   friday = "FRIDAY",
//   saturday = "SATURDAY",
// }

enum MaritalStatusEnum {
  single = "single",
  married = "married",
  divorce = "divorce",
}

enum serviceExperienceEnum {
  poor = "poor",
  good = "good",
  better = "better",
  best = "best",
}

interface VisitorProps {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  residence: string;
  sex: Sex.female | Sex.male;
  wouldYouBeMember: YesNoProps.yes | YesNoProps.no;
  givenLifeToChrist: {
    status: YesNoProps.yes | YesNoProps.no;
    dateConverted?: Date | string | null;
    placeOfConversion?: string | undefined;
    _id?: string;
  };
  recordOfficer: string;
  churchBranch: string;
  inviter: string;
  inviterPhone: string;
  firstTimer: YesNoProps.yes | YesNoProps.no;
  purposeOfVisit: string;
  maritalStatus:
    | MaritalStatusEnum.single
    | MaritalStatusEnum.married
    | MaritalStatusEnum.divorce;
  serviceExperience:
    | serviceExperienceEnum.poor
    | serviceExperienceEnum.good
    | serviceExperienceEnum.better
    | serviceExperienceEnum.best;
  prayerRequest: string;
  wantUsToVisit?: {
    status: YesNoProps.yes | YesNoProps.no;
    date: Date;
    time: string;
    _id?: string;
  };
  createdAt: Date | string;
}

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  from: string;
  to: string;
  description: string;
  imageUrl: string;
}
