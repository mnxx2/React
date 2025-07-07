export default function SayHello(props) {
    return (
        <>
            <p>안녕하세요. {props.myName} </p>
            <p>Hello {props.to}!</p>
        </>
    );
}