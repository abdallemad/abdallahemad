import Image from 'next/image';
import React from 'react'
interface Props {
  projects: Project[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function SmallGallery({ projects,setOpen }: Props) {
  const featuredProjects = projects.slice(0, 4);
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-12 py-24'>
      {
        featuredProjects.map((p, i) => {
          return (
            <div 
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              key={i} 
              className='flex flex-col gap-4 cursor-pointer'>
              <div 
              style={{
                background: p.background
              }}
              className="aspect-square w-full grid place-content-center">
                <Image
                  src={p.assets[0]}
                  alt={p.name}
                  width={400}
                  height={400} />
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-bold'>{p.name}</h3>
                <p className='text-lg border-t py-2'>{p.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SmallGallery
