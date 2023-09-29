const playTime = JSON.parse(localStorage.getItem("playTime")) || {};
const { hours, minutes, seconds, incrementH, incrementM, incrementS, label } =
  playTime;

export { hours, minutes, seconds, incrementH, incrementM, incrementS, label };
