export interface FetchProps {
  Data: any;
}

export interface MemberProps {
  name: string;
  role: string;
  location: string;
  image: string;
  tags: Array<string>;
}

export interface CardProps {
  item: any;
}

export interface FilterButtonsProps {
data: any; 
setItem: any; 
menuItems: any; 
filterItem: any;
}