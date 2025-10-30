export default function Pie(){
  return (
    <footer className="py-3 mt-auto border-top">
      <div className="container d-flex justify-content-between align-items-center">
        <img src="/img/logo.jpg" alt="Level Up" style={{ height: "36px" }} />
        <span className="text-muted"> {new Date().getFullYear()} Level Up</span>
      </div>
    </footer>
  )
}