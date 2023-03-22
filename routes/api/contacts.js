const express = require("express");
const  {contactsCtrl}  = require("../../controllers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, contactsCtrl.getAll);

router.get("/:id", authenticate, isValidId, contactsCtrl.getById);

router.post("/",authenticate, validateBody(schemas.addSchema), contactsCtrl.add);

router.put("/:id", authenticate, isValidId, validateBody(schemas.addSchema),contactsCtrl.updateById);

router.delete("/:id", authenticate, isValidId, contactsCtrl.deleteContact);

router.patch("/:id/favorite",authenticate,isValidId,validateBody(schemas.updateFavoriteSchema),contactsCtrl.updateFavorite);

module.exports = router;
