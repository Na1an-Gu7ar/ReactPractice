const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showQR: true,
    showSearchAutoComplete: false,
    showAccordian: false
}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if(dummyApiResponse){
            setTimeout(() => {
                resolve(dummyApiResponse)
            }, 1000)
        } else{
            reject("Error Occured")
        }
    })
}

export default featureFlagsDataServiceCall