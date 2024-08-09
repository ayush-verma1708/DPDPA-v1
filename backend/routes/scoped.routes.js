import express from 'express';
import {
  getScopes,
  getScopedInAsset,
  addScope,
  updateScope,
  deleteScope
} from '../controllers/scoped.controller.js';

const router = express.Router();

router.get('/', getScopes);
router.get('/assets/:assetId', getScopedInAsset);
router.post('/', addScope);
router.put('/:id', updateScope);
router.delete('/:id', deleteScope);

export default router;

// import { Router } from 'express'
// import { getScoped, addScoped, updateScoped, deleteScoped, getScopedInAsset } from '../controllers/scoped.controller.js'

// const scopedRouter = Router();

// scopedRouter.route('/').get(getScoped);
// scopedRouter.route('/add').post(addScoped);
// scopedRouter.route("/:assetId/scoped").get(getScoped);
// scopedRouter.route('/assets/:assetId').get(getScopedInAsset);
// scopedRouter.route('/scoped-update/:id').put(updateScoped);
// scopedRouter.route('/scoped-delete/:id').delete(deleteScoped);

// export default scopedRouter;