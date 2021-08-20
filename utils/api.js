// Mainly stroing data in async storage or local storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CALENDAR_STORAGE_KEY } from "./calendar";

export const submitEntry = ({ entry, key }) => {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry,
    })
  );
};

export const removeEntry = (key) => {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
  });
};
