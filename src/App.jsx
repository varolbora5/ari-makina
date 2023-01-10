import Header from "./Components/Header"
import Gallery from "./Components/Gallery"
import Ulasin from "./Components/Ulasin"
import './App.css'

function App() {
  return (
		<div className="h-screen">
			<div className="w-screen header shadow-slate-200 shadow">
				<Header />
			</div>
			<div className="items-center pt-5 text-center w-screen">
				<p className="bg-white rounded-md inline-block px-5 mt-7">
					<p className="w-auto text-center p-5 text-3xl drop-shadow-slate-200 drop-shadow-xl inline-block">
						GENTIGER 
					</p>
					<br></br>
					<p className="w-auto rounded-lg text-start pb-3 text-xl inline-block">
						Yüksek Hızlı CNC İşleme Merkezleri
					</p>
				</p>
			</div>
			<Gallery />
			<div className="pl-10 py-7 bg-white flex text-center">
				<Ulasin />
				<p className="text-center w-auto m-auto">
©2022, ARI MAKİNA. Made by Bora Varol
				</p>
			</div>
		</div>
  )
}

export default App

// make h2 width same as the text with tailwind

