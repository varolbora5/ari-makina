import ari from "../assets/ARI logo.jpg"
import gentiger from "../assets/GT logo.png"
import { useMediaQuery } from "react-responsive"

function Header() {	

	let	isMobile = useMediaQuery({ query: `(max-width: 1080px)` })

	return (
	<header className="flex sticky h-auto items-center justify-center text-center px-6">

			<a href="/">
				<img src={ari} className="aspect-auto w-[110px] py-4" alt="Ari Makina" />
			</a>	
			<h1 className="mx-5">{isMobile ? "ARI MAKINA" : "ARI MAKİNA TAKIM TEZGAHLARI SANAYİ ve TİCARET LTD. ŞTİ."}</h1>
			<a href="https://www.gentiger.com.tw/en/">
				<img src={gentiger} className="aspect-auto" alt="Gentiger" />
			</a>
	</header>
	)
}

export default Header
