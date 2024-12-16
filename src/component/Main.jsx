

export default function main(props) {
  const {data} = props
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt="mars demo image" className="bgImage"/>
    </div>
  )
}
