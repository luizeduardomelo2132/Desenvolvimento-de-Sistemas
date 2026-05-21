import style from './style.module.scss'

export default function SideBar(props: any) {

    return (
        <div className={style.side_bar}>
            <div className={style.side_bar__header}>
                <h2 className={style.side_bar__title}>Side Bar</h2>
                <button
                    className={style.side_bar__close}
                    onClick={() => props.setSideBarOpen(false)}
                >
                    X
                </button>
            </div>
        </div>
    )
}
