function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  const timerId = setInterval(() => {
    console.log(remainingTime);
    remainingTime--;

    if (remainingTime <= 0) {
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}