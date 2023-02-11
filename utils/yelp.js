export const YELP_API_KEY =
  'Ve3SjuIgbTPMz4z-XGv0nmEMLQAPvEWkk-kUUO72jjKuPsHV05_M36Kvljoya0At5AJM46EV-V1OW9pFiDWIoXMmTT1ikUWTfhR6q3LfwRXAzf8mFZJZ5NxbEW3kY3Yx';
export const yelpQuery = (city) =>
  `https://api.yelp.com/v3/businesses/search?term=restauran&location=${city}`;
