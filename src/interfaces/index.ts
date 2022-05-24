import { SortType } from '../enums';

export interface IColleague {
  name: string;
  email: string;
  phoneNumber: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string | null;
  gitHub: string | null;
  twitter: string | null;
  stackOverflow: string | null;
  linkedIn: string | null;
  imagePortraitUrl: string | null;
  imageWallOfLeetUrl: string | null;
  highlighted: boolean;
  published: boolean;
}

export interface IFilterValue {
  name: string;
  office: string;
  sortByName: SortType | null;
  sortByOffice: SortType | null;
}
