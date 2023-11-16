import Link from "next/link"


interface props{
    text :string
    linkurl:string

}

export default function MyLink({text,linkurl}:props){
    return  <Link className="text-white hover:text-red-500" href={linkurl}>{text}</Link>
}