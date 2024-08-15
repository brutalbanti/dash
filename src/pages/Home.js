import React from 'react';
import OrdersSection from '../components/Home/Orders/OrdersSection';
import TechDepSection from '../components/Home/TechDep/TechDepSection';
import DepartamentsSection from '../components/Home/Departaments/Departaments';

function Home () {
    return (
        <main className="page">
            <OrdersSection/>
            <TechDepSection/>
            <DepartamentsSection/>
        </main>
    )
}

export default Home;