import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async() => {
     const res=await fetch('https://pixgen-nextjs-sooty.vercel.app/data.json')
    const photos=await res.json()
    

    return (
        <div>
            <h1 className='text-2xl font-bold my-3'>All Photos</h1>

            <div className='grid grid-cols-4 gap-4'>
                {
                    photos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;