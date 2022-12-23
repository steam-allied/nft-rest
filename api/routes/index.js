import express from 'express';

import { walletRouter } from './walletRoutes.js'
import { nftRouter } from './nftRoutes.js';
import UserRouter from "./user-routes.mjs"
import SwapsRouter from "./swaps-routes.mjs"

const apiRouter = express.Router();

apiRouter.use("/nfts", nftRouter);
apiRouter.use("/wallets", walletRouter);
apiRouter.use("/users", UserRouter)
apiRouter.use("/swaps", SwapsRouter)


export default apiRouter;