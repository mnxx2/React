// props 혹은 다른 변수명으로 매개변수 사용 가능
// 별도의 값을 받아 사용할 수 있다는 의미
// 매개변수를 book, title, author로 바꾸어 <Book>태그와 충돌이 일어나지 않도록 한다
function Book({book, title, author}) { // 객체를 분해하면 props로 받는게 아니라 객체의 형태로 매개변수를 받을 수 있다
    // App.js에서 {title:..., className:..., author:...}의 형태로 넘어옴
    // 리액트는 소괄호 사용

    // {props.title}의 형태로 사용하기 불편하다면 객체를 분해함
    // const {title, author} = book;

    // Book과 Library를 둘 다 사용하기 위해서는 들어오는 두 개의 값을 변수에 저장해야 한다.
    // 이때 사용되는 물음표는 옵셔널 체이닝(Optional Chaining 연산자로,
    // 객체나 값이 undefined나 null로 올 수 있는 상황에서 안전하게 속성에 접근할 수 있도록 도와준다
    // book?.title이 undefined나 null이 오면 title의 값을 사용한다
    const bookTitle = book?.title || title;
    const bookAuthor = book?.author || author;

    return (

        <>
        {/* 별도의 속성명을 생성해서 사용 가능 */}
        {/* 속성은 객체의 형태로 넘어옴 ex. {to:"오이영"} */}
            {/* <h1>Hello {props.title} {props.author}</h1> */}
            {/* 객체 분해하면 props.title의 형태가 아니라 속성명만 사용 가능 */}
            {/* {}는 자바스크립트의 표현식으로, 없애면 텍스트가 그대로 출력됨 */}
            <h1>이 책의 제목은 {bookTitle} 입니다.</h1>
            <h3>이 책의 저자는 {bookAuthor} 입니다.</h3>
        </>
    )
}

// 리액트도 자바스크립트와 동일하게 export, import 가능
// 함수명 앞에 export default 사용 가능
export default Book;