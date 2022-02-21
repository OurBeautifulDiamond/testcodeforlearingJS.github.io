let elMap = document.getElementById('loc');
let msg = `현재 위치 정보를 얻을 수 없습니다.`;

if (Modernizer.geolocation) {
  navigetor.geolocation.getCurrentPosition(success, fail);
  elMap.textContent = `위치 확인중...`;
} else {
  elMap.textContent = msg;
}

function success(location) {
  msg = `<h3>위도: <br>`;
  msg += `${Position.coords.latitude}</h3>`;
  msg += `<h3>경도:<br>`;
  msg += `${Position.coords.longitude}</h3>`;
  elMap.innerHTML = msg;
}

function fail(msg) {
  elMap.textContent = msg;
  console.log(msg.code);
}