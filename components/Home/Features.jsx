const Features = () => {
    const featureList = [
        {
            title:"",
            body:"",
        },
    ];
    return (
        <div></div>
    );
}
 
export default Features;



export const FeatureCard = ({title, body}) => {
    return (
        <div
        style={{
            
background: "linear-gradient(153deg, rgba(51,61,101,1) 35%, rgba(29,35,58,1) 92%)"
        }}
        >
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
}