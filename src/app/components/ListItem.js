import {Caveat} from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

export default function ListItem(props){
    return(
        <li onClick={() => {props.delete(props.id)}} className={`${caveat.className} p-2 text-3xl`}>{props.item}</li>
    );
}