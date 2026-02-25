"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const authorize = (...allowedRoles) => (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: "Not authenticated"
        });
    }
    if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
            success: false,
            message: "Access denied"
        });
    }
    next();
};
exports.authorize = authorize;
