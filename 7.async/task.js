class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (time === undefined || time === null || callback === undefined) {
      throw new Error('Отсутствуют обязательные аргументы')
    }
    for (let i = 0; i < this.alarmCollection.length; i++) {
      if (time === this.alarmCollection[i].time) {
        console.warn('Уже присутствует звонок на это же время')
      }
    }
    this.alarmCollection.push({ callback: callback, time: time, canCall: true })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time)
  }
  
  getCurrentFormattedTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes <= 9) {
      return  String(hours + ":" + "0" + minutes);
    }
    return  String(hours + ":" + minutes);
  }

  start() {
    if (this.intervalId !== null) {
      return
    }
    this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm =>{
      if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
          console.log("+");
      }
     }),1000)
  }

  stop(){
    clearInterval(this.intervalId)
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true)
  }
  clearAlarms(){
    this.stop();
    this.alarmCollection = [];
  } 
    
}
