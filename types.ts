export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface NavLink {
  name: string;
  path: string;
}