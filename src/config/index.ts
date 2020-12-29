import './loadenv';

export const CWD = process.cwd();
export const PORT = process.env.PORT || '';
export const ROOT_PATH = `${CWD}/${process.env.ROOT_PATH}`;
export const API_URL = process.env.API_URL || '';
export const MONGODB_URI = process.env.MONGODB_URI || '';
export const JWT_SECRET = process.env.JWT_SECRET || '';
