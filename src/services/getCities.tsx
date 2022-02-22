export const getCities = async (inputId: string): Promise<any> => {

    // /check/city/{name} GET
    return fetch('https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia')
        .then(resp => resp.json())
        .then(result => {
        const input: any = document.getElementById(inputId);
        if (input?.value.trim() === '') { return }
        const newArr = result.filter((el: any) => el.city.substring(0, input?.value.length).toUpperCase() === input?.value.toUpperCase());
        return newArr;
    });

};
