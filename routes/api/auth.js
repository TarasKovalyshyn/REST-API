const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { authCtrls } = require("../../controllers");

const { schemas } = require("../../models/user");

const router = express.Router();

// singup
router.post("/register", validateBody(schemas.registerSchema), authCtrls.register);

// singin
router.post("/login", validateBody(schemas.loginSchema), authCtrls.login);

router.get("/current", authenticate, authCtrls.getCurrent);

router.post("/logout", authenticate, authCtrls.logout);

module.exports = router;
