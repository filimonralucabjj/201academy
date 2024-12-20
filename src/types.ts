export type ItemSchedule = {
    day:string;
    hour:string;
}
export type DetailsItemType = {
    id: number;
    sectionId: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    img1: string;
    img2: string;
    schedule: ItemSchedule[] | null;
    address: string;
  };

export  type ActivityItemType = {
    id: number;
    title: string;
    subtitle: string;
    elementId: string;
    img: string;
  };

export type KidsDetailsItemType = {
    id: number,
    title: string;
    subtitle: string;
    address: string;
    schedule: ItemSchedule[];
    coach: string;
    coachDesc: string[];
    coachImg: string;
    img: string;
}

export type ItemPrice = {
  id:number,
  title: string,
  includes: string[],
  excludes: string[],
  price: number,
  per: string
}

export type PricingItemType = {
    id: number,
    title: string,
    options: ItemPrice[];
}