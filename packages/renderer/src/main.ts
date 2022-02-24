import {createApp} from "vue";
import {createPinia} from 'pinia'
import router from "./router/router";
import App from "./App.vue";
import "vfonts/FiraCode.css";
import '@splidejs/splide/dist/css/splide.min.css';
import "@/assets/base.scss";
import "@/utils/extend"

import {
    create,
    NButton,
    NIcon,
    NEllipsis,
} from "naive-ui";

const naive = create({
    components: [NButton, NIcon, NEllipsis],
});

createApp(App)
    .use(router)
    .use(createPinia())
    .use(naive)
    .mount("#app")
    .$nextTick(window.removeLoading);

// console.log('fs', window.fs)
// console.log('ipcRenderer', window.ipcRenderer)

// Usage of ipcRenderer.on
try {
    window.ipcRenderer.on("main-process-message", (_event, ...args) => {
        console.log("[Receive Main-process message]:", ...args);
    });
} catch (error) {
}
