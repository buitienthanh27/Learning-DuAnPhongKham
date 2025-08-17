// Đảm bảo file này chỉ nhận app rồi cấu hình: KHÔNG tự tạo app mới
import express from "express";

const configViewEngine = (app) => {
    // folder cho static files
    app.use(express.static("./src/public"));

    // thiết lập EJS
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
};

export default configViewEngine;