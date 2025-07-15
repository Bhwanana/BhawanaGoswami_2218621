export const logger=(message)=>{
    const timestamp=new Date().toISOString();
    console.log(`[$timestamp}] ${message}`);
};