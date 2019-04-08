export const getDutyTotalForGame = game => {
  const dutyTotals = {};
  const userDuties = Object.values(game.users).map(userDuty => {
    return userDuty.duty_score;
  });

  userDuties.forEach(userDuty => {
    Object.keys(userDuty).forEach(userDutyName => {
      if (!dutyTotals[userDutyName]) {
        dutyTotals[userDutyName] = userDuty[userDutyName];
      } else if (typeof dutyTotals[userDutyName] === "number") {
        dutyTotals[userDutyName] += userDuty[userDutyName];
      }
    });
  });
  return dutyTotals;
};
