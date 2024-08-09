import { Router } from 'express';
import {
  getAssetDetails,
  addAssetDetails,
  getScopesByAsset,
  updateAssetDetails,
  deleteAssetDetails,
//   getScopedInAsset
} from '../controllers/assetDetails.controller.js';

const assetDetailRouter = Router();

assetDetailRouter.route("/").get(getAssetDetails).post(addAssetDetails);
assetDetailRouter.route("/:id").put(updateAssetDetails).delete(deleteAssetDetails);
// assetDetailRouter.route("/scoped/:assetId").get(getScopedInAsset);
assetDetailRouter.route("/scopes/:assetId").get(getScopesByAsset);


export default assetDetailRouter;

// import { Router } from 'express';
// import { addAssetDetails, deleteAssetDetails, getAssetDetails, updateAssetDetails } from '../controllers/assetDetails.controller.js';

// const assetDetailRouter = Router();

// assetDetailRouter.route("/").get(getAssetDetails);
// assetDetailRouter.route("/add").post(addAssetDetails);
// assetDetailRouter.route('/:id').put(updateAssetDetails);
// assetDetailRouter.route("/:id").delete(deleteAssetDetails);

// export default assetDetailRouter;
