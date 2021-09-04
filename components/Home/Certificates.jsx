const Certificates = () => {
    const classN = "px-4 py-2 mx-2 rounded my-3";
    return (
        <div className="flex justify-center py-10 "
        style={{
            background:"linear-gradient(94deg, rgba(21,27,40,1) 0%, rgba(28,34,47,1) 65%)"
        }}
        >
            <div className="flex flex-wrap justify-center">
            <a href="/assets/ScorpionFinance_AuditCertificate_InterFi.pdf" className={classN+" bg-yellow-500 hover:bg-yellow-700"} download>AUDIT CERTIFICATE</a>
            <a href="/assets/ScorpionFinance_AuditReport_InterFi.pdf" className={classN+" bg-yellow-600 hover:bg-yellow-800"} download>AUDIT REPORT</a>
            <a href="/assets/ScorpionFinance_KYCCertificate_InterFi.pdf" className={classN+" bg-yellow-700 hover:bg-yellow-900"} download>KYC CERTIFICATE</a>
            </div>

        </div>
    );
}
 
export default Certificates;