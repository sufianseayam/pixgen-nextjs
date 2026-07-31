import { Button } from "@heroui/react";
import Link from "next/link";


const Category = async() => {

    const res=await fetch("https://pixgen-nextjs-sooty.vercel.app/category.json")
    const categories=await res.json();

    return (
        <div className="mb-5 space-x-2">
         {
            categories.map(category=><Link  key={category.id} href={`?category=${category.name.toLowerCase()}`}><Button size="sm" >{category.name}</Button></Link> )
         }
        </div>
    );
};

export default Category;