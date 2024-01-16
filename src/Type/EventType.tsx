export interface iEvent {
  id: number;
  name: string;
  image: string;
  imageDesc: string;
  author: string;
  date: string;
  time: string;
  link: string;
  active: boolean;
  status: string;
  location: string;
  description: string;
  bio?: string;
  vacancies?: number;
  classification?: string;
}
