export interface MemberProps {
  name: string;
  role: string;
  location: string;
  image: string;
  tags: Array<string>;
}

export interface FilterButtonsProps {
data: any;
setItem: any; 
locations: any; 
filterItem: any;
}

export interface LightboxProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}