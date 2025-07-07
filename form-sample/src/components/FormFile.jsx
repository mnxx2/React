import { useRef } from "react";

// file을 사용하는 비제어 컴포넌트 - useRef 사용
export default function FormFile() {
    // 파일 입력창에 대한 참조(주소)값을 가져온다
    // 한번 사용할거라면 사용하지 않아도 되지만 계속 사용할거라면 UseRef 사용
    const file = useRef(null);

    // 보내기 버튼 클릭 후 파일 정보 로그 출력
    function show() {
        // file이라는 상수는 input:file에 ref로 연결되어 있고, 
        // current는 그 input:file 요소의 값 즉, 선택된 파일들에 접근하여 파일들을 가져온다
        // 이떄, 파일은 여러개가 선택될 수 있으므로 배열로 넘어온다
        const files = file.current.files;

        // 획득한 파일군을 순서대로 스캔
        for(const f of files) {
            // file의 size는 바이트 단위로 나오므로 KB(킬로바이트)로 표기하고 싶다면 1024로 나눠야한다
            // 나누면 소수점이 나오므로 trunc()로 소수점 이하 삭제
            console.log(`파일명 : ${f.name}`);
            console.log(`종류 : ${f.type}`);
            console.log(`크기 : ${Math.trunc(f.size / 1024)}KB`);
                        
        }
    }

    return (
        <form>
            {/* multiple : 파일 여러개 선택 가능 */}
            <input type="file" ref={file} multiple />
            <button type="button" onClick={show}>보내기</button>
        </form>
    )
}