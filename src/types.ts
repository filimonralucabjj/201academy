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
    schedule: ItemSchedule[];
    address: string;
  };