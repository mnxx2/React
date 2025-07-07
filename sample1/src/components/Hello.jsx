// 함수명에 소문자가 아닌 대문자를 사용한 이유는 함수 자체가 태그로 작용할 것이기 때문에
// 기존의 Html 태그와 구분할 수 없어지기 때문이다
// 현재 파일이 아닌 src 폴더의 index.js 파일에서 실행할 것이기 때문에 export
export default function Hello() {
    return (
        // 단일 엘리먼트를 반환해야 하기 때문에 <> 혹은 기타 태그로 묶어줘야 함
        <>
            <p>안녕하세용👋</p>
            <p>Hello JSX!!</p>
        </>
    )
}