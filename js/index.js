console.log("Hello")


let app = new Vue({
    el: "#app",
    data: {
        second: 0,
        stages: ["Вдох", "Задержка", "Выдох"],
        inhale: 4,
        hold: 18,
        exhale: 25,
        isPause: false
    },
    created() {
        this.start()
    },
    methods: {
        start() {
            setInterval(() => {
                this.tick()
            }, 1000)
        },
        stop() {
            console.log("stop")
        },
        tick() {
            this.second++
        },

    }
})