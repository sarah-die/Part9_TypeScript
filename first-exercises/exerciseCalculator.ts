// return: number of days, number of training days, original target value, calculated average time, 
// boolean (if target was reached), rating 1-3 (how well target was matched), text value explaining the rating
interface CalculatedExercises {
    periodLength: number;
    trainingDays: number;
    target: number;
    average: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
}



// calculate average time of daily exercise hours and compare to daily target amount
// input: array[daily exercise hours]
const calculateExercises = (dailyEx: number[], target: number): CalculatedExercises => {
    const periodLength: number = dailyEx.length;
    const trainingDays: number = dailyEx.filter((d) => d !== 0).length;
    const average: number = (dailyEx.reduce((sum, cur) => sum + cur)) / periodLength;
    const success: boolean = average < target ? false : true;

    const calcRating = (): number => {
        const errorPercent: number = ((target - average) / target) * 100;

        if (errorPercent < 10) {
            return 1;
        } if (errorPercent < 40) {
            return 2;
        } else {
            return 3;
        }
    }
    const rating: number = calcRating();
    const getRatingDescription = (): string => {
        switch (rating) {
            case 1: return "great. congrats!";
            case 2: return "not too bad but could do better";
            case 3: return "bad. do more sport!"
        }
    }
    const ratingDescription: string = getRatingDescription();

    return { periodLength, trainingDays, target, average, success, rating, ratingDescription };
}

console.log(calculateExercises([0, 0, 1, 1, 0, 2, 0], 1));
