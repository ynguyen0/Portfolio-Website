import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active 
    ? 'text-[#8ba888] border-b border-[#44624a]' 
    : 'text-stone-500'

    return (
        <button onClick={selectTab}>
           <p className={`mr-3 font-semibold hover:text-[#8ba888] ${buttonClasses}`}>
        {children}
      </p>
        </button>
    )
}

export default TabButton