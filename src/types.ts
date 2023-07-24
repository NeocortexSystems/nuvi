export interface User {
  uid: string;
  email: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  createdAt: Date;
  user: User;
}

export interface GeoObject {
  id: string;
  lat: number;
  lng: number;
  imageUrl: string;
}