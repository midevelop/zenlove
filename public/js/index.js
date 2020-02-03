console.log("Hello");

let stageCreator = (label = "", seconds = 0) => ({ label, seconds });

let app = new Vue({
  el: "#app",
  data: {
    second: 0,
    stages: [
      stageCreator("Вдох", 4),
      stageCreator("Задержи", 15),
      stageCreator("Выдох", 10)
    ],
    stage: 0,
    realTime: 0,
    circle: 1
  },
  created() {
    this.start();
  },
  methods: {
    start() {
      setInterval(() => {
        this.tick();
      }, 1000);
    },
    stop() {
      console.log("stop");
    },
    tick() {
      this.second++;
      this.realTime--;
      if (this.realTime < 0) {

        if (this.stage < this.stages.length - 1) this.stage++;
        else {
          this.stage = 0;
          this.circle++;
        }
        this.realTime +=  this.stages[this.stage].seconds;
      }
    }
  }
});
