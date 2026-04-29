export const rutinaEjer = (hours: number[], target: number) => {
  const periodLength = hours.length;
  const trainingDays = hours.filter(hora => hora > 0).length;
  const total = hours.reduce((sum, hora) => sum + hora, 0);
  const average = total / periodLength;

  const success = average >= target;

  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = "Cumpliste";
  } else if (average >= target * 0.75) {
    rating = 2;
    ratingDescription = "No está mal";
  } else {
    rating = 1;
    ratingDescription = "Desempeño pobre";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};