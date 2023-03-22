const express = require("express");
const  {contactsCtrls}  = require("../../controllers");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, contactsCtrls.getAll);

router.get("/:id", authenticate, isValidId, contactsCtrls.getById);

router.post("/",authenticate, validateBody(schemas.addSchema), contactsCtrls.add);

router.put("/:id", authenticate, isValidId, validateBody(schemas.addSchema),contactsCtrls.updateById);

router.delete("/:id", authenticate, isValidId, contactsCtrls.deleteContact);

router.patch("/:id/favorite",authenticate,isValidId,validateBody(schemas.updateFavoriteSchema),contactsCtrls.updateFavorite);

module.exports = router;
