import React from 'react'
import PriceCard from './PriceCard';

function PriceCardComp() {
    let data = [
        {
            product: "FREE",
            price: 0,
            users: "Single User",
            usersFlag: true,
            usersHighlight: false,
            storage: "5GB Storage",
            storageFlag: true,
            access: "Community Access",
            accessFlag: true,
            support: "Dedicated Phone Support",
            supportFlag: false,
            reports: "Monthly Status Report",
            reportsFlag: false,
            publicProjects: "Unlimited Public Projects",
            publicProjectsFlag: true,
            privateProjects: "Unlimited Private Projects",
            privateProjectsFlag: false,
            subdomain: "Free Subdomain",
            subdomainFlag: false,
            subdomainHighlight: false
        },
        {
            product: "PLUS",
            price: 9,
            users: "5 Users",
            usersFlag: true,
            usersHighlight: true,
            storage: "50GB Storage",
            storageFlag: true,
            access: "Community Access",
            accessFlag: true,
            support: "Dedicated Phone Support",
            supportFlag: true,
            reports: "Monthly Status Report",
            reportsFlag: false,
            publicProjects: "Unlimited Public Projects",
            publicProjectsFlag: true,
            privateProjects: "Unlimited Private Projects",
            privateProjectsFlag: true,
            subdomain: "Free Subdomain",
            subdomainFlag: true,
            subdomainHighlight: false
        },
        {
            product: "PRO",
            price: 49,
            users: "Unlimited Users",
            usersFlag: true,
            usersHighlight: true,
            storage: "150GB Storage",
            storageFlag: true,
            access: "Community Access",
            accessFlag: true,
            support: "Dedicated Phone Support",
            supportFlag: true,
            reports: "Monthly Status Report",
            reportsFlag: true,
            publicProjects: "Unlimited Public Projects",
            publicProjectsFlag: true,
            privateProjects: "Unlimited Private Projects",
            privateProjectsFlag: true,
            subdomain: "Unlimited Free Subdomains",
            subdomainFlag: true,
            subdomainHighlight: true
        }
    ]

    return <>
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    {data.map((e) => { return <PriceCard data={e} /> })}
                </div>
            </div>
        </section>
    </>
}

export default PriceCardComp
