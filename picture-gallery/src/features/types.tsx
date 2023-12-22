export interface Image {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
  }
  export type Images = {
    [key: string]: Image[];
  };
  
  
  
  export type State = {
    loading: boolean;
    images: Images[];
    populars:string[];
    error: string;
  };