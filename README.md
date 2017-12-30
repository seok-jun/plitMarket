# plitMarket
종령이 형과 함께 하는 React 프로젝트

git hub 에서 직접 타이핑 했을 경우 커밋이 제대로 되지 않는 상황이 발생 ???

색션 4
 
 현상.  주소록 데이터 추가 기능 구현 중 React propTpeys 체크 하는 부분이 오류
 
 원인.  버전업 되면서 prop-type이 package로 따로 분리 되어 동영상 대로  하면 에러 발생 
 
 해결책.  터미널에서 $ npm install --save prop-types 하여 설치 후 
		사용할 페이지 에서 import PropTypes from 'prop-types'; 하여 사용
		ContactCreate.js 참고