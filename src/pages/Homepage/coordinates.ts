interface Error {
  code: number,
  PERMISSION_DENIED: number,
  POSITION_UNAVAILABLE: number,
  TIMEOUT: number,
  UNKNOWN_ERROR: number,
  message: 'string'
}

const getLocation = (): Promise<unknown> => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, showError);
})
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(getCoordinates, showError);
    // } else {
    //   alert("Geolocation is not supported by this browser.");
    // }
}

function getCoordinates(): void {
}

const showError = (error: Error): void => {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
    }
  }

  export default getLocation