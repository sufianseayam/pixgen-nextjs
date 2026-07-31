import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async({searchParams}) => {

const {category}=await searchParams;





     const res=await fetch('https://pixgen-nextjs-sooty.vercel.app/data.json')
    const photos=await res.json()


    const filteredPhotos=category ? photos.filter(photo=>photo.category.toLowerCase()== category.toLowerCase()) : photos
    

    return (
        <div>
            <h1 className='text-2xl font-bold my-3'>All Photos</h1>
            <Category></Category>

            <div className='grid grid-cols-4 gap-4'>
                {
                    filteredPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;