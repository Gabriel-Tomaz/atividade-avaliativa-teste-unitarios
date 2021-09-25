import dayjs from "dayjs";

export const getAge = (birthDate) => {
  const date = new Date();

  const birthYaer = dayjs(birthDate).year();
  const birthMonth = dayjs(birthDate).month();
  const birthDay = dayjs(birthDate).day();

  const currentYaer = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  if (currentMonth > birthMonth) {
    console.log(currentYaer - birthYaer);
  } else if (currentMonth === birthMonth && currentDay < birthDay) {
    console.log(currentYaer - birthYaer - 1);
  } else if (currentMonth === birthMonth && currentDay === birthDay) {
    console.log(`Feliz aniversário de ${currentYaer - birthYaer} anos`);
  }
};

getAge(new Date(2000, 8, 25));