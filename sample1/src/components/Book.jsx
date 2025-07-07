import React from 'react';
function Book(props) {
    return (
        <>
            <h1>{`이 책의 이름은 ${props.myName} 입니다.`}</h1>
            <h1>{`이 책의 저자는 ${props.author} 입니다.`}</h1>
        </>
    )
}

export default Book;