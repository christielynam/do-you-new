export const getBaseUrl = () => process.env.NODE_ENV === 'production' 
? '' 
: 'http://localhost:3001';

console.log(process.env);