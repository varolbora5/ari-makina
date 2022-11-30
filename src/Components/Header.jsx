import ari from "../assets/ARI logo.jpg"
import gentiger from "../assets/GT logo.png"

export function Header() {	
	return (
	<header>
			<div className="flex items-center justify-center text-center m-5">
				<img src={ari} className="aspect-auto max-w-[10%]" alt="Ari Makina"/>
				<h1>ARI MAKİNA TAKIM TEZGAHLARI SANAYİ ve TİCARET LTD. ŞTİ.</h1>
				<img src={gentiger} className="aspect-auto" alt="Gentiger"/>
			</div>
	</header>
	)
}
