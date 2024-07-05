export interface Post {
  title: string;
  date: string;
  username: string;
  costs: number;
}

export interface UnitPost extends Post {
  id: string;
}

export interface Posts {
  [key: string]: UnitPost;
}
