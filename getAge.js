import dayjs from "dayjs";

export const getAge = birthDate => {
  const date = new Date();

  const birthYaer = dayjs(birthDate).year();
  const birthMonth = dayjs(birthDate).month();
  const birthDay = dayjs(birthDate).day();

  const currentYaer = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  const age = currentYaer - birthYaer;

  if (currentMonth < birthMonth) {
    return age - 1;
  } else {
    if (currentMonth === birthMonth) {
      if (currentDay < birthDay) {
        return age - 1;
      }
    }
  }

  return age;
};
