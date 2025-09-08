import React from 'react'

function Glassbox({
  title = "Projects", 
  description = "an integrated project spaces for tasks, docs, and community.", 
  isActive = false, 
  progress = 0, 
  onClick,
  icon,
}) {
  return (
    <div 
      className={`flex flex-col min-w-[180px] w-[180px] lg:w-[245px] max-w-[245px] min-h-[120px] p-4 rounded-xl cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-white text-black scale-105 border border-[rgba(80,230,203,0.3)] shadow-lg' 
          : 'bg-[rgba(255,255,255,.12)] text-[#d6d3d3aa] hover:bg-[rgba(255,255,255,.18)]'
      }`}
      onClick={onClick}
    >
      <div className='flex items-center gap-2 mb-1'>
        {icon && (
          <div className={`w-4 h-4 flex-shrink-0 transition-colors duration-300 ${
            isActive ? 'text-[rgb(80,230,203)]' : 'text-[#d6d3d3aa]'
          }`}>
            {icon}
          </div>
        )}
        <p className={`text-sm pt-2 font-medium truncate ${
          isActive ? 'text-black' : 'text-[#d6d3d3aa]'
        }`}>
          {title}
        </p>
      </div>
      
      <div className='mb-3 flex-1'>
        <p className={`text-xs leading-relaxed line-clamp-3 ${
          isActive ? 'text-gray-700' : 'text-[#d6d3d3aa]'
        }`}>
          {description}
        </p>
      </div>
      
      <div className={`w-full h-1 rounded-full overflow-hidden ${
        isActive ? 'bg-gray-200' : 'bg-[rgba(43,43,44,0.24)]'
      }`}>
        <div 
          className={`h-1 rounded-full transition-all duration-75 ease-linear ${
            isActive ? 'bg-[rgb(80,230,203)]' : 'bg-[rgba(80,230,203,0.5 )]'
          }`}
          style={{ 
            width: `${progress}%`,
            transition: isActive ? 'width 75ms linear' : 'width 300ms ease'
          }}
        />
      </div>
    </div>
  )
}

export default Glassbox