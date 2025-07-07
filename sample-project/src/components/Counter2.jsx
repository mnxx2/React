import { Component } from "react";

// class component에서 useState를 사용하여 버튼을 누르면 1씩 증가하는 이벤트 클래스 정의
export default class ClassCounter extends Component {
    constructor(props) {
        super(props);
        // state에 속성 추가 : 속성은 매개변수로 오는 초기화값
        this.state = {
            count: props.init,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({
            // 카운트의 값을 1씩 증가
            count: prevState.count + 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>클릭 카운터 : class component에서 state 사용</h1>
                <p>현재 클릭 수 : {this.state.count}</p>
                <button onClick={this.handleClick}>클릭하세요</button>
            </div>
        );
    }
}