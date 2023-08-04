// service that takes care of data manipulation
import entries from "../../data/entries";
import { DiaryEntry } from "../types";

// using type assertion (only because we know the type for certain)
// const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const getEntries = (): DiaryEntry[] => {
  return entries;
};
const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary,
};
