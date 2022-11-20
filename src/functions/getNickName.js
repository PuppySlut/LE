export const getNickName = (nn) => {
  console.log(nn);
  let i = nn.length - 1;
  const j = Math.floor(Math.random() * i);
  console.log(nn[j]);
  return nn[j];
};
