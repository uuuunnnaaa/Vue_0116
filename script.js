console.log("測試");

// 建立Vue的應用程式
const app = Vue.createApp({
    data() {
        return {
            firstText: "嗨，這是Vue",
            textColor: "gold",
            fontSize: 30,
            canBuy: true,
            web: [
                "HTML", "CSS", "Javascript", "JQuery", "Vue", "React", "Git"
            ],
            count: 0,
        }
    }
});

// 將app安裝到 #app
app.mount("#app");