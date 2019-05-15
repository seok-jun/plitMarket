# plitMarket
종령이 형과 함께 하는 React 프로젝트

git hub 에서 직접 타이핑 했을 경우 커밋이 제대로 되지 않는 상황이 발생 ???

색션 4
 
 현상.  주소록 데이터 추가 기능 구현 중 React propTpeys 체크 하는 부분이 오류
 
 원인.  버전업 되면서 prop-type이 package로 따로 분리 되어 동영상 대로  하면 에러 발생 
 
 해결책.  터미널에서 $ npm install --save prop-types 하여 설치 후 
		사용할 페이지 에서 import PropTypes from 'prop-types'; 하여 사용
		ContactCreate.js 참고

------------config-----------------

git 에 커밋 이미 커밋 된 내용 지울 경우

 - 해당 위치로 이동 하여 git rm -r --cached '삭제폴더 또는 파일 명'
 - git commit -m "커밋 코멘트" 커밋 코멘트 작성 후 커밋 진행
 - git push origin master 마스터 에 푸시 

변경내역 표시시 ignore 처리 방법 (소스 트리 사용)
 - 소스트리에서 우측 상단 설정으로 눌러서 이동 후 고급에서 저장소 별 무시 목록 항목에 편집 눌러 목록 작성
   * .gitIgnore 파일 참고
   