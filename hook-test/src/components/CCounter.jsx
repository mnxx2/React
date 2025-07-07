import React from 'react';

// 버튼을 클릭하고 그 횟수를 출력하는 클래스 컴포넌트 - 컴포넌트의 라이프사이클 확인
export default class CCounter extends React.Component {
    // 생성자를 통해 매개변수를 받아 초기값 설정
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
        };
    }

    // 버튼을 클릭할 때마다 setState를 사용해 count에 +1
    handleClick = () => {
        this.setState((prevState) => {
            return {count: prevState.count + 1};
        });
    };

    render() {
        console.log('render() 호출');

        return (
            <div>
                <p>{this.state.count} 번 클릭했습니다.</p>
                <button onClick={this.handleClick}>클릭</button>
            </div>
        )
    }

    // 화면이 출력될 때 함수도 같이 호출
    componentDidMount() {
        console.log('componentDidMount 호출');
    }

    // 함수가 값을 변경할 때 호출
    componentDidUpdate() {
        console.log('componentDidUpdate 호출');
    }
     
    // 함수를 더이상 사용하지 않거나 다른 기능을 사용/출력하고 있을 때 호출
    componentWillUnmount() {
        console.log('componentWillUnmount 호출');
    }
}

