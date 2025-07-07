import React from 'react';
import Book from './Book';

function Library() {
    return (
        <>
            <Book myName="따라하며 쉽게 배우는 모던 리액트 완벽 입문" author="야마다 요시히로"/>
            <Book myName="처음 배우는 애저" author="김도균"/>
            <Book myName="Node.js 백엔드 개발자 되기" author="박승균"/>
        </>
    )
}

export default Library;