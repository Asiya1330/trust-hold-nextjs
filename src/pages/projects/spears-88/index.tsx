import ProjectLayout from '@/components/projectLayout'
import React from 'react'

const Spears88 = () => {
    const tabs = [
        {name:"Project", url:'/project'},
        {name:"Settings", url:'/project'},
        {name:"Contact", url:'/project'},
        {name:"About", url:'/project'},
        {name:"Date", url:'/project'},
        {name:"Random", url:'/project'},
    ]
  return (
    // <div>Spears 88</div>
    <ProjectLayout tabs={tabs}>Spears88</ProjectLayout>
  )
}

export default Spears88