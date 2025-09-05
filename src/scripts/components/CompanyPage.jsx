import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import CompanyCard from "./CompanyCard"
import CompanyCardSkeleton from "./CompanyCardSkeleton"

export default function CompanyPage() {
    const { company: specifiedCompany } = useParams()
    const [companies, setCompaniesData] = useState([])
    const [companyData, setCompanyData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Lötinäç · " + specifiedCompany

        fetch(`https://lutinexapi.onrender.com/companies`)
            .then(res => res.json())
            .then(obj => setCompaniesData(obj))
            .catch(err => console.error("Failed to fetch data:", err))
    }, [specifiedCompany])

    const company = companies.find(c => c.code === specifiedCompany) || {}
    useEffect(() => {
        if (!company.id) return    
        fetch(`https://lutinexapi.onrender.com/company/${company.id}`)
            .then(res => res.json())
            .then(obj => {
                setCompanyData(obj)
                setLoading(false)
            })
            .catch(err => console.error("Failed to fetch data:", err))
    }, [company])

    return (
        <>
            <Navbar gridEnabled={false} searchEnabled={false} filterEnabled={false} />
            {loading ? <CompanyCardSkeleton /> : <CompanyCard companyData={companyData} />}
        </>
    )
}