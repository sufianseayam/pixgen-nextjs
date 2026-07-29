import Image from "next/image";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://pixgen-nextjs-sooty.vercel.app/data.json",
    {
      cache: "no-store",
    }
  );

  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);

  if (!photo) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">
          Photo Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-xl p-8">

        {/* Image Section */}
        <div>
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={700}
            height={700}
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-5">

          <div>
            <h1 className="text-4xl font-bold">{photo.title}</h1>

            <span className="inline-block mt-3 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
              {photo.category}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">AI Prompt</h2>

            <div className="bg-slate-100 rounded-lg p-4 border">
              {photo.prompt}
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-100 rounded-lg p-4">
              <p className="text-gray-500">Model</p>
              <h3 className="font-bold">{photo.model}</h3>
            </div>

            <div className="bg-slate-100 rounded-lg p-4">
              <p className="text-gray-500">Resolution</p>
              <h3 className="font-bold">{photo.resolution}</h3>
            </div>

            <div className="bg-slate-100 rounded-lg p-4">
              <p className="text-gray-500">Likes</p>
              <h3 className="font-bold">❤️ {photo.likes}</h3>
            </div>

            <div className="bg-slate-100 rounded-lg p-4">
              <p className="text-gray-500">Downloads</p>
              <h3 className="font-bold">⬇️ {photo.downloads}</h3>
            </div>

          </div>

          {/* Created Date */}
          <div>
            <h2 className="font-semibold text-lg">Created</h2>
            <p className="text-gray-600">
              {new Date(photo.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Tags */}
          <div>
            <h2 className="font-semibold text-lg mb-3">Tags</h2>

            <div className="flex flex-wrap gap-2">
              {photo.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary">
              Download Prompt
            </button>

            <button className="btn btn-outline">
              ❤️ Like
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;