

export default function SideBar(props) {
    const {handleTogleModel, data} = props
  return (
    <div className="sidebar">
        <div className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <div className="descriptionContainer">
                <h4 className="descriptionTitle">{data?.date}</h4>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleTogleModel}>
                <i className="fa-solid fa-right-long"></i>
            </button>
        </div>
    </div>
  )
}
