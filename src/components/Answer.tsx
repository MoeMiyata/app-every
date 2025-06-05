export const Answer = (props: {str1:string, str2: string, lenAns: number, answer: string}) => {
    const { str1, str2, lenAns, answer } = props;

    return (
        <div className="Setting">
            <p>"{str1}" と "{str2}" の最長共通部分列は、"<strong>{answer}</strong>" であり、その長さは <strong>{lenAns}</strong></p>
        </div>
    )
}