import { Schedule, ScheduleList } from "./schedules";

function loadSchedule() {
  const transcript = new ScheduleList();

  transcript.add(new Schedule("lunedì", "10-16"));
  transcript.add(new Schedule("martedì", "chiuso", true));
  transcript.add(new Schedule("mercoledì", "chiuso", true));
  transcript.add(new Schedule("giovedì", "10-16"));
  transcript.add(new Schedule("venerdì", "10-16"));
  //transcript.add(new Schedule("sabato", "chiuso"));
  //transcript.add(new Schedule("domenica", "chiuso"));
  return transcript;
}

export default loadSchedule;