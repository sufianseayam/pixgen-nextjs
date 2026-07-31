import { Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { FcLike } from "react-icons/fc";


const PhotoCard = ({ photo }) => {
    // console.log(photo);
    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                    src={photo.imageUrl}
                    fill
                    alt={photo.title}
                    className="rounded-xl"
                />
                <Chip className="absolute right-2 top-2">{photo.category}</Chip>

            </div>
            <div>
                <h2 className="font-medium">{photo.title}</h2>
            </div>
             

             <div className="flex gap-5">
                <div className="flex items-center gap-2">
                <p><FcLike/></p>
                <p>{photo.likes}</p>
            </div>

            <Separator orientation="vertical"></Separator>

              <div className="flex items-center gap-2">
                <p><BiDownload/></p>
                <p>{photo.downloads}</p>
            </div>
             </div>

             <Link href={`/all-photos/${photo.id}`}><Button variant="outline" className="w-full">View</Button></Link>
           
        </Card>
    );
};

export default PhotoCard;