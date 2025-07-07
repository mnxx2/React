import './Header.css';

export default function Header({title, image}) {
    let img;

    // image가 있으면 나오고 없으면 안 나오도록 If문으로 흐름 제어
    if (img) {
        img = <img src={image} alt={`${title} icon`} className="header-img" />
    }

    return (
        <div className="header">
            {img}
            <h1 className="header-title">{title}</h1>
        </div>
)
}