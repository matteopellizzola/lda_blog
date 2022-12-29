function Schedule(day, hour, closed) {
  this.day = day;
  this.hour = hour;
  this.closed = closed ? true : false;
}

function ScheduleList() {
  this.scheduleList = [];

  this.add = (schedule) => {
    this.scheduleList.push(schedule);
  };
}

export {Schedule, ScheduleList};
