import { taskBar } from "./Taskbar/Taskbar.js";

App.config({
    style: "./style.laptop.css",
    windows: [
        taskBar(),
    ]
});