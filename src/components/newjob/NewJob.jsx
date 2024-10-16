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
        <div>
            <h1>{jobData.title}</h1>
            <p>{jobData.description}</p>
            <div>
                <h3>Job Details</h3>
                <p><strong>Date Posted:</strong> {jobData.datePosted}</p>
                <p><strong>Valid Through:</strong> {jobData.validThrough}</p>
                <p><strong>Employment Type:</strong> {jobData.employmentType}</p>
                <p><strong>Hiring Organization:</strong> {jobData.hiringOrganization.name} (<a href={jobData.hiringOrganization.sameAs} target="_blank" rel="noopener noreferrer">Website</a>)</p>
                <p><strong>Location:</strong> {jobData.jobLocation.address.streetAddress}, {jobData.jobLocation.address.addressLocality}, {jobData.jobLocation.address.addressRegion} {jobData.jobLocation.address.postalCode}, {jobData.jobLocation.address.addressCountry}</p>
                <p><strong>Base Salary:</strong> {jobData.baseSalary.value.value} {jobData.baseSalary.currency} per {jobData.baseSalary.value.unitText}</p>
            </div>

            {/* JSON-LD Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify(jobData)}
            </script>
        </div>
    );
};

export default PostingJob;