import ProjectLayout from '@/components/projectLayout'
import React from 'react'

const Project = () => {
    const tabs = [
        {name:"Project", url:'spears-88/project'},
        {name:"Settings", url:'spears-88/settings'},
        {name:"Contact", url:'spears-88/contact'},
        {name:"About", url:'spears-88/about'},
        {name:"Date", url:'spears-88/data'},
        {name:"Random", url:'spears-88/random'},
    ]
  return (
    <ProjectLayout tabs={tabs}>

        xeeee
    </ProjectLayout>
  )
}

export default Project