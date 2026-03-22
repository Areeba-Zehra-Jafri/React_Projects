function StudentsList({students})
{
    return(
    <>
        <ul>{students.map((name,index)=> (<li key={index}>{name}</li>))}</ul>
    </>
    );
}

export default StudentsList;