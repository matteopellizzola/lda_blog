import { Schedule, ScheduleList } from "./schedules";

function loadSchedule() {
  const transcript = new ScheduleList();

  transcript.add(new Schedule("lunedì", "15-19:30"));
  // transcript.add(new Schedule("martedì", "chiuso", true));
  // transcript.add(new Schedule("mercoledì", "chiuso", true));
  transcript.add(new Schedule("giovedì", "15-19:30"));
  // transcript.add(new Schedule("venerdì", "chiuso", true));
  // transcript.add(new Schedule("sabato", "chiuso", true));
  // transcript.add(new Schedule("domenica", "chiuso", true));
  return transcript;
}

export default loadSchedule;