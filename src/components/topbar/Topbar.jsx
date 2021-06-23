import {useRef, useEffect} from "react"
import "./topbar.scss"

import {Search, Person, Chat, Notifications} from "@material-ui/icons"


export default function Topbar() {
	const ref = useRef()
	useEffect(()=>{
		let element = ref.current
		var scrollbarelement = document.body
		scrollbarelement.addEventListener("wheel", checkScrolbar)
		function checkScrolbar(event){
			if(event.deltaY > 0 && window.innerWidth < 768){
			  element.style.position="absolute"
		  
			}else{
				element.style.position="sticky"
			}
		  }
	},[])
	
	return (
		<div className ="topbarCointeiner" ref={ref}>
			<div className="respButtom">
				<img className="respButtomIcon" src="./assets/resp_photo/down.png" alt="" />
			</div>
			<div className="topbarLeft">
				<span className="loGo">gio Social</span>
			</div>
			<div className="topbarCenter">
				<div className="searChbar">
					<Search className="searChIcon"/>
					<input placeholder="Search for friend, post or video"  className="searChinput" />

				</div>
			</div>
			<div className="topbarRight">
				<div className="topBarlinks">
					<span className="topbaRlink">Homepage</span>
					<span className="topbaRlink">Timeline</span>
				</div>
				<div className="topBaricons">
					<div className="topbarIconItem">
                  <Person/>
						<span className="topbarIconBage">1</span>
					</div>
					<div className="topbarIconItem">
                  <Chat/>
						<span className="topbarIconBage">2</span>
					</div>
					<div className="topbarIconItem">
                  <Notifications/>
						<span className="topbarIconBage">1</span>
					</div>
				</div>
				<img src="./assets/person/6.jpeg" alt="img" className="topBarimge" />
				
			</div>
		</div>
	)
}
