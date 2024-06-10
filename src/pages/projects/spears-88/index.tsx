import React from 'react'
import Layout from '../layout'

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
    <Layout tabs={tabs}>Spears88</Layout>
  )
}

export default Spears88