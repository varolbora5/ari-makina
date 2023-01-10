import GT0 from "../assets/0-GT-HRS1000.jpg"
import AX5 from "../assets/1-875-5AX.jpg"
import GT175 from "../assets/GT155.jpg"
import GT105 from "../assets/GT105.jpg"
import GT16 from "../assets/GT-1614V.jpg"
import GT1612 from "../assets/產1-GT-1612V.jpg"

function Gallery() {
	return (
		<>
			<div className="flex w-screen mt-3 justify-center row">
				<div className="flex max-w-[30%] m-6 flex-auto rounded-lg drop-shadow-lg bg-white items-center hover:drop-shadow-2xl transition ease-in-out delay-100">
					<img src={GT0} className="p-3 justify-center" alt="GT0" />
				</div>
				<div className="flex max-w-[30%] m-6 flex-auto rounded-lg drop-shadow-lg bg-white items-center hover:drop-shadow-2xl transition ease-in-out delay-100">
					<img src={AX5} className="p-3 justify-center" alt="GT0" />
				</div>
			</div>
			<div className="flex w-screen mt-7 justify-center row">
				<div className="flex max-w-[30%] m-6 flex-auto rounded-lg drop-shadow-lg bg-white items-center hover:drop-shadow-2xl transition ease-in-out delay-100">
					<img src={GT175} className="p-3 justify-center" alt="GT0" />
				</div>
				<div className="flex max-w-[30%] m-6 flex-auto rounded-lg drop-shadow-lg bg-white items-center hover:drop-shadow-2xl transition ease-in-out delay-100">
					<img src={GT105} className="p-3 justify-center" alt="GT0" />
				</div>
			</div>
			<div className="flex w-screen mt-7 justify-center row">
				<div className="flex max-w-[30%] m-6 flex-auto rounded-lg drop-shadow-lg bg-white items-center hover:drop-shadow-2xl transition ease-in-out delay-100">
					<img src={GT16} className="p-3 justify-center" alt="GT0" />
				</div>
				<div className="flex max-w-[30%] m-6 flex-auto rounded-lg drop-shadow-lg bg-white items-center hover:drop-shadow-2xl transition ease-in-out delay-100">
					<img src={GT1612} className="p-3 justify-center" alt="GT0" />
				</div>
			</div>
		</>
	)
}

export default Gallery
