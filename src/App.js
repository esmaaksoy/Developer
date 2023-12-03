import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import data from "./data"
import "./scss/app.scss"
function App() {
  return (
    <main>
      <Header />
      <Card data={data} />
      <Footer />
    </main>
  )
}
export default App
