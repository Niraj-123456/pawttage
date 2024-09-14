export interface Product {
  id: number;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  avalability: Avalability;
  description: string;
  location: string;
  status: string;
  rating: number;
}

export interface Avalability {
  from: number;
  to: number;
}
