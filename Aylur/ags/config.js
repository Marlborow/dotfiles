import { taskBar } from "./Taskbar/Taskbar.js";

App.config({
    style: "./style.css",
    windows: [
        taskBar(),
    ]
});