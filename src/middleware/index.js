import logger from "./logger";

const middleware=(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(logger);

export default middleware;
