const express = require("express");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { authCtrls } = require("../../controllers");

const { schemas } = require("../../models/user");

const router = express.Router();

// singup
router.post(
  "/register",
  validateBody(schemas.registerSchema),
  authCtrls.register
);
router.get("/verify/:verificationCode", authCtrls.verifyEmail)

// singin
router.post("/login", validateBody(schemas.loginSchema), authCtrls.login);

router.get("/current", authenticate, authCtrls.getCurrent);

router.post("/logout", authenticate, authCtrls.logout);
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authCtrls.updateAvatar
);

module.exports = router;
