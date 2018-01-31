// ====================================================
// TIMING IS EVERYTHING
// ====================================================


class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals. 
    const date = new Date();
    this.ss = date.getSeconds();
    this.mm = date.getMinutes();
    this.hr = date.getHours();
    
    this.printTime = this.printTime.bind(this);
    this._tick = this._tick.bind(this);
    this.addSeconds = this.addSeconds.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.addHour = this.addHour.bind(this);
    
    console.log(this._tick());
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let mm = this.mm < 10 ? `0${this.mm}` : this.mm;
    let ss = this.ss < 10 ? `0${this.ss}` : this.ss;
    let hr = this.hr > 12 ? this.hr - 12 : this.hr;
    let am = this.hr > 11 ? 'pm' : 'am';
    
    console.log(`${hr}:${mm}:${ss}${am}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    setInterval(this.addSeconds, 1000);
    setInterval(this.printTime, 1000);
  }
  
  addSeconds() {
    this.ss += 1;
    
    if (this.ss > 59) {
      this.ss = 0;
      this.addMinute();
    }
  }
  
  addMinute() {
    this.mm += 1;
    
    if (this.mm > 59) {
      this.mm = 0;
      this.addHour();
    }
  }
  
  addHour() {
    this.hr += 1;
  }
}

const clock = new Clock();

