import React from 'react';

const PostingJob = () => {
    const jobData = {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": "JLS Developer",
        "description": "We are looking for a Jls to join our team.",
        "datePosted": "2024-10-16",
        "validThrough": "2024-10-25",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Teckies",
            "sameAs": "https://www.techies.com"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "g.t road",
                "addressLocality": "New Delhi",
                "addressRegion": "CA",
                "postalCode": "94103",
                "addressCountry": "US"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": {
                "@type": "QuantitativeValue",
                "value": 80000,
                "unitText": "YEAR"
            }
        }
    };

    return (
        <div style={{
            maxWidth: '400px',
            margin: '20px auto',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
        }}>
            <div style={{
                padding: '16px',
            }}>
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}>{jobData.title}</h1>
                <p style={{
                    color: 'gray',
                }}>{jobData.description}</p>
                <div style={{
                    marginTop: '16px',
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: '600',
                    }}>Job Details</h3>
                    <p style={{ color: 'darkgray' }}><strong>Date Posted:</strong> {jobData.datePosted}</p>
                    <p style={{ color: 'darkgray' }}><strong>Valid Through:</strong> {jobData.validThrough}</p>
                    <p style={{ color: 'darkgray' }}><strong>Employment Type:</strong> {jobData.employmentType}</p>
                    <p style={{ color: 'darkgray' }}>
                        <strong>Hiring Organization:</strong> {jobData.hiringOrganization.name} 
                        (<a href={jobData.hiringOrganization.sameAs} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Website</a>)
                    </p>
                    <p style={{ color: 'darkgray' }}><strong>Location:</strong> {jobData.jobLocation.address.streetAddress}, {jobData.jobLocation.address.addressLocality}, {jobData.jobLocation.address.addressRegion} {jobData.jobLocation.address.postalCode}, {jobData.jobLocation.address.addressCountry}</p>
                    <p style={{ color: 'darkgray' }}><strong>Base Salary:</strong> {jobData.baseSalary.value.value} {jobData.baseSalary.currency} per {jobData.baseSalary.value.unitText}</p>
                </div>
            </div>

        

            {/* JSON-LD Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify(jobData)}
            </script>
        </div>
    );
};

export default PostingJob;