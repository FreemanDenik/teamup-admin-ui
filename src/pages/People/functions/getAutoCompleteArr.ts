export const getAutoCompleteArr = (arr: string[], inputText: string) => {
    return arr.filter((el) => el.toUpperCase().startsWith(inputText.toUpperCase())).slice(0, 5);
};