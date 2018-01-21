/**
* @Author: luongtd
* @Date:   2016-07-26T23:18:31-07:00
* @Last modified by:   luongtd
* @Last modified time: 2016-07-26T23:31:35-07:00
*/



'use strict';

const API_URL = 'https://googledrive.com/host/0By5C6ybU2K6gaVltLWxNRmlvNEU/main.json';



function fetchData() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("=======" + responseData);
      return responseData;
    })
    .done();
}

module.exports = {
  fetchData
};
