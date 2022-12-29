function Schedule(day, hour) {
  this.day = day;
  this.hour = hour;
}

function ScheduleList() {
  this.scheduleList = [];

  this.add = (schedule) => {
    this.scheduleList.push(schedule);
  };
}

export {Schedule, ScheduleList};
